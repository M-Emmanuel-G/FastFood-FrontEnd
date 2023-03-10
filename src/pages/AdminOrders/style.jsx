import styled from "styled-components";

export const ContainerAdminOrder = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    table{
        text-align: center;
        width: 100%;
        tbody{
            td{
                width: 100px;
                height: 90px;
                    img{
                        width: 30px;
                        height: 30px;
                        margin: 0.3rem 0;
                    }
                
            }
        }
    }
`

export const CardOrder = styled.div`
    width: 90%;
    height: 150px;
    border-radius: 10px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    button{
        width: 120px;
        height: 20px;
        margin: 0.5rem 0.5rem;
        border: 0;
        border-radius: 10px;
    }
  
    .btnRed{
        background: red;
    }
    .btnGreen{
        background: green;
    }

`