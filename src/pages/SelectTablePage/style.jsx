import styled from "styled-components";

export const ContainerSelectTable =styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CardTable = styled.div`
    width:290px;
    height: 70px;
    display: flex;
    border: 1px solid black;
    margin: 1rem 0;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    background: linear-gradient(339deg, rgba(255,253,253,1) 17%, rgba(159,255,0,1) 100%);
    button{
        width: 65px;
        height: 25px;
        margin: 1rem 0;
    }

    span, button{
        margin: 0 1rem;
    }
`