import styled from "styled-components";
import edit from "../../../assets/icons/edit.svg?react"
import del from "../../../assets/icons/delete.svg?react"
import keldi from "../../../assets/icons/keldi.svg?react"
import sababli from "../../../assets/icons/sababli.svg?react"
import sababsiz from "../../../assets/icons/sababsiz.svg?react"
import birinchi from "../../../assets/icons/birinchi.svg?react"

const Container = styled.div``

const Icons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 6px;
`

Icons.Edit = styled(edit)`
    width: 34px;
    height: 34px;
    padding: 6px;
`
Icons.Delete = styled(del)`
    width: 34px;
    height: 34px;
    padding: 6px;
`
Icons.Keldi = styled(keldi)`
`
Icons.Sababli = styled(sababli)``
Icons.Sababsiz = styled(sababsiz)``
Icons.Birinchi = styled(birinchi)``

const StatusContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 171px;
    height: 197px;
    border: 1px solid #F0F0F0;
    background: white;
    border-radius: 8px;
    top: ${({y}) => `${y}px`};
    left: ${({x}) => `${x}px`};
    transform: translate(-50%);
    z-index: 999;
`
const Arrow = styled.div`
    position: relative;
    width: 24px;
    height: 24px;
    background: white;
    border: 1px solid;
    border-color: #F0F0F0 transparent transparent #F0F0F0;
    margin-left: 67px;
    transform: rotate(45deg);
    top: -12px;

`

const StatusWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 16px;
    align-items: center;
    //height: 42px;
    padding: 10px 15px;

    &:hover {
        background-color: #F8FAFC;
    }
`

export {Container, Icons, StatusContainer, Arrow, StatusWrapper}