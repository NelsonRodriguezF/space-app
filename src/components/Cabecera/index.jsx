import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderStyle = styled.header`
  padding: 60px 0px;
  display: flex;
  justify-content: space-between;
  img{
    width: 212px;
  }
`

const Cabecera = () => {
  return <HeaderStyle>
    <img src="img/logo.png" alt="Logo de Space App"/>
    <CampoTexto/>
  </HeaderStyle>
}

export default Cabecera