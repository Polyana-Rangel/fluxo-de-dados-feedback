import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [pageFlow, setPageFlow] = useState(1);
  const [nome, setNome] = useState("")
  const [urlFotoPerfil, setUrlFotoPerfil] = useState("")
  const [urlFotoPost, setUrlFotoPost] = useState("")
  const [descricao, setDescricao] = useState("")
  const [titulo, setTitulo] = useState("")
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header nome={nome} urlFotoPerfil={urlFotoPerfil} />
          {pageFlow === 1 ? (
            <FormularioLogin setPageFlow={setPageFlow} urlFotoPerfil={urlFotoPerfil}
              setUrlFotoPerfil={setUrlFotoPerfil} nome={nome} setNome={setNome} />
          ) : (
            <FormularioPostagem setDescricao={setDescricao} descricao={descricao}
             titulo={titulo} setTitulo={setTitulo} urlFotoPost={urlFotoPost} setUrlFotoPost={setUrlFotoPost} />
          )}
        </aside>
        <TelaDaPostagem titulo={titulo} descricao={descricao} urlFotoPost={urlFotoPost}
        />
      </Container>
    </>
  );
}

export default App;
