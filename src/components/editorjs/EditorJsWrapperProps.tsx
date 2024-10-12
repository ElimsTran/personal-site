//@ts-nocheck
import * as React from "react";
import { EditorConfig } from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "./tools"; // Ensure this path is correct

interface EditorJsWrapperProps extends React.ComponentProps<"div"> {
  config?: EditorConfig;
}

export default function EditorJsWrapper({
  config = {},
  ...restProps
}: EditorJsWrapperProps): JSX.Element {
  const elmtRef = React.useRef<HTMLDivElement | null>(null);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    // Set the mounted state to true after the component has mounted
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  React.useEffect(() => {
    if (!isMounted || !elmtRef.current) {
      return;
    }

    let editorJs: any;

    (async () => {
      const { default: EditorJS } = await import("@editorjs/editorjs");
      const { default: DragDrop } = await import("editorjs-drag-drop");

      editorJs = new EditorJS({
        ...config,
        holder: elmtRef.current as HTMLElement,
        onReady: () => {
          console.log("Editor.js is ready to work!");
          new DragDrop(editorJs);
        },
        onChange: (api, event) => {
          console.log("Now I know that Editor's content changed!", event);
        },

        autofocus: true,
        placeholder: "Let’s write an awesome story!",
        tools: await EDITOR_JS_TOOLS(),
        tunes: ["indentTune", "noticeTune"], // Await the tools if they're async
      });
    })().catch((error): void => console.error(error));

    return (): void => {
      if (editorJs?.destroy) {
        editorJs.destroy();
      }
    };
  }, [isMounted, config]);

  return <div {...restProps} ref={elmtRef} />;
}
