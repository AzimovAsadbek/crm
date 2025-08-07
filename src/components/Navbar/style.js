import styled from "styled-components"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 16px 0 24px;
    align-items: center;
    height: 60px;
    background-color: white;
`

const InputWrapper = styled.div`
    border: 1px solid var(--secondaryColor);
    display: flex;
    align-items: center;
    width: 500;
    height: 40px;
    border-radius: 8px;
    padding-left: 16px;
    padding-right: 2px;
    gap: 16px;
    max-width: 500px;
    flex: 1;
`
const Input = styled.input`
    border-radius: 8px;
    height: 38px;
    width: 100%;
    border: none;
    outline: none;

    font-weight: 500;
    font-style: Medium;
    font-size: 14px;
    line-height: 20px;
    color: var(--primaryColor);

    &::placeholder {
        font-weight: 500;
        font-style: Medium;
        font-size: 14px;
        line-height: 20px;
        color: #BBC3CD;
    }
`

const RightWrapper = styled.div`
    display: flex;
    gap: 16px;
`

// Time
const TimeWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

const Time = styled.div`
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: ${({ $status }) => $status ? "var(--secondaryColor)" : "var(--primaryColor)"};
`

export { Container, InputWrapper, Input, RightWrapper, TimeWrapper, Time }