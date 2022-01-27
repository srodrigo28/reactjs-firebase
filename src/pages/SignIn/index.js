import { useState } from 'react'
import { Link } from 'react-router-dom'
import './signin.css';
import logo from '../../assets/logo.png'

function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSumit(e){
        e.preventDefault();
        alert('Clicou')
    }

    return(
        <div className="container-center">
            <div className='login'>
                <div className='login-area'>
                    <img src={logo} alt="Logo do sistema"/>
                </div>
                <form onSubmit={handleSumit}>
                    <h1>Entrar</h1>
                    <input type="text" placeholder='exemplo@email.com' value={email} onChange={ (e)=> setEmail(e.target.value) }/>
                    <input type="password" placeholder='***************' value={password} onChange={ (e)=> setPassword(e.target.value) }/>
                    <button type="submit" >Entrar</button>
                </form>
                <Link to="/register">Criar uma conta</Link>
            </div>
        </div>
    );
}

export default SignIn;