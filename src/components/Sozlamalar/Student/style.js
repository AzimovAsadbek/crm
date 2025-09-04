import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Container = styled.div`
    display: flex;
`

const SubSidebar = styled.aside`
    width: 250px;
    display: flex;
    flex-direction: column;

    .active {
        background-color: #F8FAFC;
        color: #1890FF;

        & path {
            fill: #1890FF;
        }
    }
`

const SubSidebarItem = styled(NavLink)`
    display: flex;
    align-items: center;
    height: 44px;
    background-color: white;
    padding-left: 33px;
    text-decoration: none;
    color: var(--primaryColor);

    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    & path {
        fill: #BBC3CD;
    }


    &:hover {
        background-color: #F8FAFC;
        color: #1890FF;

        & path {
            fill: #1890FF;
        }
    }

    .subIcon {
        margin-right: 16px;
    }

`

const Body = styled.div`
    padding: 12px 0 0 32px;
    flex: 1;
`
export {Container, SubSidebar, Body, SubSidebarItem}