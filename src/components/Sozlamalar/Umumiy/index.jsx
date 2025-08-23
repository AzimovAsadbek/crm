import Breadcrumb from "../../Analitika/Breadcrumb/index.jsx";
import {Body, Container, SubSidebar, SubSidebarItem} from "./style.js";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import umumiy from "../../../utils/sozlamalar.js";
import {useState} from "react";

const UmumiySozlamalar = () => {
    const navigate = useNavigate()
    const onClick = (e, path) => {
        e.preventDefault()
        navigate(path, {state: {parent: "Sozlamalar", child: "Umumiy Sozlamalar"}})
    }
    return (
        <div>
            <Breadcrumb/>
            <Container>
                <SubSidebar>
                    {
                        umumiy.map(v => {
                            const {icon: Icon} = v
                            return <SubSidebarItem key={v.path}
                                                   onClick={(e) => onClick(e, v.path)} to={v.path}>
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
export default UmumiySozlamalar;