import styled from "styled-components";

export const ContainerMenu = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    div{
        width: 100%;
        height: 30px;
        border-bottom: 1px solid black;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        span{
            margin:1rem 1rem;
            text-align: center;
        }
    }
`