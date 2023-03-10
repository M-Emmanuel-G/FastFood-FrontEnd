import styled from "styled-components";

export const ContainerTable = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerInfo = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    div{
        span{
            margin: 0rem 0;
        }

        span, button{
            margin: 0.2rem 1rem;
        }

        button{
            background: none;
            width: 30px;
            height: 30px;
            border: 0;
            font-size:1rem;
            color: red;
        }
    }
`

export const ContainerCreateTable = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        input{
            width: 300px;
            height: 30px;
            border: 0;
            border-bottom: 2px solid black;
            background: none;
            text-align: center;
            outline: 0;
            font-size: 1rem;
            color: #111;

            ::placeholder{
                text-align: center;
                font-size: 1rem;
                color:#111;
            }
        }
        button{
            width: 300px;
            height: 30px;
            border: 2px solid #111;
            border-radius: 10px;
            margin-top: 1rem;
            background: none;
            font-size: 1rem;
        }
    }
`