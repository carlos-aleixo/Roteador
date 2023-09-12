import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles.scss'

export default function PagInicial() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
            .then((resposta) => {
                setProdutos(resposta.data);
            });
    }, []);

    return (
        <div className='container pt-5'>
            <div className='g-2 row row-cols-1 row-cols-md-2 row-cols-lg-4 align-items-center'>
                {produtos.map(produto => (
                    <Link to={`/produto/${encodeURIComponent(produto.image)}/${encodeURIComponent(produto.title)}/${encodeURIComponent(produto.description)}`} style={{ textDecoration: 'none' }}>
                        <div key={produto.id} className='pt-5 col d-flex justify-content-center'>
                            <div className='card align-items-center fundo-card' style={{ width: '250px', height: '380px' }}>
                                <img src={produto.image} className='card-img-top card-img p-3' alt={produto.title} />
                                <div className='card-body'>
                                    <h5 className='card-title nome'>{produto.title}</h5>
                                    <p className='preco'>R$: {produto.price}</p>
                                    <p className='card-text categoria'>{produto.category}</p>
                                </div>
                            </div>
                        </div></Link>
                ))}
            </div>
        </div>
    );
}