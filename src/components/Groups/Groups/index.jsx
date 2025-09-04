import {Container, Icons} from "./style.js";
import GenericTable from "../../Generics/Table";
import {useState} from "react";
import Breadcrumb from "../../Generics/Breadcrumb/index.jsx";
import GenericButton from "../../Generics/Button/index.jsx";
import GenericSelect from "../../Generics/GenericSelect/GenericSelect.jsx";
import * as React from "react";
import AllLidsModal from "./modal.jsx";
import Title from "../../Generics/Title/index.jsx";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import moment from "moment";


const Groups = () => {
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [modalData, setModalData] = useState({});

    const onEdit = (e, row) => {
        e.stopPropagation();
        setOpenModal(!openModal);
        setModalData(row)
    }
    const onMove = (e) => {
        e.stopPropagation();
        console.log("move")

    }

    const headCells = [
        {
            id: 'group',
            label: 'Guruh',
        },
        {
            id: 'course',
            label: 'Kurs',
        },
        {
            id: 'level',
            label: 'Level',
        },
        {
            id: 'day',
            label: 'Kun',
        },
        {
            id: 'start',
            label: 'Boshlanishi',
        },
        {
            id: 'end',
            label: 'Tugashi',
        },
        {
            id: 'type',
            label: 'Turi',
        },
        {
            id: 'room',
            label: 'Xona',
        },
        {
            id: 'status',
            label: 'Status',
            render: (row) => <span
                style={{
                    color: row?.status ? "#52C41A" : "#F5222D",
                }}>{row?.status ? "Tugallangan" : "Tugallanmagan"}</span>,
        },
        {
            id: "action",
            label: "",
            render: (row) => <Icons>
                <Icons.Edit onClick={(e) => onEdit(e, row)}/>
                <Icons.Delete onClick={() => {
                }}/>
            </Icons>
        }
    ];

    const rows = [
        {
            id: 1,
            group: "FrontEnd",
            course: "JavaScript",
            level: "beginner",
            day: "toq kun",
            addedDate: "12.08.2025",
            admin: "webbrain admin",
            type: "offline",
            room: "A_1",
            status: true,
            balance: "0",
            start: "14:00",
            end: "16:00"
        },
        {
            id: 2,
            group: "React",
            day: "toq kun",
            addedDate: "12.08.2025",
            admin: "webbrain admin",
            course: "FrontEnd",
            balance: "0",
            status: false,
            type: "offline",
            room: "A_1",
            level: "beginner",
            start: "14:00",
            end: "16:00"
        },
        {
            id: 3,
            group: "JavaScript",
            day: "toq kun",
            addedDate: "12.08.2025",
            admin: "webbrain admin",
            course: "FrontEnd",
            balance: "0",
            status: false,
            type: "offline",
            room: "A_1",
            level: "beginner",
            start: "14:00",
            end: "16:00"
        },
        {
            id: 4,
            group: "React",
            day: "toq kun",
            addedDate: "12.08.2025",
            admin: "webbrain admin",
            course: "FrontEnd",
            balance: "0",
            status: false,
            type: "online",
            room: "A_1",
            level: "beginner",
            start: "14:00",
            end: "16:00"
        },
    ]

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
            <GenericButton type={"add"} onClick={() => setOpenModal(true)} $bgcolor={"#A0D911"}>Guruh
                qoshish</GenericButton>
        </Breadcrumb>
        <GenericTable checkbox={false} open={open} headCells={headCells} rows={rows}
                      url={"/guruhlar/guruhlar/checkin"}/>
    </Container>;
}

export default Groups;