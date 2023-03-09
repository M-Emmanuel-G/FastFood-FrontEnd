import styled from "styled-components";

export const ContainerProduct = styled.div`
    width: 100%;
    height: 75%;
    background: flex;
    flex-direction: column;
    align-items: center;
    form{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        input{
            width: 300px;
            height: 30px;
            margin: 1rem 0;
            outline: 0;
            border: 0;
            border-bottom: 1px solid #111;
            text-align: center;
            font-size: 1rem;
            ::placeholder{
                text-align: center;
                font-size: 1rem;
            }
        }
        select{
            width: 300px;
            height: 30px;
            text-align: center;
            border: 0;
            border-bottom: 1px solid black;
        }

        button{
            width: 300px;
            height: 30px;
            margin: 1rem 0;
        }
    }
`