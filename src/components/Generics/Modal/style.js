import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    inset: 0;
    border: 1px solid black;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 596px;
    max-width: 900px !important;
    min-width: 200px !important;
    background-color: white;
    border-radius: 8px;
    padding: 32px 48px;
    max-height: 90%;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 0;
    }
`
const Footer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    margin-top: 16px;
    width: 196px;
    margin-left: auto;
`
export {Wrapper, Container, Footer};