import '@reach/dialog/styles.css'
import * as React from 'react'
import ReactDom from 'react-dom'
import {Logo} from './components/logo'
import {Dialog} from '@reach/dialog'

const LoginForm = ({onSubmit, buttonText}) => {
  function handleSubmit(event) {
    event.prevenDefault()

    const {username, password} = event.target.value

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" />
      </div>
      <div>
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  )
}

const App = () => {
  const [openModal, setOpenModal] = React.useState('none')

  function login() {
    console.log('login')
  }
  function register() {
    console.log('register')
  }

  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
      </div>
      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>
      <Dialog aria-label="Login Form" isOpen={openModal === 'login'}>
        <div>
          <button onClick={() => setOpenModal('none')}>Close</button>
        </div>
        <h3>Login</h3>
        <LoginForm onSubmit={login} buttonText={'login'} />
      </Dialog>
      <Dialog aria-label="Registration form" isOpen={openModal === 'register'}>
        <div>
          <button onClick={() => setOpenModal('none')}>Close</button>
        </div>
        <h3>Registration</h3>
        <LoginForm onSubmit={register} buttonText={'register'} />
      </Dialog>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
