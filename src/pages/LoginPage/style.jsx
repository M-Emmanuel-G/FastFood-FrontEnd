import styled from "styled-components";

export const ContainerLogin = styled.div`
    width: 100%;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
   
`

export const ContainerIconAdmin = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items:center;
    img{
        width: 30px;
        height: 30px;
    }
`

export const ContainerLogo = styled.div`
    width: 100%;
    height: 30%;
`

export const ContainerBanner = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 400px;
        height: 100%;
    }
`

export const ContainerLoading = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    opacity: 0;
`

export const ContainerSendLogin = styled.form`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction:column;
    align-items: center;
    button, input{
        width: 270px;
        height:30px;
        margin:0.5rem 0;
        text-align:center;
        border-bottom: 1px solid #000;
        background:0;
        border-radius: 12px;
        outline:0;
    }
`

export const ContainerInfo = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        color: #f2312e;
    }
`