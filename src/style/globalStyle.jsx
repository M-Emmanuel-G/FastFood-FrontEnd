import styled, { keyframes } from "styled-components";

export const ContainerBase = styled.div`
    width: 100vw;
    height: 100vh;
    background: grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContainerMobile = styled.div`
    width: 376px;
    height: 667px;
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
`

const animLoading = keyframes`
    0%{transform:rotate(0deg)}
    100%{transform:rotate(360deg)}
`

export const AnimLoading = styled.div`
    width:40px;
    height: 40px;
    background: none;
    border: 10px solid crimson;
    border-top: 10px solid transparent;
    border-radius: 50%;
    animation: ${animLoading} .5s linear infinite;
`