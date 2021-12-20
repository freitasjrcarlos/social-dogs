import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const LoginForm = () => {

  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({userName, password}),
    }).then((response) => {
      console.log(userName, password);
      console.log(response);
      return response.json();
    }).then((json) => {
      console.log(json);
    })
  }

  return (
    <section>
      <h1> Login </h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" />
        <Input label="Senha" type="password" name="password" />

        <Button> Entrar </Button>
      </form>
      <Link to="/login/criar"> Cadastro </Link>
    </section>
  )
}

export default LoginForm
