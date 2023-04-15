import { Box } from "@mui/material";
import gif from "../../img/gif1.gif"
import CompTreeView from "../CompTreeView/CompTreeView";

export default function CompMenu() {

    return (
        <Box
            sx = {{
                backgroundColor : 'white',
                p : 3
            }}
            boxShadow={3}
        >
            <Box 
                component="img"
                sx={{m:3}}
                height='auto'
                maxWidth='50%'
                src={gif}>
            </Box>
            <CompTreeView />            
        </Box>
    );
}