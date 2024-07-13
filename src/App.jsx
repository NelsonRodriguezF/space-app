import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import banner from "./assets/banner.png"
import Galeria from "./components/Galeria"
import fotos from "./fotos.json"
import { useState } from "react"
import ModalZoom from "./components/ModalZoom"

const FondoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {

  const [ fotosDeGaleria, setFotosDeGaleria] = useState(fotos)
  const [ fotoSelecionada, setFotoSelecionada ] = useState(null)

  const alAlternarFavorito = (foto) => {

    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !foto.favorita
      })
    }

    setFotosDeGaleria(fotosDeGaleria.map(fotoDeGaleria => {
      return {
        ...fotoDeGaleria, 
        favorita: fotoDeGaleria.id === foto.id ? !foto.favorita : fotoDeGaleria.favorita
      }
    }))
  }

  return (
    <>
      <FondoGradiente> 
        <GlobalStyles/>
        <AppContainer>
          <Cabecera/>
          <MainContainer>
            <BarraLateral/>
            <ContenidoGaleria>
              <Banner texto="La galería más completa del espacio" backgroundImage={banner} />
              <Galeria 
                alSeleccionarFoto={foto=>setFotoSelecionada(foto)} 
                fotos={fotosDeGaleria}
                alAlternarFavorito={alAlternarFavorito}
                />
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>  
        <ModalZoom 
          foto={fotoSelecionada} 
          alCerrar={()=> setFotoSelecionada(null)}
          alAlternarFavorito={alAlternarFavorito}
        />        
      </FondoGradiente>
    </>
  )
}

export default App
