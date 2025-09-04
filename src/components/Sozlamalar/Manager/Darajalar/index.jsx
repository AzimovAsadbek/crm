import {Container} from "./style.js";
import GenericTable from "../../../Generics/Table/index.jsx";
import {Switch} from "@mui/material";
import Breadcrumb from "../../Breadcrumb/index.jsx";
import GenericButton from "../../../Generics/Button/index.jsx";
import FilialModal from "../../Umumiy/Filiallar/modal.jsx";
import {useState} from "react";
import DarajalarModal from "./modal.jsx";

const Darajalar = () => {
    const [modal, setModal] = useState(false);

    const rows = [
        {
            id: 1,
            position: "Bosh manager",
            halfRate: "2 000 000 so'm",
            rate: "4 000 000 so'm"
        },
        {
            id: 2,
            position: "Servis manager",
            halfRate: "1 500 000 so'm",
            rate: "3 000 000 so'm"
        },
        {
            id: 3,
            position: "Qoravul",
            halfRate: "1 000 000 so'm",
            rate: "1 000 000 so'm"
        },
    ]
    const cells = [
        {id: "position", label: "Lavozim"},
        {id: "halfRate", label: "Yarim stavka", align: "center"},
        {id: "rate", label: "Bir stavka", align: "right"},

    ]

    return (
        <Container>
            <DarajalarModal open={modal} onSave={() => setModal(false)} onClose={() => setModal(false)}/>

            <Breadcrumb>
                <GenericButton $bgcolor={"#FA8C16"} type={"add"} onClick={() => setModal(true)}>Daraja
                    qo'shish</GenericButton>
            </Breadcrumb>

            <GenericTable rows={rows} headCells={cells} checkbox={false}/>
        </Container>
    );
}
export default Darajalar;