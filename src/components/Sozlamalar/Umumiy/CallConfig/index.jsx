import {Container} from "./style.js";
import GenericTable from "../../../Generics/Table/index.jsx";
import Breadcrumb from "../../Breadcrumb/index.jsx";

const CallConfig = () => {
    const rows = [
        {
            id: 1,
            type: "Missed",
            color: "#ff0000",
        },
        {
            id: 2,
            type: "Answered",
            color: "#52C41A",
        },
        {
            id: 3,
            type: "Wrong",
            color: "#FADB14",
        },

    ]
    const cells = [
        {id: "type", label: "Belgilash turi"},
        {
            id: "color", label: "Ranglar", align: "right", render: (props) => {
                return <input style={{width: "30px", height: "30px", outline: "none", border: 0, cursor: "pointer"}}
                              type={"color"}
                              defaultValue={props?.color}/>
            }
        },
    ]

    return (
        <Container>
            <Breadcrumb/>
            <GenericTable rows={rows} headCells={cells} checkbox={false}/>
        </Container>
    );
}
export default CallConfig;