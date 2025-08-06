import styled from "styled-components"

const Container = styled.div`
    display: flex;
`

const SidebarContainer = styled.div`
    width: 280px;
    height: 100vh;
    /* border: 1px solid red; */
    overflow-y: scroll;
    &::-webkit-scrollbar{
        width: 0;
    }
    background-color: white;
`

const Body = styled.div`
    flex: 1;
    border:1px solid red;
    
`

const Wrapper = styled.div`
    /* border:1px solid red; */
    margin: 16px;
    background-color: white;
    border-radius: 8px;
`

export { Container, SidebarContainer, Body, Wrapper }