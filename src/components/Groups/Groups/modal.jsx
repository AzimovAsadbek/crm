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
import {level} from "../../../utils/level.js";
import {status, type} from "../../../utils/status.js";

const initialState = {
    days: "",
    field: "",
    id: "",
    status: "false",
    start_time: "",
    end_time: "",
    category: "",
    level: "beginner",
    title: "",
    type: "online"
}


const formFields = [
    {label: "Guruh nomi", name: "title", type: "text", required: true},
    {label: "Yo'nalishni tanlang", name: "field", type: "select", options: groups, required: true},
    {label: "Darajangizni tanlang", name: "level", type: "select", options: level, required: true},
    {label: "Turi", name: "type", type: "select", options: type, required: true},
    {label: "Kunni tanlang (Dushanba, Chorshanba, Juma)", name: "days", type: "text", required: true},
    {label: "Boshlanish vaqti", name: "start_time", type: "text", required: true},
    {label: "Tugash vaqti", name: "end_time", type: "text", required: true},
    {label: "Status", name: "status", type: "select", options: status, required: true},
];

const GroupsModal = (props) => {
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
        setState((prev) => ({...prev, [name]: name === "status" ? value.toUpperCase() : value}));
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
                await request(`/tabs/groups/id/${state.id}`, {
                    method: "PUT",
                    body: state,
                });
            } else {
                await request("/tabs/groups", {
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
export default GroupsModal;