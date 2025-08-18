import styled from "styled-components";
import edit from "../../../assets/icons/edit.svg?react"
import del from "../../../assets/icons/delete.svg?react"


const Container = styled.div``

const Icons = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
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

const Section = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
`

const SelectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const Wrap = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    margin-top: 6px;
`

export {Container, Icons, Section, SelectWrapper, Wrap}