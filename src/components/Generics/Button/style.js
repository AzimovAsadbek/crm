import styled from "styled-components";
import arrow from "../../../assets/icons/arrow.svg?react"
import filter from "../../../assets/icons/filter.svg?react"
import imp from "../../../assets/icons/import.svg?react"
import add from "../../../assets/icons/add.svg?react"

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: 1px solid #F0F5FF;
    border-radius: 8px;
    padding: 10px 16px;
    gap: 8px;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    color: var(--primaryColor);
    white-space: nowrap;

    &:active {
        opacity: 0.8;
        transform: scale(0.98)
    }

    user-select: none;
    -webkit-user-select: none;
`
const Icons = styled.div``
Icons.Next = styled(arrow)`
    & path {
        fill: white;
    }
`
Icons.Filter = styled(filter)`
    & path {
        fill: white;
    }
`
Icons.Import = styled(imp)``

Icons.Add = styled(add)``

Button.Save = styled(Button)`
    background-color: var(--activeColor);
    border: 0;
    color: white;

    &:active {
        opacity: 0.95;
        transform: scale(0.98)
    }
`
Button.Delete = styled(Button)`
    border: 1px solid #FFA39E;
    color: #F5222D;

`
Button.Filter = styled(Button)`
    background-color: #253e5fe0;
    color: white;

    &:active {
        opacity: 0.95;
    }
`
Button.Add = styled(Button)`
    background-color: ${({bgcolor}) => bgcolor ? bgcolor : "var(--activeColor)"};
    color: white;

    &:active {
        opacity: 0.95;
    }
`
Button.Next = styled(Button.Save)`

`
Button.Import = styled(Button)``

export {Button, Icons}