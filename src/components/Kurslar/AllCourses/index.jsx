import {Container, Icons} from "./style.js";
import {useState} from "react";
import Breadcrumb from "../../Generics/Breadcrumb/index.jsx";
import GenericButton from "../../Generics/Button/index.jsx";
import AllLidsModal from "./modal.jsx";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import CollapsibleTable from "./TableCollapse/index.jsx";
import rows from "../../../mock/groups.js";
import Button from "../../Generics/Button/index.jsx";
import CourseAddModal from "./TableCollapse/CourseModal.jsx";


const AllCourses = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openCourseModal, setOpenCourseModal] = useState(false);
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
    const onCourseAdd = (e) => {
        e.stopPropagation()
        setOpenCourseModal(!openCourseModal)
    }
    // Course modal funtions


    const headCells = [
        {
            id: "title",
            label: "Kurslar turi",
        },
        {
            id: "action",
            label: "",
            render: (row) => <Icons>
                <Button type={"add"} onClick={(e) => onCourseAdd(e)}/>
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
    const onCloseCourse = (e) => {
        e.stopPropagation()
        setOpenCourseModal(!openCourseModal);
    }
    const onSave = () => {
    }

    return <Container>
        <AllLidsModal open={openModal} onClose={onToggleModal} onSave={onSave} data={modalData}/>
        <CourseAddModal open={openCourseModal} onClose={onCloseCourse}/>
        <Breadcrumb>
            <GenericButton type={"add"} onClick={() => setOpenModal(true)} $bgcolor={"#EB2F96"}>Hodim
                qo'shish</GenericButton>
        </Breadcrumb>
        <CollapsibleTable headCell={headCells} rows={rows}/>
    </Container>;
}

export default AllCourses;