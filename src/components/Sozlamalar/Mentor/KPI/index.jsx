import {Container} from "./style.js";
import GenericTable from "../../../Generics/Table/index.jsx";
import Breadcrumb from "../../Breadcrumb/index.jsx";
import {useState} from "react";

const KPI = () => {
    const [modal, setModal] = useState(false);

    const rows = [
        {
            id: 1,
            type: "Darsga kech qolgani uchun",
            price: "22 0000 so'm",

        },
        {
            id: 2,
            type: "Dars o'tilmagani uchun",
            price: "25 0000 so'm",

        },

        {
            id: 3,
            type: "To'lov qilmagani uchun",
            price: "20 000 so'm",
        },
    ]
    const cells = [
        {id: "type", label: "Jarima turi"},
        {
            id: "price",
            label: "",
            switch: true,
            align: "right",
            render: (row) => <div style={{color: "red"}}>{row?.price}</div>
        },
    ]

    const bonusRows = [
        {
            id: 1,
            type: "Yangi studentlar uchun",
            price: "22 0000 som",

        },
        {
            id: 2,
            type: "Master class uchun",
            price: "25 0000 som",

        },

        {
            id: 3,
            type: "Sotuvdagi darsliklar uchun",
            price: "20 000 som",
        },
    ]
    const bonusCells = [
        {id: "type", label: "Bonus turi"},
        {
            id: "price",
            label: "",
            switch: true,
            align: "right",
            render: (row) => <div style={{color: "green"}}>{row?.price}</div>
        },
    ]

    return (
        <Container>
            <Breadcrumb/>

            <GenericTable rows={bonusRows} headCells={bonusCells} checkbox={false}/>
            <GenericTable rows={rows} headCells={cells} checkbox={false}/>
        </Container>
    );
}
export default KPI;