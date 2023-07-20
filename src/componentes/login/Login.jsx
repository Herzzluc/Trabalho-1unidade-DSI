import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
    const [hasErro, setHasErro] = React.useState(false)
    const msgErro = 'Ops! Algo deu errado. Tente novamente mais tarde.'

    return (
        
        <div  className = 'contend'>
            <div className='vai-da-certo'>
                <h3> Seja Bem-Vindo(a) ao POKEMATCH</h3>

                <div className='login-msg'>
                    {hasErro && msgErro}
                </div>

                <div className='login-menu'>
                    <span>Usuário: <input className='login-menu__input' /></span><br></br>
                    <span>Password: <input className='login-menu__password' /></span><br></br>
                    <span>
                        <button className='login-menu__button' onClick={() => setHasErro(true)}>
                            Entrar
                        </button>
                    </span> <br></br>

                    <span>
                        Faça seu <Link className='menu__link' to="/cadastro" >cadastro</Link>.
                    </span>
                </div>
            </div>

        </div>
        
    )
}

export default Login
