import styled from "styled-components";
import edit from "../../../assets/icons/edit.svg?react"
import del from "../../../assets/icons/delete.svg?react"
import GenericInput from "../../Generics/Input/index.jsx";


const Container = styled.div``

const Icons = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 6px;
    cursor: pointer;
`

Icons.Edit = styled(edit)`
    width: 34px;
    height: 34px;
    padding: 6px;
    cursor: pointer;
`
Icons.Delete = styled(del)`
    width: 34px;
    height: 34px;
    padding: 6px;
`

const Section = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 16px;
    gap: 8px;
`

const SelectWrapper = styled.div`
    display: flex;
    //justify-content: space-between;
    align-items: center;
    //width: 250px;
    flex: 1;
`

const Wrap = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    //margin-top: 8px;
    height: 40px;
    border: 1px solid var(--secondaryColor);
    border-radius: 4px 0 0 4px;
    border-right: none;
    flex: 1;
    background-color: #F8FAFC;
`

const ModalInput = styled(GenericInput)`
    height: 41px;
    border-color: red;
    border-radius: 0 4px 4px 0;
    border-left: none;
    font-size: 16px;
`

export {Container, Icons, Section, SelectWrapper, Wrap, ModalInput}