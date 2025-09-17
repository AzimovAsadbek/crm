import {Icons} from "./All/style.js";
import * as React from "react";

const useCells = (onEdit, onMove) => [
    {
        id: 'name',
        label: 'O’quvchining ismi',
    },
    {
        id: 'status',
        label: 'Status',
        render: (row) => {
            return <span
                style={{
                    color: row?.status === "TRUE" ? "#52C41A" : "#F5222D",
                    fontWeight: 600
                }}>{row?.status === "TRUE" ? "Tugallangan" : "Tugallanmagan"}</span>
        },
    },
    {
        id: 'phone',
        label: 'Telefon raqam',
    },
    {
        id: 'payment',
        label: 'Balans',
        render: (row) => <span
            style={{
                padding: "4px 12px",
                borderRadius: "12px",
                backgroundColor: !row?.payment?.includes("-") ? "#52C41A" : "#F5222D",
                color: "white",
                fontSize: "16px",
                whiteSpace: "nowrap",
            }}>{row?.payment}</span>,
        align: "center"
    },
    {
        id: "group",
        label: "Guruh / Fan"
    },
    {
        id: 'parents',
        label: 'Ota-onasi',
    },
    {
        id: 'added_date',
        label: 'Qo’shilgan sana',
    },
    {
        id: 'field',
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
            {onMove && <Icons.Move onClick={(e) => onMove(e, row)}/>}
        </Icons>
    }
];


export default useCells