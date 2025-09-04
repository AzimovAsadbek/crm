import {Body, Container, SubSidebar, SubSidebarItem} from "./style.js";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {manager} from "../../../utils/sozlamalar.js";


const ManagerSozlamalar = () => {
    const navigate = useNavigate()
    const onClick = (e, path, title) => {
        e.preventDefault()
        navigate(path, {state: {parent: "Sozlamalar", child: "Manager", subChild: title}})
    }
    return (
        <div>
            <Container>
                <SubSidebar>
                    {
                        manager.map(v => {
                            const {icon: Icon} = v
                            return <SubSidebarItem key={v.path}
                                                   onClick={(e) => onClick(e, v.path, v.title)} to={v.path}>
                                <Icon className={"subIcon"}/>
                                {v.title}
                            </SubSidebarItem>
                        })
                    }
                </SubSidebar>
                <Body>
                    <Outlet/>
                </Body>
            </Container>
        </div>
    );
}
export default ManagerSozlamalar;