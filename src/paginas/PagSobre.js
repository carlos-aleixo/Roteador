import Menu from "../componentes/Menu";
import { useParams } from 'react-router-dom';
import './styles.scss'

export default function PagSobre() {
    const { imagem, titulo, descricao } = useParams();
    return <>
        <Menu/>
        <div className="container mt-5">
            <div className="g-6 pt-5 row row-cols-1 row-cols-md-2">
                <div className="col">
                    <img src={imagem} className="img-fluid pb-3"/>
                </div>
                <div className="col">
                    <h1>{titulo}</h1>
                    <p>{descricao}</p>
                </div>
            </div>
        </div>
    </>
}