import {Container} from "./style.js";
import GenericTable from "../../Generics/Table";
import {useState} from "react";
import Breadcrumb from "../../Analitika/Breadcrumb/index.jsx";
import GenericButton from "../../Generics/Button/index.jsx";

const AllLids = () => {
    const [open, setOpen] = useState(false);
    const headCells = [
        {
            id: 'name',
            label: 'O’quvchining ismi',
        },
        {
            id: 'group',
            label: 'Guruh / Fan',
        },
        {
            id: 'date',
            label: 'Dars kuni va vaqti',
        },
        {
            id: 'addedDate',
            label: 'Qo’shilgan sana',
        },
        {
            id: 'admin',
            label: 'Moderator',
        },

    ];
    const rows = [
        {
            id: 1,
            name: "Javlon Javliyev",
            group: "FrontEnd",
            addedDate: "12.08.2025",
            admin: "webbrain admin"
        }
    ]

    return <Container>
        <Breadcrumb>
            <GenericButton type={"import"}>Import</GenericButton>
            <GenericButton type={"filter"} onClick={() => setOpen(!open)}>Filter</GenericButton>
            <GenericButton type={"add"}>Buyurtma qoshish</GenericButton>
        </Breadcrumb>
        <GenericTable open={open} headCells={headCells} rows={rows}/>
    </Container>;
}

export default AllLids;