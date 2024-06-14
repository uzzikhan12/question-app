import { Box, Typography } from "@mui/material"
import BAButton from "../components/BAButton"
import { useNavigate } from "react-router-dom"

export default function BAHeader  ()
{
    const nevigate = useNavigate();

    return(
        <Box className="bg-dark text-white">
            <Box className="container py-3 d-flex justify-content-between -align-items-center">
                <Typography className="fs-1">
                    Question                    
                </Typography>
                <BAButton 
                    label="Ask Question"
                    onClick={()=>{
                        nevigate("/askquestion");
                    }}
                    />
            </Box>
        </Box>
    )
}