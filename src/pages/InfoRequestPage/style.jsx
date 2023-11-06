import styled from "styled-components"

export const ContainerInfoRequest = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    header{
        width: 100%;
        height: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    section{
        width: 100%;
        height: 90%;
        background: blue;
    }

`

export const ContainerList = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerSendOrder = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    flex-direction: column;

        ::before{
            content: '';
            width: 100%;
            border: 1px solid black;
            display: flex;
            margin-bottom: 0.5rem;
        }
    button{
        width: 200px;
        height: 30px;
        font-size: 1.3rem;
        border: 1px solid black;
        background: lightgreen;
        border-radius: 10px;
    }
`

export const CardOrder = styled.div`
    width: 98%;
    height: 50px;
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
    img{
        width: 30px;
        height: 30px;
    }
    span, img{
        margin: 0 1rem;
    }
`

