import {Container, Icons} from "./style.js";
import GenericTable from "../../Generics/Table";
import {useContext, useEffect, useState} from "react";
import Breadcrumb from "../../Generics/Breadcrumb/index.jsx";
import GenericButton from "../../Generics/Button/index.jsx";
import GenericSelect from "../../Generics/GenericSelect/GenericSelect.jsx";
import * as React from "react";
import Title from "../../Generics/Title/index.jsx";
import useFetch from "../../../hooks/useFetch.jsx";
import {AllLidsContext} from "../../../context/lids/index.jsx";
import GenericInput from "../../Generics/Input/index.jsx";
import useQuery from "../../../hooks/useQuery.js";
import useReplace from "../../../hooks/useReplace.js";
import {useNavigate} from "react-router-dom";
import {groups} from "../../../utils/group.js";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import moment from "moment";
import AllLidsModal from "./modal.jsx";

const FirstClass = () => {
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [modalData, setModalData] = useState({});
    const [spinner, setSpinner] = useState(false);
    const navigate = useNavigate();
    const [state, dispatch] = useContext(AllLidsContext);

    const request = useFetch()
    const query = useQuery();
    const [filter, setFilter] = useState({
        name: query.get("name") || "",
        group: query.get("group") || "",
        field: query.get("field") || "",
        days: query.get("days") || "",
        admin: query.get("admin") || "",
        date: query.get("date") || "",

    });


    const getStudent = async (query = "") => {
        setSpinner(true);
        let res = await request(`/tabs/lids${query}`);

        dispatch({type: "get", payload: res})
        setSpinner(false);
    }

    useEffect(() => {
        getStudent()
    }, [])

    const onEdit = (e, row) => {
        e.stopPropagation();
        setOpenModal(!openModal);
        setModalData(row)
    }


    const headCells = [
        {
            id: 'name',
            label: 'O’quvchining ismi',
        },
        {
            id: 'phone',
            label: 'Telefon raqami',
        },
        {
            id: 'added_date',
            label: 'Qo’shilgan sana',
        },
        {
            id: 'field',
            label: 'Guruh / Fan',
        },
        {
            id: 'days',
            label: 'Dars kuni vaqti',
        },

        {
            id: 'admin',
            label: 'Moderator',
        },
        {
            id: "action",
            label: "",
            render: (row) => <Icons>
                <Icons.Edit onClick={(e) => onEdit(e, row)}/>
            </Icons>
        }
    ];


    const onToggleModal = (callback) => {
        setOpenModal(!openModal);
        setModalData(null)
        callback && callback()
    }


    const onChangeFilter = (e) => {
        let {name, value} = e.target;
        setFilter({...filter, [name]: value});
        const query = useReplace(value, name)
        navigate(`${location.pathname}${query}`, {state: {parent: "Lidlar", child: "Barcha Lidlar"}})
        getStudent(`/search${query}`)
    }

    const onSelectDate = (event) => {
        const time = moment(event)
        let date = `${time.month() + 1}/${time.date()}/${time.year()}`
        if (!time.date() && !time.month() && !time.year()) date = null
        setFilter({...filter, date: date});
        const query = useReplace(date, "added_date")
        navigate(`${location.pathname}${query}`, {state: {parent: "Lidlar", child: "Barcha Lidlar"}})
        getStudent(`/search${query}`)
    }

    return <Container>
        <AllLidsModal open={openModal} onClose={onToggleModal} data={modalData} onUpload={getStudent}
                      len={state?.length || 1}/>

        <Breadcrumb>
            <GenericButton type={"import"}>Import</GenericButton>
            <GenericButton type={"filter"} onClick={() => setOpen(!open)}>Filter</GenericButton>
        </Breadcrumb>
        <GenericTable open={open} headCells={headCells} rows={state} spinner={spinner}>
            <div style={{width: "200px"}}>
                <Title $font_size={14} $line_height={20} $mb={8} $mt={-20}
                       color={"var(--secondaryColor)"}>Full name</Title>
                <GenericInput $width={198} $fontSize={16} defaultValue={filter.name} width={500}
                              onChange={onChangeFilter} name={"name"}/>

            </div>
            <div style={{width: "200px"}}>
                <Title $font_size={14} $line_height={20} $mb={8} $mt={-20}
                       color={"var(--secondaryColor)"}>Kurslar</Title>
                <GenericSelect data={groups} onChange={onChangeFilter} name={"field"}/>
            </div>

            <div style={{width: "200px"}}>
                <Title $font_size={14} $line_height={20} $mb={8} $mt={-20}
                       color={"var(--secondaryColor)"}>Qo’shilgan sana</Title>
                <LocalizationProvider dateAdapter={AdapterMoment} sx={{color: "red"}}>
                    <DatePicker
                        defaultValue={moment(filter.date) || ""}
                        onChange={onSelectDate}
                        slotProps={{textField: {size: "small"}}}

                    />
                </LocalizationProvider>
            </div>

            <div style={{width: "200px"}}>
                <Title $font_size={14} $line_height={20} $mb={8} $mt={-20}
                       color={"var(--secondaryColor)"}>Moderator</Title>
                <GenericInput $width={198} $fontSize={16} defaultValue={filter.group} width={500}
                              onChange={onChangeFilter} name={"admin"}/>
            </div>

        </GenericTable>
    </Container>;
}

export default FirstClass;