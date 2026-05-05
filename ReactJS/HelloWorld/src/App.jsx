import './App.css';

function App() {
  return (

      <nav className="mae">
    <a href= "#" className="mae__filho">Home</a>
    <a href= "#" className="mae__filho">Quem Somos</a>
    <a href= "#" className="mae__filho">Contato</a>
    <a href= "#" className="mae__filho mae__filho--success">Entrar</a>
    <a href= "#" className="mae__filho mae__filho--buton-default">Cadastrar</a>
        {/* <!-- componente/bloco --> */}
     <div className="card-perfil">
        {/* <!-- elemento/element --> */}
         {/* <img className="card-perfil_imagem" src="./images/avatar.jpg"  alt="imagem de perfil do úsuario"> */}
     </div>
      </nav>

  );
}

export default App;