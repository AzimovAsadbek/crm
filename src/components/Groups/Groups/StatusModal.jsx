import {Arrow, Icons, StatusContainer, StatusWrapper} from "./style.js";

const StatusModal = ({open, coord, modalRef}) => {
    return open ? (
        <StatusContainer ref={modalRef} x={coord?.x} y={coord?.y}>
            <Arrow/>
            <StatusWrapper>
                <Icons.Keldi/> Keldi
            </StatusWrapper>
            <StatusWrapper>
                <Icons.Birinchi/> Birinchi dars
            </StatusWrapper>
            <StatusWrapper>
                <Icons.Sababsiz/> Sababsiz
            </StatusWrapper>
            <StatusWrapper>
                <Icons.Sababli/> Sababli
            </StatusWrapper>
        </StatusContainer>
    ) : null;
};

export default StatusModal;