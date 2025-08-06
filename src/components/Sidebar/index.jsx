import { Outlet } from "react-router-dom"
import Navbar from "../Navbar"
import { Body, Container, SidebarContainer, Wrapper } from "./style"

const Sidebar = () => {
    return (
        <Container>
            <SidebarContainer>
                <h1>Sidebar</h1>
            </SidebarContainer>
            <Body>
                <Navbar />
                <Wrapper>
                    <Outlet />
                </Wrapper>
            </Body>
        </Container>
    )
}

export default Sidebar
