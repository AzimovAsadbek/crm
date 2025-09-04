import {Container} from "./style.js";
import GenericTable from "../../../Generics/Table/index.jsx";
import Breadcrumb from "../../Breadcrumb/index.jsx";
import {useState} from "react";
import GenericButton from "../../../Generics/Button/index.jsx";
import OylikModal from "./modal.jsx";

const Oylik = () => {
    const [modal, setModal] = useState(false);

    const rows = [
        {
            id: 1,
            extraPersentage: "Odatiy foiz",
            persentage: "30%",

        },
        {
            id: 2,
            extraPersentage: "1 yil tajribaga ega o'qituvchi uchun",
            persentage: "40%",

        },


    ]
    const cells = [
        {id: "extraPersentage", label: "Qo'shimcha foiz turi"},
        {
            id: "persentage",
            label: "Foiz miqdori",
            align: "right"
        },
    ]


    return (
        <Container>
            <OylikModal open={modal} onSave={() => setModal(false)} onClose={() => setModal(false)}/>

            <Breadcrumb>
                <GenericButton $bgcolor={"#FA8C16"} type={"add"} onClick={() => setModal(true)}>Foiz
                    qo'shish</GenericButton>
            </Breadcrumb>

            <GenericTable rows={rows} headCells={cells} checkbox={false}/>
        </Container>
    );
}
export default Oylik;