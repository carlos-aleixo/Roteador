import './paginas/styles.scss';
import PagInicial from './paginas/PagInicial';
import Menu from './componentes/Menu';

export default function Exibição() {
  return (
      <div>
          <Menu />
          <PagInicial />
      </div>        
  );
}
