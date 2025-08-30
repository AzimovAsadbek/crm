import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const DownloadWrapper = styled.div`
    width: 112px;
    height: 112px;
    border-radius: 8px;
    background-color: #F8FAFC;
    background-image: ${({$url}) => $url && `url(${$url})`};
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

const DownloadInput = styled.input`
    position: absolute;
    inset: 0;
    top: -15px;
    opacity: 0;
    cursor: pointer;
`

export {Container, DownloadWrapper, DownloadInput}