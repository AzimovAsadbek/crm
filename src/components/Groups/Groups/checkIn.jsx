import {Container, Icons} from "./style.js";
import GenericTable from "../../Generics/Table";
import {useState} from "react";
import Breadcrumb from "../../Generics/Breadcrumb/index.jsx";
import * as React from "react";
import AllLidsModal from "./modal.jsx";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import moment from "moment";
import students from "../../../mock/students.js";
import Satatus from "./satus.jsx";


const CheckIn = () => {
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [modalData, setModalData] = useState({});
    const [rows, setRows] = useState(students);


    const headCells = [
        {
            id: 'name',
            label: 'Name',
        },
        {
            id: 'phone',
            label: 'Phone',
        },
        {
            id: '16-08',
            label: '16-08',
            render(row) {
                return <Satatus value={row[this?.id]}/>
            },
            align: 'center',
        },
        {
            id: '17-08',
            label: '17-08',
            render(row) {
                return <Satatus value={row[this?.id]}/>
            },
            align: 'center',

        },
        {
            id: '18-08',
            label: '18-08',
            render(row) {
                return <Satatus value={row[this?.id]}/>
            },
            align: 'center',
        },

        {
            id: '19-08',
            label: '19-08',
            render(row) {
                return <Satatus value={row[this?.id]}/>
            },
            align: 'center',
        },

    ];


    const data = [
        {value: "uzbek", title: "Uzbek"},
        {value: "russian", title: "English"},
        {value: "english", title: "Russian"},
    ]
    const onToggleModal = () => {
        setOpenModal(!openModal);
        setModalData(null)
    }
    const onSave = () => {
    }

    return <Container>
        <AllLidsModal open={openModal} onClose={onToggleModal} onSave={onSave} data={modalData}/>
        <Breadcrumb>
            <LocalizationProvider dateAdapter={AdapterMoment} sx={{color: "red"}}>
                <DatePicker
                    defaultValue={moment()}
                    sx={{background: "white", width: 160}}
                    slotProps={{textField: {size: "small"}}}
                />
            </LocalizationProvider>
        </Breadcrumb>
        <GenericTable checkbox={false} open={open} headCells={headCells} rows={rows}/>
    </Container>;
}

export default CheckIn;