import {Container, Icons} from "./style.js";
import GenericTable from "../../Generics/Table";
import {useContext, useEffect, useState} from "react";
import Breadcrumb from "../../Generics/Breadcrumb/index.jsx";
import GenericButton from "../../Generics/Button/index.jsx";
import * as React from "react";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {useNavigate} from "react-router-dom";
import useFetch from "../../../hooks/useFetch.jsx";
import useQuery from "../../../hooks/useQuery.js";
import {GroupContext} from "../../../context/groups/index.jsx";
import GroupsModal from "./modal.jsx";


const Groups = () => {
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [modalData, setModalData] = useState({});
    const [spinner, setSpinner] = useState(false);
    const [groups, dispatch] = useContext(GroupContext);

    const request = useFetch()

    const getData = async (query = "") => {
        setSpinner(true);
        let res = await request(`/tabs/groups`);

        dispatch({type: "get", payload: res})
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

        request(`/tabs/groups/id/${row.id}`, {method: "DELETE"}).then((res) => {
            getData()
        }).catch((err) => {
            console.error("Xato yuz berdi:", err.message);
        })
    }

    const headCells = [
        {
            id: 'title',
            label: 'Guruh',
        },
        {
            id: 'field',
            label: 'Kurs',
        },
        {
            id: 'level',
            label: 'Level',
        },
        {
            id: 'days',
            label: 'Kun',
        },
        {
            id: 'start_time',
            label: 'Boshlanishi',
        },
        {
            id: 'end_time',
            label: 'Tugashi',
        },
        {
            id: 'type',
            label: 'Turi',
        },
        {
            id: 'status',
            label: 'Status',
            render: (row) => <span
                style={{
                    color: row?.status === "TRUE" ? "#52C41A" : "#F5222D",
                }}>{row?.status === "TRUE" ? "Tugallangan" : "Tugallanmagan"}</span>,
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


    const onToggleModal = (callback) => {
        setOpenModal(!openModal);
        setModalData(null)
        callback && callback()
    }

    return <Container>
        <GroupsModal open={openModal} onClose={onToggleModal} data={modalData} onUpload={getData}/>
        <Breadcrumb>
            <GenericButton type={"add"} onClick={() => setOpenModal(true)} $bgcolor={"#A0D911"}>Guruh
                qoshish</GenericButton>
        </Breadcrumb>
        <GenericTable spinner={spinner} checkbox={false} open={open} headCells={headCells} rows={groups}
                      url={"/guruhlar/guruhlar/checkin"}/>
    </Container>;
}

export default Groups;