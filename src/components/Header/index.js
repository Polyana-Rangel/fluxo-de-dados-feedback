import {TitleHeader,Image} from './styled'


export const Header = (props) => {

    return(
        <TitleHeader>
            {/* <h1>insta4</h1> */}
            <p >{props.nome}</p>
            <Image src={props.urlFotoPerfil}></Image>
        </TitleHeader>
    )
}