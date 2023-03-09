import styled from "styled-components";

export const ContainerPayment = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Card = styled.div`
    width: 95%;
    margin: 0.3rem;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span{
        font-weight: bold;
        margin-left: 0.2rem;
    }
`

export const ContainerHistoric = styled.div`
    width: 100%;
    height: 65%;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
`

export const CardInfo = styled.div`
    width: 100%;
    height: 35%;
    border: 1px solid black;
    display: flex;
    align-items: center;
    button{
        width: 100px;
        height: 10px;
        margin-top: 0.5rem;
    }
    
        section{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            select{
                text-align: center;
                width: 150px;
            }
            span{
                margin-top: 0.5rem;
            }
        }
    
    button{
        height: 30px;
    }
`

export const ContainerInfo = styled.div`
    width: 50%;
    height: 90%;
    text-align: center;
    border: 1px solid black;
    margin: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    div{
        p{
            color: green;
            font-weight: bold;
        }
    }
    section{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        select{
            width: 100px;
        }
        span{
            margin: 0.5rem 0;
            font-weight: bold;
        }
    }
`