import styled from "styled-components";

export const ContainerHome = styled.div`
    width: 100%;
    height: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    scrollbar-color: #424242 #fff;
`
export const ContainerCategory = styled.div`
    width: 100%;
    height: 5%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    input{
        width: 200px;
        height: 20px;
        text-align: center;
        width: 200px;
        outline: 0;
        font-size: 1rem;
        color: #111;
        ::placeholder{
            font-size: 1rem;
            text-align: center;
            color: #111;
        }
    }
    ::after{
        content: '';
        width: 90%;
        display: flex;
        border-bottom: 2px solid black;
        margin: 1rem 0;
    }
    span{
            font-weight: bold;
            margin: 0 0.5rem;
    }
    img{
        width: 30px;
        height: 30px;
        position: relative;
        top: 9px;
        margin-left: 1rem;
    }    
`