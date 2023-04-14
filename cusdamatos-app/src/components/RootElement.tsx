import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CompNavbar from "./CompNavbar/CompNavbar";
import CompMenu from "./CompMenu/CompMenu";
import FightersPage from "../pages/FightersPage/FightersPage";
import { Fragment } from "react";

export default function RootElement() {

    const router = createBrowserRouter([
        {path:"/", element: (<HomePage />),},
        {path:"/fighters", element: (<FightersPage />),}
    ])

    return (
        <BrowserRouter>
            <Fragment>
                <Box display="flex" flexDirection="column">
                    <CompNavbar />
                    <Box display="flex" flexDirection="row">
                        <CompMenu />
                        <Box display="flex" width="100%" height="100%" boxShadow={3}>
                            <Routes>
                                {
                                    router.routes.map((elem : any) => {
                                        return <Route path={elem.path} element={elem.element}></Route>
                                    })
                                }
                            </Routes>
                        </Box>
                    </Box>
                </Box>
            </Fragment>
        </BrowserRouter>
    );
}