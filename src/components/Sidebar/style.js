import styled from "styled-components";
import row from "../../assets/icons/rightArrow.svg?react";
import {NavLink} from "react-router-dom";

const Container = styled.div`
    display: flex;
`;

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 280px;
    min-width: 280px;


    height: 100vh;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 0;
    }

    background-color: white;
`;

const Body = styled.div`
    overflow: auto;
    height: 100vh;
    flex: 1;
    min-width: calc(1440px - 280px);
`;

const Wrapper = styled.div`
    margin: 16px;
    background-color: white;
    border-radius: 8px;
`;
const Logo = styled.div`
    position: sticky;
    top: 0;
    background-color: white;
    color: var(--activeColor);
    font-weight: 600;
    font-size: 20px;
    height: 60px;
    padding: 16px 24px;
    border-bottom: 1px solid #f8fafc;
    cursor: pointer;
    z-index: 999;
`;
// Profile
const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 20px 24px 0;
    background-color: white;
`;

Profile.Img = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
`;

Profile.Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const Title = styled.div`
    color: var(--primaryColor);
    font-weight: 600;
    font-size: 16px;
    white-space: nowrap;
    width: 168px;
    overflow: hidden;
    text-overflow: ellipsis;
`;
const SubTitle = styled.div`
    color: var(--secondaryColor);
    font-weight: 500;
    font-size: 14px;
    white-space: nowrap;
    width: 168px;
    overflow: hidden;
    text-overflow: ellipsis;
`;

// Menu
const Menu = styled.div`
    margin-top: 32px;
`;

const MenuInfo = styled(NavLink)`
    display: flex;
    padding: 12px 24px;
    color: ${({$active}) =>
            $active ? "var(--activeColor)" : "var(--primaryColor)"};
    background-color: ${({$active}) => ($active ? "#F8FAFC" : "white")};
    text-decoration: none;

    & path {
        fill: ${({$active}) => $active && "var(--activeColor)"};
    }

    cursor: pointer;

    &:hover {
        color: var(--activeColor);
        background-color: #f8fafc;

        & path {
            fill: var(--activeColor);
        }
    }
`;

const MenuTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    flex: 1;
    font-weight: 500;
    font-size: 14px;
`;

const ChildTitle = styled(MenuTitle)`
    padding: 12px 20px;
    /* padding: 20px; */
`;

const ChildWrapper = styled.div`
    height: ${({$active}) => ($active ? "auto" : "0px")};
    overflow: hidden;
    margin-left: 40px;
    color: ${({$activepath}) =>
            $activepath ? "var(--activeColor)" : "var(--primaryColor)"};
    background-color: ${({$activepath}) => ($activepath ? "#F8FAFC" : "white")};

    cursor: pointer;

    &:hover {
        color: var(--activeColor);
        background-color: #f8fafc;
    }

    /* position: absolute; */
`;

const Row = styled(row)`
    transform: ${({$active}) => $active && "rotate(90deg)"};
    transition: all 0.1s;
`;

const Exit = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 24px;
    background-color: white;
    color: var(--primaryColor);
    border-top: 1px solid #f8fafc;

    position: sticky;
    bottom: 0;
    margin-top: auto;

    color: var(--primaryColor);
    width: 100%;
    cursor: pointer;

    &:hover {
        color: var(--activeColor);
        background-color: #f8fafc;

        & path {
            fill: var(--activeColor);
        }
    }
`;

const Wrap = styled(NavLink)`
    text-decoration: none;
`;

export {
    Container,
    SidebarContainer,
    Body,
    Wrapper,
    Logo,
    Profile,
    Title,
    SubTitle,
    Menu,
    MenuInfo,
    MenuTitle,
    ChildWrapper,
    ChildTitle,
    Row,
    Exit,
    Wrap,
};
