import styled from "styled-components";

export const ContainerAdmin = styled.div`
    width: 100%;
    height: 75%;
    background: yellow;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    div{
        width: 350px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        margin-top:1rem;
        label{
            font-weight: bold;
        }
        p{
            font-weight: 200;
        }
        section{
            width: 100%;
            display: flex;
            justify-content: center;
            button{
                width: 200px;
                height: 30px;
                margin: 1rem 0;
            }

        }
    }
`