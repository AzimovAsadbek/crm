import GenericModal from "../../Generics/Modal/index.jsx";
import Title from "../../Generics/Title/index.jsx";
import GenericInput from "../../Generics/Input/index.jsx";
import GenericSelect from "../../Generics/GenericSelect/GenericSelect.jsx";
import useFetch from "../../../hooks/useFetch.jsx";
import {useCallback, useEffect, useState} from "react";
import moment from "moment";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import * as React from "react";
import {groups} from "../../../utils/group.js";

const initialState = {
    added_date: "",
    admin: "",
    days: "",
    field: "",
    first_class: "",
    group: "",
    id: "",
    name: "",
    parents: "",
    payment: "",
    phone: "",
    status: "",
    subject: "",
    surname: "",
    time: "",
    type: "",
}


const formFields = [
    {label: "Ismingiz", name: "name", type: "text", required: true},
    {label: "Familiyangiz", name: "surname", type: "text", required: true},
    {label: "Telefon raqamingiz", name: "phone", type: "text", required: true},
    {label: "Ota-onangiz ismi", name: "parents", type: "text", required: true},
    {label: "Yo'nalishni tanlang", name: "field", type: "select", options: groups, required: true},
    {label: "Guruh nomi", name: "group", type: "text", required: true},
    {label: "Dars vaqti (12:00 - 14:00)", name: "time", type: "text", required: true},
    {label: "Kunni tanlang (Dushanba, Chorshanba, Juma)", name: "days", type: "text", required: true},
    {label: "Qo'shilgan sana", name: "added_date", type: "date", required: true},
    {label: "Moderator ismi", name: "admin", type: "text", required: true},
];

const AllLidsModal = (props) => {
    const {data} = props
    const request = useFetch();
    const [errors, setErrors] = useState(null);
    const [state, setState] = useState(initialState)

    useEffect(() => {
        if (data) {
            setState({...state, ...data})
        }
    }, [data]);
    const onClose = () => {
        props?.onClose(() => {
            setState(initialState)
            setErrors(null);
        });
    }


    const onChangeData = (e) => {
        const {name, value} = e.target;
        setState((prev) => ({...prev, [name]: value}));
        setErrors((prev) => ({...prev, [name]: null}));
    }

    const onSelectDate = (date) => {
        setState((prev) => ({...prev, added_date: date ? date.format("MM/DD/YYYY") : null}));
        setErrors((prev) => ({...prev, added_date: null}));
    };


    const validateFields = useCallback(() => {
        const newErrors = {};
        formFields.forEach(({name, required}) => {
            if (required && !state[name]) {
                newErrors[name] = `${formFields.find(f => f.name === name).label} is required`;
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }, [state]);

    const onSave = async () => {
        if (!validateFields()) return;

        try {
            if (state.id) {
                await request(`/tabs/lids/id/${state.id}`, {
                    method: "PUT",
                    body: state,
                });
            } else {
                await request("/tabs/lids", {
                    method: "POST",
                    body: {...state, id: crypto.randomUUID()},
                });
            }
            props.onUpload();
            onClose();
        } catch (err) {
            setErrors({general: "Failed to save data. Please try again."});
        }
    };


    const renderField = ({label, name, type, options, required}) => {
        switch (type) {
            case "select":
                return (
                    <GenericSelect
                        data={options}
                        value={state[name]?.toLowerCase()}
                        name={name}
                        onChange={onChangeData}
                        aria-label={label}
                    />
                );
            case "date":
                return (
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DatePicker
                            value={state[name] ? moment(state[name]) : null}
                            onChange={onSelectDate}
                            slotProps={{textField: {size: "small", "aria-label": label}}}
                            sx={{width: "100%"}}
                        />
                    </LocalizationProvider>
                );
            default:
                return (
                    <GenericInput
                        $width="100%"

                        $fontSize={16}
                        value={state[name]}
                        name={name}
                        type={type}
                        onChange={onChangeData}
                        aria-label={label}
                        required={required}
                    />
                );
        }
    };

    return (
        <GenericModal {...props} onClose={onClose} onSave={onSave}>
            <Title type={"bold"} $font_size={18}>Lid qoshish</Title>

            {errors?.general && <div style={{color: "red", marginBottom: 8}}>{errors?.general}</div>}

            {formFields.map((field) => (
                <div key={field?.name} style={{marginTop: 16}}>
                    <Title $font_size={16} $line_height={24} $mb={8} color="var(--secondaryColor)">
                        {field.label} {field.required && <span style={{color: "red"}}>*</span>}
                    </Title>
                    {renderField(field)}
                    {errors && errors[field?.name] &&
                        <div style={{color: "red", fontSize: 12, marginTop: 4}}>{errors[field?.name]}</div>}
                </div>
            ))}
        </GenericModal>
    );
}
export default AllLidsModal;