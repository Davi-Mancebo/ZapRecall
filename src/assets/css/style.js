import styled from "styled-components"

export const PerguntaAberta = styled.div`
width: 300px;
margin: 12px;
padding: 15px;
min-height: 100px;
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;

font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #333333;

position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;

p{
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
}
`

export const PerguntaFechada = styled.div`
width: 300px;
height: 35px;
background-color: #FFFFFF;
margin: 12px;
padding: 15px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;
`

export const ContainerBotoes = styled.div`
display: flex;
justify-content: space-between;
`
export const ButtonC1 = styled.button`
  width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;

  border: 1px solid;

  border-radius: 5px;
  padding:5px;

  background: #2FBE34;
  border-color: #2FBE34;
`
export const ButtonC2 = styled.button`
  width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;

  border: 1px solid;

  border-radius: 5px;
  padding:5px;


  background: #FF922E;
  border-color: #FF922E;

`
export const ButtonC3 = styled.button`
  width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;

  border: 1px solid;

  border-radius: 5px;
  padding:5px;

  background: #FF3030;
  border-color: #FF3030;
`