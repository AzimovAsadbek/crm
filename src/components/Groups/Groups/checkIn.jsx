import {Container, Icons} from "./style.js";
import GenericTable from "../../Generics/Table";
import {useContext, useEffect, useState} from "react";
import Breadcrumb from "../../Generics/Breadcrumb/index.jsx";
import * as React from "react";
import AllLidsModal from "./modal.jsx";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import moment from "moment";
import students from "../../../mock/students.js";
import Satatus from "./satus.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {GroupContext} from "../../../context/groups/index.jsx";
import useFetch from "../../../hooks/useFetch.jsx";

const headCells = [
    {
        id: 'name',
        label: 'Name',
    },
    {
        id: 'phone',
        label: 'Phone',
    },


];


const CheckIn = () => {
    const [openModal, setOpenModal] = useState(false);
    const [modalData, setModalData] = useState({});
    const [rows, setRows] = useState([]);
    const {id} = useParams();
    const [spinner, setSpinner] = useState(false);
    const [groups] = useContext(GroupContext);
    const request = useFetch()
    const navigate = useNavigate()
    const [cell, setCell] = useState([]);


    const getData = async (query = "") => {
        let temp = []
        setSpinner(true);
        let res = await request(`/tabs/${id}`);
        console.log(res)
        Object.entries(res[0])?.map(([key, v]) => {
            if (parseInt(key))
                temp = [...temp, {
                    id: key,
                    label: key,
                    align: "center",
                    render(row) {
                        return <Satatus value={row[key]} reload={getData} label={key} id={row.id} path={id}/>
                    },
                }
                ]
        })
        setCell([...headCells, ...temp])
        setRows([...res])
        setSpinner(false);
    }

    useEffect(() => {
        if (groups.find((v) => v.title === id)) getData()
        else navigate("/guruhlar/guruhlar")
    }, [])


    const onToggleModal = () => {
        setOpenModal(!openModal);
        setModalData(null)
    }

    return <Container>
        <AllLidsModal onClose={onToggleModal} data={modalData}/>
        <Breadcrumb>
            <LocalizationProvider dateAdapter={AdapterMoment} sx={{color: "red"}}>
                <DatePicker
                    defaultValue={moment()}
                    sx={{background: "white", width: 160}}
                    slotProps={{textField: {size: "small"}}}
                />
            </LocalizationProvider>
        </Breadcrumb>
        <GenericTable checkbox={false} open={open} headCells={cell} rows={rows} spinner={spinner}/>
    </Container>;
}

export default CheckIn;