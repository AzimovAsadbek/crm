import {Container} from "./style.js";
import GenericTable from "../../../Generics/Table/index.jsx";
import Breadcrumb from "../../Breadcrumb/index.jsx";
import {useState} from "react";
import GenericButton from "../../../Generics/Button/index.jsx";
import TolovlarModal from "./modal.jsx";

const Tolovlar = () => {
    const [modal, setModal] = useState(false);

    const rows = [
        {
            id: 1,
            tolov: "Ikkita darsga kelgani uchun",
            bonus: "22 0000 so'm",

        },
        {
            id: 2,
            tolov: "3 ta guruhda oqigani uchun",
            bonus: "25 0000 so'm",

        },


    ]
    const cells = [
        {id: "tolov", label: "Tolov turi"},
        {
            id: "bonus",
            label: "Bonusni o'chirish",
            switch: true,
            align: "right",
        },
    ]


    return (
        <Container>
            <TolovlarModal open={modal} onSave={() => setModal(false)} onClose={() => setModal(false)}/>

            <Breadcrumb>
                <GenericButton $bgcolor={"#FA8C16"} type={"add"} onClick={() => setModal(true)}>Bonus
                    qoshish</GenericButton>
            </Breadcrumb>


            <GenericTable rows={rows} headCells={cells} checkbox={false}/>
        </Container>
    );
}
export default Tolovlar;