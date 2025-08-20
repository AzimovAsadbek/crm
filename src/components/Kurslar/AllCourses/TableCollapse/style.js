import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${({justify}) => justify && justify};
`
const Dot = styled.div`
    display: inline-block;
    margin-right: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({color}) => color ? color : ""};
`
const Section = styled.div`
    display: flex;
    align-items: center;
`

const TimelineWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 250px;
    width: 100%;
    height: 28px;
    gap: 8px;
    border-radius: 16px;
    padding: 4px 12px;
    background-color: ${({$bgcolor}) => $bgcolor ? $bgcolor : ""};
    color: white;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: ${({$mb}) => $mb && $mb};
`

export {Wrapper, Dot, Section, TimelineWrapper}