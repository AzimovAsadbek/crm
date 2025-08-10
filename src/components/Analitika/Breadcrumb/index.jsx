import {useLocation} from "react-router-dom";
import {Arrow, Conatiner} from "./style.js";
import Title from "../../Generics/Title/index.jsx";


const Breadcrumb = () => {
    const location = useLocation()
    return location.pathname !== "/analitika" ? <Conatiner title={location.state?.parent}>
        <Title type={"true"} $line_height={28} $font_size={20}
        >{location.state?.parent}</Title>
        {location.state?.child && <Arrow/>}
        <Title $line_height={28} $font_size={20}>{location.state?.child}</Title>
    </Conatiner> : null
}

export default Breadcrumb;