import { Box, Button } from "@mui/material"
import CompMenu from "../CompMenu/CompMenu";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useCallback, useEffect, useState } from "react";

interface CompNavbarState {
    showMenu : boolean
    screenWidth : number
}

export default function CompFooter () {
    
    const [state, setState] = useState<CompNavbarState>({
        showMenu : false,
        screenWidth : 0
    })

    const onLoadPage = useCallback(() => {
        setState( s => {
            let newState = {...s}
            newState.screenWidth = window.screen.width
            newState.showMenu = false
            return newState
        })
    }, [])

    useEffect(()=> {
        onLoadPage()
    }, [onLoadPage])

    return ( 
        <>
        <Box
            sx={{
                position: 'relative',
                bottom: 0,
                justifyContent: 'center',
                alignContent: 'center'
            }}
        >
            { state.screenWidth < 600 && 
                <Button variant="outlined" startIcon={<MoreVertIcon />} sx={{m:5}} onClick={() => {setState( s => {
                    let newState = {...s}
                    newState.showMenu = true
                    return newState
                })}}>
                    Menu
                </Button>
            }
        </Box>
        <Box
            sx={{
                position: 'absolute',
                left: 0
            }}
        >
            { state.showMenu && <CompMenu />}
        </Box>
        </>
    );
}