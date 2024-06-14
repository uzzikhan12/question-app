import { useEffect, useState } from "react"
import BAFooter from "../layout/BAFooter"
import BAHeader  from "../layout/BAHeader"
import { useNavigate } from "react-router-dom";
import { getData } from "../config/firebasemethod";
import { Box, Paper, Typography } from "@mui/material";

export const AllQuestion = () => 
{
    const {data} = getData("questions");
    // const [allQuestions,setAllQuestion] = useState<any>(data);
    const nevigate = useNavigate();

    console.log(data);

        
    return<>
        <BAHeader />
        
        {/* <Box className="container p-3">
            {data.map((x:any,i:any)=>{
                <Paper
                  onClick={()=>{
                    nevigate(`/question/${x.id}`)
                  }}
                >
                    <Typography className="fs-4 fw-semibold">{x.question}</Typography>
                    <Box>
                        <Box>Total Answers : 786</Box>
                    </Box>
                </Paper>
            })
            }

        </Box> */}

        <Box>
            {JSON.stringify(data)}
        </Box>


        <BAFooter />
    </>
}