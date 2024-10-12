"use client";

import EditorJsWrapperProps from "@/components/editorjs/EditorJsWrapperProps";
import { Box, Container } from "@mui/material";

export default function page() {
  return (
    <Container
      className="bg-elims-backgroundColorLight bg-opacity-[50%] min-h-[85vh]"
      maxWidth="md"
    >
      <Box className="pt-[50px]">
        <EditorJsWrapperProps />
      </Box>
    </Container>
  );
}
