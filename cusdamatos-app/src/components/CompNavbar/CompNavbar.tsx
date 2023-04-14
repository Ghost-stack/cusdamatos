
import { Box } from "@mui/material";
import logo from "../../img/CusD'AmatosLogo.webp"

export default function CompNavbar() {
    return (
        <Box 
            boxShadow={3}
            sx={{height: '15%', display:'flex', flexDirection:'row', justifyContent:'center'}}>
            <Box 
                component="img"
                sx={{
                    height: 90,
                    m: 2
                }}
                src={logo}>
            </Box>
        </Box>
    );
}