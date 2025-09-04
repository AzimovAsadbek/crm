import {Container, Icons} from "./style.js";
import GenericTable from "../../Generics/Table";
import {useState} from "react";
import Breadcrumb from "../../Generics/Breadcrumb/index.jsx";
import GenericButton from "../../Generics/Button/index.jsx";
import AllLidsModal from "./modal.jsx";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import Title from "../../Generics/Title/index.jsx";


const Rols = () => {
    const [openModal, setOpenModal] = useState(false);
    const [modalData, setModalData] = useState({});

    const onEdit = (e, row) => {
        e.stopPropagation();
        setOpenModal(!openModal);
        setModalData(row)
    }
    const onDelete = (e) => {
        e.stopPropagation();
        console.log("move")

    }

    const headCells = [

        {
            id: 'daraja',
            label: 'Darajasi',
        },
        {
            id: 'izoh',
            label: 'Daraja Izohi',
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
            daraja: "Moderator",
            izoh: "Adminlarga tegishli malumotlar",
        },
        {
            id: 2,
            daraja: "Director",
            izoh: "Barcha malumotlarni korish huquqi",
        },
        {
            id: 3,
            daraja: "Manager",
            izoh: "Barcha malumotlar, Director PM dan tashqari",
        },
        {
            id: 4,
            daraja: "Oqituvchi",
            izoh: "Ustozga aloqador darslar",
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
            <GenericButton type={"add"} onClick={() => setOpenModal(true)} $bgcolor={"#EB2F96"}>Ro'l
                qo'shish</GenericButton>
        </Breadcrumb>
        <GenericTable headCells={headCells} rows={rows} checkbox={false}/>
    </Container>;
}

export default Rols;