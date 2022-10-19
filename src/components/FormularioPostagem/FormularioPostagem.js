import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {
  function onChangeDescricao (e) {
    props.setDescricao(e.target.value)
    
  }
function onChangeTitulo(e){
  props.setTitulo(e.target.value)
}
function onChangeUrlFotoPost(e){
  props.setUrlFotoPost(e.target.value)
}

  return (
    <FormContainer>
      
       <h2>Insira sua postagem abaixo: </h2>
      
      <Form>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={props.urlFotoPost} onChange={onChangeUrlFotoPost}
          />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={props.descricao} onChange={onChangeDescricao} 
          />
        </StyledLabel>
        <StyledLabel htmlFor="Titulo">
          Titulo:
          <Input id="titulo" value={props.titulo} onChange={onChangeTitulo} 
          />
        </StyledLabel>
       
      </Form>
    </FormContainer>
  )
};

export default FormularioCadastro;
