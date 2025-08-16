import {Container, Icons} from "./style.js";
import GenericTable from "../../Generics/Table";
import {useState} from "react";
import Breadcrumb from "../../Analitika/Breadcrumb/index.jsx";
import GenericButton from "../../Generics/Button/index.jsx";
import AllLidsModal from "./modal.jsx";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import Title from "../../Generics/Title/index.jsx";


const Rooms = () => {
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
            id: 'room',
            label: 'Xona',
        },
        {
            id: 'capacity',
            label: "O'rinlar",
        },
        {
            id: 'wifi',
            label: 'Wifi',
        },
        {
            id: 'monitor',
            label: 'Monitor',
        },
        {
            id: 'blackboard',
            label: 'Blackboard',
        },
        {
            id: 'status',
            label: 'Status',
        },
        {
            id: "action",
            label: "",
            render: (row) => <Icons>
                <Icons.Edit onClick={(e) => onEdit(e, row)}/>
            </Icons>
        }
    ];

    const rows = [
        {
            id: 1,
            room: "FrontEnd",
            capacity: 15,
            wifi: "bor",
            monitor: "bor",
            blackboard: "bor",
            status: "FrontEnd",
        },
        {
            id: 2,
            room: "FrontEnd",
            capacity: 10,
            wifi: "bor",
            monitor: "yoq",
            blackboard: "bor",
            status: "FrontEnd",

        },
        {
            id: 3,
            room: "FrontEnd",
            capacity: 20,
            wifi: "yoq",
            monitor: "bor",
            blackboard: "bor",
            status: "FrontEnd",

        },
        {
            id: 4,
            room: "FrontEnd",
            capacity: 18,
            wifi: "bor",
            monitor: "bor",
            blackboard: "bor",
            status: "FrontEnd",


        }
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
            <GenericButton type={"add"} onClick={() => setOpenModal(true)} $bgcolor={"#A0D911"}>Xona
                qoshish</GenericButton>
        </Breadcrumb>
        <GenericTable headCells={headCells} rows={rows} checkbox={false}/>
    </Container>;
}

export default Rooms;