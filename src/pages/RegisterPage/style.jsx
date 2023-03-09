import styled from "styled-components";

export const ContainerRegister =styled.div`
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    input{
            width: 300px;
            height:30px;
            text-align: center;
            font-weight: bold;
            font-size: 1rem;
            outline: 0;
            border: 0;
            border-bottom: 1px solid #333;
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
            
        }
    form{
        display: flex;
        flex-direction: column;
    }
`
export const ContainerBanner = styled.div`
    width: 100%;
    height: 40%;
    background: green;
    img{
        width: 100%;
        height: 100%;
    }
`