import styled from "styled-components";

export const ContainerLogin = styled.div`
    width: 100%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    section{
        img{
        width: 30px;
        height: 30px;
        position: relative;
        right: 0
     } 
    }
    
    div{
        display: flex;
        flex-direction: column;
    }
    input{
            width: 300px;
            height:30px;
            text-align: center;
            font-weight: bold;
            font-size: 1rem;
            border: none;
            border-bottom: 1px solid black;
            background: transparent;
            outline: 0;
            margin-top: 1rem;
            ::placeholder{
                text-align: center;
                font-weight: bold;
                font-size: 1rem;
            }
        }
        button{
            width: 300px;
            height: 50px;
            margin-top: 1rem;
            border-radius: 20px;
            border: 1px solid black;
            background: none;
        }
    form{
        display: flex;
        flex-direction: column;
        margin-top: 3rem;
    }
`

export const ContainerBanner = styled.div`
    width: 100%;
    height: 50%;
    background: green;
    img{
        width: 100%;
        height: 100%;
    }
`

export const ContainerLoading = styled.div`
    width: 20%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    opacity: 0;
`