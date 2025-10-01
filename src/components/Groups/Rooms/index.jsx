import {Container, Icons, TimeWrapper} from "./style.js";
import GenericTable from "../../Generics/Table";
import {useContext, useEffect, useState} from "react";
import Breadcrumb from "../../Generics/Breadcrumb/index.jsx";
import GenericButton from "../../Generics/Button/index.jsx";
import AllLidsModal from "./modal.jsx";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {useNavigate} from "react-router-dom";
import useFetch from "../../../hooks/useFetch.jsx";
import {RoomsContext} from "../../../context/rooms/index.jsx";
import ModalCustom from "../../Generics/ModalCustom/index.jsx";
import {groups} from "../../../utils/group.js";


const Rooms = () => {
    const [openModal, setOpenModal] = useState(false);
    const [modalData, setModalData] = useState({});
    const [spinner, setSpinner] = useState(false);
    const navigate = useNavigate();
    const [state, dispatch] = useContext(RoomsContext);
    const request = useFetch()

    const getData = async () => {
        setSpinner(true);
        let res = await request(`/tabs/rooms`);

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

    const onMove = async (e, row) => {
        e.stopPropagation();
        setSpinner(true);
        (await request)(`/tabs/rooms/id/${row.id}`, {
            method: "DELETE"
        }).then(v => {
            getData();
        }).catch(error => {
            console.error("Xato yuz berdi:", error.message);
        });
    }


    const headCells = [
        {
            id: 'name',
            label: 'Xona',
        },
        {
            id: 'capacity',
            label: "O'rinlar",
        },
        {
            id: 'free_times',
            label: 'Free times',
            render: (row) => <div>
                {
                    row?.free_times?.split(", ").map((v, i) => {
                        return <TimeWrapper key={i}>{v}</TimeWrapper>
                    })
                }
            </div>
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
            id: 'white_board',
            label: 'Whiteboard',
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
                <Icons.Move onClick={(e) => onMove(e, row)}/>
            </Icons>
        }
    ];

    const onToggleModal = (callback) => {
        setOpenModal(!openModal);
        setModalData(null)
        callback && callback()
    }

    const bool = [
        {value: "select", title: "Select",},
        {value: "true", title: "True",},
        {value: "false", title: "False",},
    ]
    const formFields = [
        {label: "Xona nomi", name: "name", type: "text", required: true},
        {label: "O'rinlar", name: "capacity", type: "text", required: true},
        {label: "Bo'sh vaqti", name: "free_times", type: "text", required: true},
        {label: "Monitor", name: "monitor", type: "select", options: bool, required: true},
        {label: "Whiteboard", name: "white_board", type: "select", options: bool, required: true},
        {label: "Wifi", name: "wifi", type: "select", options: bool, required: true},
        {label: "Status", name: "status", type: "select", required: true, options: bool},
    ];
    return <Container>
        <ModalCustom onUpload={getData} tabname={"rooms"} formFields={formFields} title={"Xona qo'shish"}
                     open={openModal}
                     onClose={onToggleModal}
                     data={modalData}/>
        <Breadcrumb>
            <GenericButton type={"add"} onClick={() => setOpenModal(true)} $bgcolor={"#A0D911"}>Xona
                qoshish</GenericButton>
        </Breadcrumb>
        <GenericTable spinner={spinner} headCells={headCells} rows={state} checkbox={false}/>
    </Container>;
}

export default Rooms;