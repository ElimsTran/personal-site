export const EDITOR_JS_TOOLS = async (): Promise<Record<string, object>> => {
  const [
    { default: Embed },
    { default: Table },
    { default: Paragraph },
    { default: NestedList },
    { default: LinkTool },
    { default: Raw },
    { default: Header },
    { default: CheckList },
    { default: Delimiter },
    { default: InlineCode },
    { default: ToggleBlock },
    { default: AttachesTool },
    { default: InlineImage },
    { default: ImageGallery },
    { default: AudioPlayer },
    { default: EditorjsCodecup },
    { default: ColorPlugin },
    { default: TextVariantTune },
    { default: NoticeTune },
    { default: Strikethrough },
    { default: IndentTune },
    { default: DragDrop }, // do not remove this :) is run in onReady
    { default: Iframe },
    // { default: Image },
    // { default: Marker },
    // { default: Quote },
    // { default: LinkAutoComplete },
    // { default: Code },
    // { default: SimpleImage },
    // { default: AnyButton },
    // { default: MermaidTool },
  ] = await Promise.all([
    import("@editorjs/embed"),
    import("editorjs-table"),
    import("editorjs-paragraph-with-alignment"),
    import("@editorjs/nested-list"),
    import("@editorjs/link"),
    import("@editorjs/raw"),
    import("editorjs-header-with-alignment"),
    import("@editorjs/checklist"),
    import("@coolbytes/editorjs-delimiter"),
    import("@editorjs/inline-code"),
    import("editorjs-toggle-block"),
    import("@editorjs/attaches"),
    import("editorjs-inline-image"),
    import("@rodrigoodhin/editorjs-image-gallery"),
    import("editorjs-audio-player"),
    import("@calumk/editorjs-codecup"),
    import("editorjs-text-color-plugin"),
    import("@editorjs/text-variant-tune"),
    import("editorjs-notice"),
    import("@sotaproject/strikethrough"),
    import("editorjs-indent-tune"),
    import("editorjs-drag-drop"),
    import("@hammaadhrasheedh/editorjs-iframe"),
    // import("@editorjs/image"),
    // import("@editorjs/marker"),
    // import("@editorjs/quote"),
    // import("@editorjs/link-autocomplete"),
    // import("@editorjs/code"),
    // import("simple-image-editorjs"),
    // import("editorjs-button"),
    // import("editorjs-mermaid"),
  ]);

  return {
    paragraph: {
      class: Paragraph,
      inlineToolbar: true,
      shortcut: "CMD+SHIFT+P",
    },
    header: {
      class: Header,
      placeholder: "Enter a header",
      shortcut: "CMD+SHIFT+H",
    },
    toggle: {
      class: ToggleBlock,
      inlineToolbar: true,
    },
    imageGallery: ImageGallery,
    image: {
      class: InlineImage,
      inlineToolbar: true,
      config: {
        embed: {
          display: true,
        },
        unsplash: {
          appName: "Elims",
          apiUrl: "https://your-proxy-api-url.com",
          maxResults: 30,
          imageParams: {
            q: 85,
            w: 1500,
          },
        },
      },
    },
    audioPlayer: AudioPlayer,
    delimiter: Delimiter,
    table: {
      class: Table,
      inlineToolbar: true,
      config: {
        rows: 2,
        cols: 3,
      },
    },
    list: {
      class: NestedList,
      inlineToolbar: true,
      config: {
        defaultStyle: "unordered",
      },
    },
    code: EditorjsCodecup,
    raw: Raw,
    Color: {
      class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
      config: {
        defaultColor: "#FFF",
        type: "text",
        customPicker: true, // add a button to allow selecting any colour
        colorCollections: [
          "#EC7878",
          "#9C27B0",
          "#673AB7",
          "#3F51B5",
          "#0070FF",
          "#03A9F4",
          "#00BCD4",
          "#4CAF50",
          "#8BC34A",
          "#CDDC39",
          "#FFF",
        ],
      },
    },
    Marker: {
      class: ColorPlugin,
      config: {
        colorCollections: [
          "#EC7878",
          "#9C27B0",
          "#673AB7",
          "#3F51B5",
          "#0070FF",
          "#03A9F4",
          "#00BCD4",
          "#4CAF50",
          "#8BC34A",
          "#CDDC39",
          "#FFF",
        ],
        defaultColor: "#FFBF00",
        type: "marker",
        icon: `<svg fill="#000000" height="200px" width="200px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M17.6,6L6.9,16.7c-0.2,0.2-0.3,0.4-0.3,0.6L6,23.9c0,0.3,0.1,0.6,0.3,0.8C6.5,24.9,6.7,25,7,25c0,0,0.1,0,0.1,0l6.6-0.6 c0.2,0,0.5-0.1,0.6-0.3L25,13.4L17.6,6z"></path> <path d="M26.4,12l1.4-1.4c1.2-1.2,1.1-3.1-0.1-4.3l-3-3c-0.6-0.6-1.3-0.9-2.2-0.9c-0.8,0-1.6,0.3-2.2,0.9L19,4.6L26.4,12z"></path> </g> <g> <path d="M28,29H4c-0.6,0-1-0.4-1-1s0.4-1,1-1h24c0.6,0,1,0.4,1,1S28.6,29,28,29z"></path> </g> </g></svg>`,
      },
    },
    iframe: Iframe,
    textVariant: TextVariantTune,
    checklist: CheckList,
    noticeTune: NoticeTune,
    indentTune: IndentTune,
    strikethrough: Strikethrough,
    // linkTool: {
    //   class: LinkTool,
    //   config: {
    //     endpoint: "http://localhost:8008/fetchUrl",
    //   },
    // },
    // attaches: {
    //   class: AttachesTool,
    //   config: {
    //     endpoint: "http://localhost:8008/uploadFile",
    //   },
    // },
    // inlineCode: InlineCode,
    // image: {
    //   class: Image,
    //   config: {
    //     endpoints: {
    //       byFile: "http://localhost:8008/uploadFile", // Your backend file uploader endpoint
    //       byUrl: "http://localhost:8008/fetchUrl", // Your endpoint that provides uploading by Url
    //     },
    //   },
    // },
    // AnyButton: {
    //   class: AnyButton,
    //   inlineToolbar: false,
    //   config: {
    //     css: {
    //       btnColor: "bg-[white] text",
    //     },
    //     textValidation: () => {
    //       return true;
    //     },
    //     linkValidation: () => {
    //       return true;
    //     },
    //   },
    // },
    // mermaid: MermaidTool,
  };
};
