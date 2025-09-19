import {useEffect, useRef, useState} from "react";
import StatusModal from "./StatusModal.jsx";
import {Icons} from "./style.js";
import * as React from "react";
import useFetch from "../../../hooks/useFetch.jsx";

function Status({value}) {
    switch (value) {
        case "keldi":
            return <Icons.Keldi/>;
        case "sababli":
            return <Icons.Sababli/>;
        case "sababsiz":
            return <Icons.Sababsiz/>;
        case "birinchi":
            return <Icons.Birinchi/>;
        default:
            return "-";
    }
}

const StatusWrapper = ({value, reload, label, id, path,}) => {
    const [open, setOpen] = useState(false);
    const [coord, setCoord] = useState({x: 0, y: 0});
    const divRef = useRef(null);
    const modalRef = useRef(null); // Modal uchun ref
    const request = useFetch()

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (open && modalRef.current && !modalRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [open]);

    const handleClick = (e) => {
        e.stopPropagation();
        if (divRef.current && !open) {
            const rect = divRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2 + 5 + window.scrollX;
            const centerY = rect.top + rect.height + 15 + window.scrollY;

            const modalWidth = 171;
            const modalHeight = 182;
            const adjustedX = Math.min(
                Math.max(centerX, modalWidth / 2),
                window.innerWidth + window.scrollX - modalWidth / 2
            );
            const adjustedY = Math.min(
                Math.max(centerY, modalHeight / 2),
                window.innerHeight + window.scrollY - modalHeight / 2
            );

            setCoord({x: adjustedX, y: adjustedY});
            setOpen(true);
        }
    };

    const onChangeStatus = async (title) => {
        setOpen(false);
        let res = await request(`/tabs/${path}/id/*${id}*`, {
            method: 'PATCH',
            body: {[label]: title},
        })

        if (res) {
            reload()
        }
    }

    return (
        <div onClick={handleClick} ref={divRef}>
            <StatusModal open={open} setOpen={setOpen} coord={coord} modalRef={modalRef} onClick={onChangeStatus}/>
            <Status value={value}/>
        </div>
    );
};

export default StatusWrapper;