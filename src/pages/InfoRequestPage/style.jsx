import styled from "styled-components"

export const ContainerInfoRequest = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ContainerList = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    overflow-y: auto;
    background: #fff;

   div{
    display: flex;
    flex-direction: column;
    section{
        width: 250px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;
        background: rgba(1,1,1,0.3);
        border-radius: 20px;
        button{
            width: 50px;
            height: 40px;
            margin: 0 2rem;
            font-size: 2rem;
            background: none;
            border: none;
            border-radius: 50%;
        }
    }
   }
    table{
        width: 100%;
        tbody{
            tr{
                display: flex;
                justify-content: space-between;
                align-items: center;
            td{
                width: 30px;
                height: 30px;
                border: 0;
                img{
                width: 30px;
                height: 30px;
                margin-right: 1rem;
                font-size: 1.2rem;
                border: 0;
                color: red;
            }
            }
            span{
                margin-left: 1rem;
            }
            }
        }
   }
`

export const ContainerSendOrder = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    flex-direction: column;

        ::before{
            content: '';
            width: 100%;
            border: 1px solid black;
            display: flex;
            margin-bottom: 0.5rem;
        }
    button{
        width: 200px;
        height: 30px;
        font-size: 1.3rem;
        border: 1px solid black;
        background: lightgreen;
        border-radius: 10px;
    }
`

