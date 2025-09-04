import {Container} from "./style.js";
import GenericTable from "../../../Generics/Table/index.jsx";
import Breadcrumb from "../../Breadcrumb/index.jsx";
import GenericButton from "../../../Generics/Button/index.jsx";
import FilialModal from "./modal.jsx";
import {useState} from "react";

const Filiallar = () => {
    const [modal, setModal] = useState(false);
    const rows = [
        {
            id: 1,
            filial: "Chilonzor filial",
            location: "Chilonzor tumani, Bunyodkor shox ko’chasi, 65",
            href: "https://www.google.com/maps/place/Webbrain+Academy/@41.3274628,69.247741,18.58z/data=!4m6!3m5!1s0x38ae8b50922256f9:0xd4691d23b9d26b5c!8m2!3d41.3273354!4d69.2479643!16s%2Fg%2F11rt_x6g5x?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
        },
        {
            id: 2,
            filial: "Namangan filial",
            location: "Namangan viloyati, Uchqo’rg’on tumani",
            href: "https://www.google.com/maps/place/Webbrain+Academy/@41.3274628,69.247741,18.58z/data=!4m6!3m5!1s0x38ae8b50922256f9:0xd4691d23b9d26b5c!8m2!3d41.3273354!4d69.2479643!16s%2Fg%2F11rt_x6g5x?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
        },
    ]
    const cells = [
        {id: "filial", label: "Filiallar"},
        {
            id: "location", label: "Manzil", align: "right", render: (props) => {
                return <a href={props?.href} target="_blank" rel="noopener noreferrer">{props.location}</a>
            }
        },
    ]


    return (
        <Container>
            <FilialModal open={modal} onSave={() => setModal(false)} onClose={() => setModal(false)}/>
            <Breadcrumb>
                <GenericButton $bgcolor={"#FA8C16"} type={"add"} onClick={() => setModal(true)}>Filial
                    qo'shish</GenericButton>
            </Breadcrumb>

            <GenericTable rows={rows} headCells={cells} checkbox={false}/>
        </Container>
    );
}
export default Filiallar;