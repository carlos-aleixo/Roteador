import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { ContainerOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [categoria, setCategoria] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na solicitação');
        }
        return response.json();
      })
      .then(data => {
        setCategoria(data);
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  }, []);

  return (
    <div>
      <Menu mode="horizontal" theme="dark">
        <Menu.Item key="home" icon={<ContainerOutlined />}>
          <Link to="/">Loja</Link>
        </Menu.Item>
        {categoria.map(category => (
          <Menu.Item key={category}>
            <Link to={`/categoria/${category}`}>{category}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default Navbar;
