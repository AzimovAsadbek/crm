import {Container, Icons} from "./style.js";
import GenericTable from "../../Generics/Table";
import {useState} from "react";
import Breadcrumb from "../../Analitika/Breadcrumb/index.jsx";
import GenericButton from "../../Generics/Button/index.jsx";
import GenericSelect from "../../Generics/GenericSelect/GenericSelect.jsx";
import * as React from "react";
import AllLidsModal from "./modal.jsx";
import Title from "../../Generics/Title/index.jsx";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import moment from "moment";


const Schedule = () => {
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
            id: 'name',
            label: 'O’quvchining ismi',
        },
        {
            id: 'status',
            label: 'Status',
            render: (row) => <span
                style={{
                    color: row?.status ? "#52C41A" : "#F5222D",
                    fontWeight: 600
                }}>{row?.status ? "Tugallangan" : "Tugallanmagan"}</span>,
        },
        {
            id: 'phone',
            label: 'Telefon raqam',
        },
        {
            id: 'balance',
            label: 'Balans',
            render: (row) => <span
                style={{
                    padding: "4px 12px",
                    borderRadius: "12px",
                    backgroundColor: row?.balance?.includes("-") ? "#52C41A" : "#F5222D",
                    color: "white",
                    fontSize: "16px",
                    whiteSpace: "nowrap",
                }}>{row?.balance}</span>
        },
        {
            id: 'parents',
            label: 'Ota-onasi',
        },
        {
            id: 'addedDate',
            label: 'Qo’shilgan sana',
        },
        {
            id: 'course',
            label: 'Kurs',
        },
        {
            id: 'admin',
            label: 'Moderator',
        },
        {
            id: "action",
            label: "",
            render: (row) => <Icons>
                <Icons.Edit onClick={(e) => onEdit(e, row)}/>
                <Icons.Move onClick={onMove}/>
            </Icons>
        }
    ];

    const rows = [
        {
            id: 1,
            name: "Javlon Javliyev",
            group: "FrontEnd",
            addedDate: "12.08.2025",
            admin: "webbrain admin",
            course: "FrontEnd",
            phone: "+998 99 999 99 99",
            balance: "0",
            parents: "Eshmatov Toshmat",
            status: false,
        },
        {
            id: 2,
            name: "Mutalxojayev Avazbek",
            group: "FrontEnd",
            addedDate: "14.08.2025",
            admin: "webbrain admin",
            course: "FrontEnd",
            phone: "+998 99 999 99 99",
            balance: "-400 000",
            parents: "Eshmatov Toshmat",

            status: true,

        },
        {
            id: 3,
            name: "Xusanboyev Asliddin",
            group: "FrontEnd",
            addedDate: "14.08.2025",
            admin: "webbrain admin",
            course: "BackEnd",
            phone: "+998 99 999 99 99",
            balance: "0",
            parents: "Eshmatov Toshmat",
            status: false,

        },
        {
            id: 4,
            name: "Javlon Javliyev",
            group: "FrontEnd",
            addedDate: "12.08.2025",
            admin: "webbrain admin",
            course: "FrontEnd",
            phone: "+998 99 999 99 99",
            balance: "400 000",
            parents: "Eshmatov Toshmat",
            status: true,


        }
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
            <GenericButton type={"import"}>Import</GenericButton>
            <GenericButton type={"filter"} onClick={() => setOpen(!open)}>Filter</GenericButton>
            <GenericButton type={"add"} onClick={() => setOpenModal(true)}>Buyurtma qoshish</GenericButton>

        </Breadcrumb>
        <GenericTable open={open} headCells={headCells} rows={rows}>
            <div style={{width: "200px"}}>
                <Title $font_size={14} $line_height={20} $mb={8} $mt={-20}
                       color={"var(--secondaryColor)"}>Sana</Title>
                <LocalizationProvider dateAdapter={AdapterMoment} sx={{color: "red"}}>
                    <DatePicker
                        defaultValue={moment()}

                        slotProps={{textField: {size: "small"}}}
                    />
                </LocalizationProvider>
            </div>
            <div style={{width: "200px"}}>
                <Title $font_size={14} $line_height={20} $mb={8} $mt={-20}
                       color={"var(--secondaryColor)"}>Balans</Title>
                <GenericSelect data={data}/>
            </div>
            <div style={{width: "200px"}}>
                <Title $font_size={14} $line_height={20} $mb={8} $mt={-20}
                       color={"var(--secondaryColor)"}>Kurs</Title>
                <GenericSelect data={data}/>
            </div>
            <div style={{width: "200px"}}>
                <Title $font_size={14} $line_height={20} $mb={8} $mt={-20}
                       color={"var(--secondaryColor)"}>Telefon raqam</Title>
                <GenericSelect data={data}/>
            </div>
            <div style={{width: "200px"}}>
                <Title $font_size={14} $line_height={20} $mb={8} $mt={-20}
                       color={"var(--secondaryColor)"}>Moderator</Title>
                <GenericSelect data={data}/>
            </div>
        </GenericTable>
    </Container>;
}

export default Schedule;