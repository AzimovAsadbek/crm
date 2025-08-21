import {Container, Icons} from "./style.js";
import GenericTable from "../../Generics/Table";
import {useState} from "react";
import Breadcrumb from "../../Analitika/Breadcrumb/index.jsx";
import GenericButton from "../../Generics/Button/index.jsx";
import AllLidsModal from "./modal.jsx";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import Title from "../../Generics/Title/index.jsx";
import CollapsibleTable from "./TableCollapse/index.jsx";
import rows from "../../../mock/groups.js";
import Button from "../../Generics/Button/index.jsx";


const AllCourses = () => {
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
    const onCourseEdit = (e) => {
        e.stopPropagation()
    }

    const headCells = [
        {
            id: "title",
            label: "Kurslar turi",
        },
        {
            id: "action",
            label: "",
            render: (row) => <Icons>
                <Button type={"add"} onClick={(e) => onCourseEdit(e)}/>
                <Icons.Edit onClick={(e) => onEdit(e, row)}/>
                <Icons.Delete onClick={(e) => {
                }}/>
            </Icons>
        }
    ];


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
        {/*<GenericTable headCells={headCells} rows={rows} checkbox={false}/>*/}
        <CollapsibleTable headCell={headCells} rows={rows}/>
    </Container>;
}

export default AllCourses;