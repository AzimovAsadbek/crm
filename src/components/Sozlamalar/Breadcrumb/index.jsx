import {useLocation} from "react-router-dom";
import {Arrow, Conatiner} from "./style.js";
import Title from "../../Generics/Title/index.jsx";


const Breadcrumb = (props) => {
    const location = useLocation()
    return location.pathname !== "/analitika" ? <Conatiner title={location.state?.parent}>
        <Title type={"true"} $line_height={28} $font_size={20}
        >{location.state?.parent}</Title>
        {location.state?.child && <Arrow/>}
        <Title type={"true"} $line_height={28} $font_size={20}>{location.state?.child}</Title>
        {location.state?.subChild && <Arrow/>}
        <Title $line_height={28} $font_size={20}>{location.state?.subChild}</Title>
        <div style={{display: "flex", marginLeft: "auto", gap: "16px"}}>
            {props?.children}
        </div>
    </Conatiner> : null
}

export default Breadcrumb;