import { Box } from "@mui/material";
import BAFooter from "../layout/BAFooter";
import BAHeader from "../layout/BAHeader";
import BATextArea from "../components/BATextArea";
import BAButton from "../components/BAButton";
import { useState } from "react";
import { sendData } from "../config/firebasemethod";

export default function AskQuestion () {
  const [question, setQuestion] = useState("");

  const addData = () => {
    let obj = {
      question: question,
      createdAt: JSON.stringify(new Date()),
    };
    sendData("questions", obj);
  };

  return (
    <>
      <BAHeader />
        <Box className="container p-3">
          <Box>
            <BATextArea
              value={question}
              onChange={(e: any) => {
              setQuestion(e.target.value);
              }}
              label="Ask Question"
            />
            <Box className="py-3">
              <BAButton onClick={addData} label="Submit" />
            </Box>
          </Box>
        </Box>
      <BAFooter />
    </>
  );
}