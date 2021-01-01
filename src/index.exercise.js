import React from 'react'
import ReactDom from 'react-dom'
import {Logo} from './components/logo'

const App = () => {
  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => alert('Login')}>Login</button>
      </div>
      <div>
        <button onClick={() => alert('Register')}>Register</button>
      </div>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
