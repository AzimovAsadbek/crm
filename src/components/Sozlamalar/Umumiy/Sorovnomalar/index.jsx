import {Container} from "./style.js";
import GenericTable from "../../../Generics/Table/index.jsx";
import Breadcrumb from "../../Breadcrumb/index.jsx";
import GenericButton from "../../../Generics/Button/index.jsx";
import {useState} from "react";
import SorovnomaModal from "./modal.jsx";

const Sorovnomalar = () => {
    const [modal, setModal] = useState(false);

    const rows = [
        {
            id: 1,
            sorovnoma: "Instagram",
            accepted: 120,
            all: 200,

        },
        {
            id: 2,
            sorovnoma: "Youtube",
            accepted: 150,
            all: 200,

        },

        {
            id: 3,
            sorovnoma: "Telegram",
            accepted: 90,
            all: 200,

        },
    ]
    const cells = [
        {id: "sorovnoma", label: "So'rovnoma turi"},
        {id: "all", label: "Barcha lidlar"},
        {id: "accepted", label: "Konversiya"},

        {
            id: "foiz", label: "Foiz", render: (props) => <div>{parseInt(props?.accepted / props?.all * 100)}%</div>
        },
    ]

    return (
        <Container>
            <SorovnomaModal open={modal} onSave={() => setModal(false)} onClose={() => setModal(false)}/>
            <Breadcrumb>
                <GenericButton $bgcolor={"#FA8C16"} type={"add"} onClick={() => setModal(true)}>Sorovnoma
                    qo'shish</GenericButton>
            </Breadcrumb>

            <GenericTable rows={rows} headCells={cells} checkbox={false}/>
        </Container>
    );
}
export default Sorovnomalar;