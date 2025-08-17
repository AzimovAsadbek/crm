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
Icons.Delete = styled(del)`
    width: 34px;
    height: 34px;
    padding: 6px;
`

export {Container, Icons}