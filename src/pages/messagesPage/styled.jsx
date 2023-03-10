import styled from "styled-components";

export const ContainerMessages = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CardMessage = styled.div`
    width: 90%;
    height: 100px;
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
`

export const ContainerSendMessage = styled.div`
    width: 100%;
    height: 20%;
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ContainerListMessage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;

    div{
        width: 300px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        border-radius: 10px;
        margin-top: 1rem;
        text-align: center;
        button{
            position: relative;
            bottom: 40px;
            background:none;
            border: none;
            border-radius: 10px;
            color: red;
            font-size: 1rem;
        }
    }
`