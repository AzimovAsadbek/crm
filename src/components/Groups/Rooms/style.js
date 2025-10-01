import styled from "styled-components";
import edit from "../../../assets/icons/edit.svg?react"
import del from "../../../assets/icons/delete.svg?react"

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
Icons.Move = styled(del)`
    width: 34px;
    height: 34px;
    padding: 6px;
`

const TimeWrapper = styled.div`
    display: inline-block;
    padding: 0 5px;
    border-radius: 4px;
    margin-left: 6px;
    background-color: rgba(230, 230, 230, 0.78);
`

export {Container, Icons, TimeWrapper}