import {createPortal} from "react-dom";
import {Container} from "./style.js";
import {CircularProgress} from "@mui/material";

const Spinner = ({spinner}) => {
    return spinner ? createPortal(<Container><CircularProgress/></Container>, document.getElementById('root')) : null
}
export default Spinner;