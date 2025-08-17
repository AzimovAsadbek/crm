import {Container, Icons} from "./style.js";
import GenericTable from "../../Generics/Table";
import {useState} from "react";
import Breadcrumb from "../../Analitika/Breadcrumb/index.jsx";
import GenericButton from "../../Generics/Button/index.jsx";
import AllLidsModal from "./modal.jsx";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import Title from "../../Generics/Title/index.jsx";


const Hodimlar = () => {
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
            id: 'fullname',
            label: 'To’liq ismi',
        },
        {
            id: 'birthday',
            label: 'Tug’ilgan sanasi',
        },
        {
            id: 'jinsi',
            label: 'Jinsi',
        },
        {
            id: 'task',
            label: 'Vazifasi',
        },
        {
            id: 'filial',
            label: 'Filial',
        },
        {
            id: 'phone',
            label: 'Telefon raqami',
        },
        {
            id: "action",
            label: "",
            render: (row) => <Icons>
                <Icons.Edit onClick={(e) => onEdit(e, row)}/>
                <Icons.Delete onClick={(e) => onDelete(e, row)}/>
            </Icons>
        }
    ];

    const rows = [
        {
            id: 1,
            fullname: "Qosimov Bekmirza",
            birthday: "26-12-1998",
            jinsi: "Erkak",
            task: "Moderator",
            filial: "Chilonzor",
            phone: "+998 99 999 99 99",
        },
        {
            id: 2,
            fullname: "Sherali Jo’rayev",
            birthday: "26-12-1998",
            jinsi: "Erkak",
            task: "O'qituvchi",
            filial: "Ganga",
            phone: "+998 99 999 99 99",
        },
        {
            id: 3,
            fullname: "Shermatov Gulmat",
            birthday: "26-12-1991",
            jinsi: "Erkak",
            task: "O'qituvchi",
            filial: "Ganga",
            phone: "+998 99 999 99 99",
        },

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
            <GenericButton type={"add"} onClick={() => setOpenModal(true)} $bgcolor={"#EB2F96"}>Hodim
                qo'shish</GenericButton>
        </Breadcrumb>
        <GenericTable headCells={headCells} rows={rows} checkbox={false}/>
    </Container>;
}

export default Hodimlar;