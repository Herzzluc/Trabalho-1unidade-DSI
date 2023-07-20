import React from 'react'
import { Link } from 'react-router-dom'
import './cadastro.css'

export default function Cadastro(){

    const [idPokemon, setIdPokemon] = React.useState(0)
    const [nome, setNome] = React.useState('')
    const [telefone, setTelefone] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [msgSucesso, setMsgSucesso] = React.useState('')
    const [msgErro, setMsgErro] = React.useState('')
    const [isSucesso, setIsSucesso] = React.useState(false)
    const [isErro, setIsErro] = React.useState(false)

    const checkTelefone = (strTelefone) => {
        const regExp = /^\+?\d{2}?\s*\(\d{2}\)?\s*\d{4,5}\-?\d{4}$/g
        // var telefone = '+55 (55) 23321-5454'
        // var resultado = regExp.test(telefone) //retorna true ou false
        return regExp.test(strTelefone) //retorna true ou false
    }

    console.log('IDPokemon ', idPokemon)
    console.log('Nome ', nome)
    console.log('Telefone ', telefone)
    console.log('Email ', email)

    const callRegister = React.useEffect(() => {
        try{
            //Esse método deve bater no backend e gravar a informação
            if(false)
                setIsSucesso(true)
        } catch {
            setIsErro(true)
            setMsgErro('Ops! Algo deu errado. Tente novamente.')
        } finally {
            setMsgSucesso('Cadastrado com sucesso!!!')
        }
    }, [isSucesso, isErro])

    return (
        <>
            <div>
                <Link className='cadastro__voltar' to="/">Voltar</Link>
            </div>
            <div id='container-register'>
                <h3>Cadastro de Usuário</h3>

                <div>
                    <span>Id Pokémon: <input name="idpoke" onChange={(event) => setIdPokemon(event.target.value)} /></span><br></br>
                    <span>Nome: <input name="nome" onChange={(event) => setNome(event.target.value)} /></span><br></br>
                    <span>Telefone: <input name="telefone" onChange={(event) => setTelefone(event.target.value)} onBlur={checkTelefone(telefone)} /></span> <br></br>
                    <span>E-mail: <input name="email" onChange={(event) => setEmail(event.target.value)} /></span><br></br>
                </div>

                <div>
                    <button 
                        id='btn-cadastrar'
                        disable={!checkTelefone}
                        onClick={callRegister}
                    >
                        Cadastrar
                    </button>
                </div>

                <div>
                    {isSucesso && msgSucesso}
                    {isErro && msgErro}
                </div>
            </div>
        </>
    )
}
