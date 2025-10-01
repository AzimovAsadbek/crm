import {Container, Icons} from "./style.js";
import {useContext, useEffect, useState} from "react";
import Breadcrumb from "../../Generics/Breadcrumb/index.jsx";
import GenericButton from "../../Generics/Button/index.jsx";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import CollapsibleTable from "./TableCollapse/index.jsx";
import rows from "../../../mock/groups.js";
import Button from "../../Generics/Button/index.jsx";
import CourseAddModal from "./TableCollapse/CourseModal.jsx";
import {GroupContext} from "../../../context/groups/index.jsx";
import useFetch from "../../../hooks/useFetch.jsx";
import CategoryModal from "./modal.jsx";


const AllCourses = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openCourseModal, setOpenCourseModal] = useState(false);
    const [modalData, setModalData] = useState({});
    const [spinner, setSpinner] = useState(false);
    const [category, setCategory] = useState([]);
    const request = useFetch()


    const getData = async () => {
        setSpinner(true);
        let ctg = await request(`/tabs/category`);
        let courses = await request(`/tabs/groups`);
        let data = ctg?.map(ct => {
            return {...ct, groups: courses?.filter(v => v?.category?.toLowerCase() === ct.category.toLowerCase())};
        })
        setCategory(data)
        setSpinner(false);
    }

    useEffect(() => {
        getData()
    }, [])


    const onEdit = (e, row) => {
        e.stopPropagation();
        setOpenModal(!openModal);
        setModalData(row)
    }
    const onDelete = (e, row) => {
        e.stopPropagation();
        setSpinner(true);
        request(`/tabs/category/id/${row?.id}`, {method: "DELETE"}).then((res) => {
            getData()
        }).catch((err) => {
            console.error("Xato yuz berdi:", err.message);
        })
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
                <Button $width={50} type={"add"} onClick={(e) => onCourseAdd(e)}/>
                <Icons.Edit onClick={(e) => onEdit(e, row)}/>
                <Icons.Delete onClick={(e) => onDelete(e, row)}/>
            </Icons>
        }
    ];


    const onToggleModal = (callback) => {
        setOpenModal(!openModal);
        setModalData(null)
        callback && callback()
    }
    const onCloseCourse = (e) => {
        e.stopPropagation()
        setOpenCourseModal(!openCourseModal);
    }
    const onSave = () => {
    }

    return <Container>
        <CategoryModal open={openModal} onClose={onToggleModal} onSave={onSave} data={modalData} onUpload={getData}/>
        <CourseAddModal open={openCourseModal} onClose={onCloseCourse}/>
        <Breadcrumb>
            <GenericButton type={"add"} onClick={() => setOpenModal(true)} $bgcolor={"#EB2F96"}>Yo'nalish
                qo'shish</GenericButton>
        </Breadcrumb>
        <CollapsibleTable spinner={spinner} headCell={headCells} rows={category}/>
    </Container>;
}

export default AllCourses;