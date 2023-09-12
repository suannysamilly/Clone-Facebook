import './Header.css';



function Header() {
    return (
      <div className="content">

        <div className='content-info'>
          <h1>facebook</h1>
          <h3>O facebook ajuda a você  a se conectar e compartilhar com as pessoas que fazem parte da sua vida</h3>
        </div>
        <div className='content-login'>
          <form className='content-login-box'>
            <input type='text' className='inputs' placeholder='Email ou telefone' />
            <input type='password' className='inputs' placeholder='Senha'/>
            <button className='btn btn-enter'>Entrar</button>
            <a href='#' className='forgot-password'>Esqueceu a senha?</a>
            <hr></hr>
            <button className='btn btn-create-account'>Criar nova conta</button>
          </form>
          <p><b>Criar uma Página</b> para uma celebriade, uma marca ou uma empresa</p>
        </div>
      

       </div>
    );
  }
  
  export default Header;