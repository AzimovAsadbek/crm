import GenericModal from "../../Generics/Modal/index.jsx";
import Title from "../../Generics/Title/index.jsx";
import GenericInput from "../../Generics/Input/index.jsx";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {ModalInput, Section, SelectWrapper, Wrap} from "./style.js";
import Checkbox from "@mui/material/Checkbox";
import useFetch from "../../../hooks/useFetch.jsx";
import {useCallback, useEffect, useState} from "react";
import * as React from "react";

const CategoryModal = (props) => {
    const {data} = props
    const request = useFetch();
    const [errors, setErrors] = useState(null);
    const [state, setState] = useState({})

    useEffect(() => {
        if (data) {
            setState({...state, ...data})
        }
    }, [data]);
    const onClose = () => {
        props?.onClose(() => {
            setState({})
            setErrors(null);
        });
    }
    const onChangeData = (e) => {
        const {name, value} = e.target;
        setState((prev) => ({...prev, [name]: name === "status" ? value.toUpperCase() : value}));
        setErrors((prev) => ({...prev, [name]: null}));
    }


    const validateFields = useCallback(() => {
        const newErrors = {};
        !state?.title ? newErrors.title = "Kurs yo'nalishi" : ""
        setErrors(newErrors);
        return state?.title;
    }, [state]);

    const onSave = async () => {
        if (!validateFields()) return;

        try {
            if (state.id) {
                await request(`/tabs/category/id/${state.id}`, {
                    method: "PUT",
                    body: {...state, category: state?.title?.toLowerCase()},
                });
            } else {
                await request("/tabs/category", {
                    method: "POST",
                    body: {...state, id: crypto.randomUUID(), category: state?.title?.toLowerCase()},
                });
            }
            props.onUpload();
            onClose();
        } catch (err) {
            setErrors({general: "Failed to save data. Please try again."});
        }
    };

    return (
        <GenericModal {...props} onClose={onClose} onSave={onSave}>
            <Title type={"bold"} $font_size={18}>Yo'nalish qo'shish</Title>
            {errors?.general && <div style={{color: "red", marginBottom: 8}}>{errors?.general}</div>}


            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Kursning
                yo'nalishi <span style={{color: "red"}}>*</span></Title>

            <GenericInput $width={500} $fontSize={16} defaultValue={state?.title} name={"title"} onChange={onChangeData}
                          required={true}/>
            {errors && errors?.title &&
                <div style={{color: "red", fontSize: 12, marginTop: 4}}>{errors?.title} is required</div>}


            <Title $font_size={16} $line_height={24} $mb={8} color={"var(--secondaryColor)"} $mt={16}>Kursning
                nomi</Title>
            <GenericInput $width={500} $fontSize={16} defaultValue={data?.name}/>


            <Section>
                <SelectWrapper>

                    <Title style={{flex: 1}} $font_size={16} $line_height={24} color={"var(--secondaryColor)"}
                    >Filiallar</Title>
                    <Title style={{flex: 1}} $font_size={16} $line_height={24} color={"var(--secondaryColor)"}
                    >Narxi</Title>
                </SelectWrapper>
                <SelectWrapper>
                    <Wrap>
                        <Checkbox/>
                        <Title $font_size={16} $line_height={24} color={"var(--primaryColor)"}
                        >Chilonzor</Title>
                    </Wrap>
                    {/*<ModalInput/>*/}
                    <GenericInput $border_radius={"0 4px 4px 0"}/>
                </SelectWrapper>

                <SelectWrapper>
                    <Wrap>
                        <Checkbox/>
                        <Title $font_size={16} $line_height={24} color={"var(--primaryColor)"}
                        >Chilonzor</Title>
                    </Wrap>
                    {/*<ModalInput/>*/}
                    <GenericInput $border_radius={"0 4px 4px 0"}/>
                </SelectWrapper>

                <SelectWrapper>
                    <Wrap>
                        <Checkbox/>
                        <Title $font_size={16} $line_height={24} color={"var(--primaryColor)"}
                        >Chilonzor</Title>
                    </Wrap>
                    {/*<ModalInput/>*/}
                    <GenericInput $border_radius={"0 4px 4px 0"}/>
                </SelectWrapper>

                <SelectWrapper>
                    <Wrap>
                        <Checkbox/>
                        <Title $font_size={16} $line_height={24} color={"var(--primaryColor)"}
                        >Chilonzor</Title>
                    </Wrap>
                    {/*<ModalInput/>*/}
                    <GenericInput $border_radius={"0 4px 4px 0"}/>
                </SelectWrapper>

            </Section>

        </GenericModal>
    );
}
export default CategoryModal;