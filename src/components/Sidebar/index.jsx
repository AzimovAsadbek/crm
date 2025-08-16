import {Outlet, useLocation, useNavigate} from "react-router-dom";
import Navbar from "../Navbar";
import {
    Body,
    ChildTitle,
    ChildWrapper,
    Container,
    Exit,
    Logo,
    Menu,
    MenuInfo,
    MenuTitle,
    Profile,
    Row,
    SidebarContainer,
    SubTitle,
    Title,
    Wrap,
    Wrapper,
} from "./style";

import noImg from "../../assets/images/noUser.webp";
import ExitIcon from "../../assets/icons/exit.svg?react";

import sidebar from "../../utils/sidebar";
import {useState} from "react";

const Sidebar = () => {
    const [open, setOpen] = useState(
        JSON.parse(localStorage.getItem("open")) || []
    );
    const navigate = useNavigate();
    const location = useLocation();

    const clickLogo = () => {
        navigate("/");
    };

    const onOpen = ({id, path, children, title}, e) => {
        e.preventDefault();
        if (open.includes(id)) {
            let res = open.filter((v) => v !== id);
            localStorage.setItem("open", JSON.stringify(res));
            setOpen(res);
        } else {
            localStorage.setItem("open", JSON.stringify([...open, id]));
            setOpen([...open, id]);
        }
        if (!children) {
            e.preventDefault();
            navigate(path, {state: {parent: title}});
        }
    };
    const logOut = () => {
        navigate("/login");
    };
    const clickChild = (e, {path, title}, parent) => {
        e.preventDefault();
        navigate(path, {state: {parent: parent, child: title}});
    }
    return (
        <Container>
            <SidebarContainer>
                <Logo onClick={clickLogo}>Webbrain.crm</Logo>

                {/* Profile */}
                <Profile>
                    <Profile.Img src={noImg}/>
                    <Profile.Info>
                        <Title>Azimov Asadbek</Title>
                        <SubTitle>asadbekazimov0629@gmail.com</SubTitle>
                    </Profile.Info>
                </Profile>

                {/* Sidebar */}
                <Menu>
                    {sidebar.map((parent) => {
                        const activePath = location.pathname.includes(parent.path);

                        const Icon = parent?.icon;
                        return (
                            !parent.hiddin && (
                                <div key={parent.id}>
                                    <MenuInfo
                                        onClick={(e) => onOpen(parent, e)}
                                        $active={activePath ? "true" : ""}
                                    >
                                        <MenuTitle>
                                            <Icon/>
                                            <div>{parent.title}</div>
                                        </MenuTitle>
                                        {parent.children && (
                                            <Row $active={open.includes(parent?.id) ? "true" : ""}/>
                                        )}
                                    </MenuInfo>
                                    {parent?.children?.map((child) => {
                                        return (
                                            <Wrap to={child.path} key={child.id}
                                                  onClick={(e) => clickChild(e, child, parent.title)}>
                                                <ChildWrapper
                                                    $active={open.includes(parent?.id) ? "true" : ""}
                                                    $activepath={
                                                        location.pathname.includes(child.path) ? "true" : ""
                                                    }
                                                >
                                                    <ChildTitle>
                                                        <MenuTitle>{child.title}</MenuTitle>
                                                    </ChildTitle>
                                                </ChildWrapper>
                                            </Wrap>
                                        );
                                    })}
                                </div>
                            )
                        );
                    })}
                </Menu>
                <Exit onClick={logOut}>
                    <ExitIcon/>
                    <div>Chiqish</div>
                </Exit>
            </SidebarContainer>
            <Body>
                <Navbar/>
                <Wrapper>
                    <Outlet/>
                </Wrapper>
            </Body>
        </Container>
    );
};

export default Sidebar;
