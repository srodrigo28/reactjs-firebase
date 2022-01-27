
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './signup.css'

function SignUp(){
    
    const [nome, setNome] = useState('');
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
                    <h1>Cadastro</h1>
                    <input type="text" placeholder='John Lenon' value={nome} onChange={ (e)=> setNome(e.target.value) }/>
                    <br/>
                    <input type="text" placeholder='exemplo@email.com' value={email} onChange={ (e)=> setEmail(e.target.value) }/>
                    <br/>
                    <input type="password" placeholder='***************' value={password} onChange={ (e)=> setPassword(e.target.value) }/>
                    <br/>
                    <button type="submit" >Entrar</button>
                </form>
                <Link to="/">Já tem uma conta? Entre</Link>
            </div>
        </div>
    );
}
export default SignUp;