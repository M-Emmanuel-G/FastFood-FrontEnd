import styled from "styled-components";

export const ContainerCard = styled.div`
    width: 300px;
    height: 150px;
    border: 1px solid black ;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    position: relative;
    top: 1rem;
    text-align: center;
    background: #fff;
    border-radius: 10px;
    img{
        width: 20%;
        height: 80%;
        border-bottom-right-radius: 30px;
        border-top-right-radius: 30px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    div{
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        img{
            width: 30px;
            height: 30px;
            position: relative;
            bottom: 5px;
            border-radius: 50%;
            font-size: 1rem;
            background: none;
            border: none;
        }
        section{
            display: flex;
            justify-content: center;
            align-items: center;
            select{
                margin-right: 1rem;
                text-align: center;
                border: 0;
            }
        }
    }
`