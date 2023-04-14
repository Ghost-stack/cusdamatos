import { Box } from "@mui/material";
import gif from "../../img/gif1.gif"
import CompTreeView from "../CompTreeView/CompTreeView";

export default function CompMenu() {

    return (
        <Box>
            <Box 
                component="img"
                sx={{m:3}}
                height={150}
                width={250}
                src={gif}>
            </Box>
            <CompTreeView />
        </Box>
    );
}