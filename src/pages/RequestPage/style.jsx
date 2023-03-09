import styled from "styled-components";

export const ContainerRequestPage = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 700px;
        border: 2px solid black;
        div{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: yellow;
            select{
                width: 300px;
                height: 30px;
                font-size: 1rem;
                text-align: center;
            }
            button{
                width: 300px;
                height: 30px;
                margin-top: 2rem;
                border-radius: 10px;
            }
        }
    }
   
`