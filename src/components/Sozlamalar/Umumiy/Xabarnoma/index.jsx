import {Container} from "./style.js";
import GenericTable from "../../../Generics/Table/index.jsx";
import {Switch} from "@mui/material";

const Xabarnoma = () => {
    const rows = [
        {
            id: 1,
            xabarnoma: "Dars vaqtini eslatish",
            time: "18:00",
            status: true
        },
        {
            id: 1,
            xabarnoma: "Tolov vaqtini eslatish",
            time: "20:00",
            status: false
        },
        {
            id: 1,
            xabarnoma: "Qoldirilgan darslar",
            time: "21:00",
            status: true
        },
    ]
    const cells = [
        {id: "xabarnoma", label: "Xabarnoma turi"},
        {id: "time", label: "Vaqti"},
        {
            id: "status", label: "Faollashtirish", align: "right", render: (props) => {
                return <Switch defaultChecked={props?.status}/>
            }
        },
    ]

    return (
        <Container>
            <GenericTable rows={rows} headCells={cells} checkbox={false}/>
        </Container>
    );
}
export default Xabarnoma;