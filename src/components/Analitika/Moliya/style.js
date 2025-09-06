import styled from "styled-components";
import arrow from "../../../assets/icons/arrow.svg?react"
import arrowUp from "../../../assets/icons/arrowUp.svg?react"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px 24px 8px;
    border: 1px solid #F0F0F0;
    border-radius: 8px;
`

// top and bottom
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Arrow = styled(arrow)`
    transform: ${({right}) => right && `rotate(180deg)`};
    cursor: pointer;
    width: 20px;
    height: 20px;
    padding: 4px;

    &:active {
        & path {
            fill: var(--primaryColor);
        }
    }
`

const DateContainer = styled.div`
    display: flex;
    gap: 8px;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    width: 48px;
    height: 72px;
    border-radius: 24px;
    border: 1px solid #F0F0F0;
    background-color: ${({$active}) => $active === "true" ? "#1890FF" : "white"};
    cursor: pointer;
`

const Secton = styled.div`
    display: flex;
    align-items: center;
`
const ArrowUp = styled(arrowUp)`
    margin-left: 16px;
    margin-right: 8px;
`

const Dot = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 12px;
    background-color: ${({$first}) => $first ? "#A0D911" : "#D3ADF7"};
`
export {Arrow, ArrowUp, Container, DateContainer, Top, Wrapper, Secton, Dot}