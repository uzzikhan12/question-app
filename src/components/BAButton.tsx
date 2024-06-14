import { Button } from "@mui/material";

export default function (props:any)
 {
    const {label, onClick} = props;

    return(
    <>
        <Button 
            onClick={onClick}
            variant="contained"
            sx={{paddingX:3,borderRadius:30}}
            color="error"
        >
            {label}
        </Button>
    </>
    )
}