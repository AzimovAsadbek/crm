import {Arrow, Icons, StatusContainer, StatusWrapper} from "./style.js";

const StatusModal = ({open, coord, modalRef, onClick}) => {
    return open ? (
        <StatusContainer ref={modalRef} x={coord?.x} y={coord?.y}>
            <Arrow/>
            <StatusWrapper onClick={() => onClick("keldi")}>
                <Icons.Keldi/> Keldi
            </StatusWrapper>
            <StatusWrapper onClick={() => onClick("birinchi")}>
                <Icons.Birinchi/> Birinchi dars
            </StatusWrapper>
            <StatusWrapper onClick={() => onClick("sababsiz")}>
                <Icons.Sababsiz/> Sababsiz
            </StatusWrapper>
            <StatusWrapper onClick={() => onClick("sababli")}>
                <Icons.Sababli/> Sababli
            </StatusWrapper>
        </StatusContainer>
    ) : null;
};

export default StatusModal;