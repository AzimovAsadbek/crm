import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    inset: 0;
    border: 1px solid black;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(4px);

`

const Wrapper = styled.div`
    margin: 78px auto auto;
    width: fit-content;
    max-width: 900px;
    min-width: 200px;
    background-color: white;
    border-radius: 8px;
    padding: 32px 48px;
    max-height: 844px;
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
`
export {Wrapper, Container, Footer};