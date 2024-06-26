import { useRef, useState } from "react";
import { Box, Flex, VStack, Stack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <Box w="100%" p={1}>
      <Stack direction={{ base: "column", md: "row" }} spacing={4}>
        <Box w={{ base: "100%", md: "50%" }}>
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="75vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Box>
        <Box w={{ base: "100%", md: "50%" }}>
          <Output editorRef={editorRef} language={language} />
        </Box>
      </Stack>
    </Box>
  );
};

export default CodeEditor;
