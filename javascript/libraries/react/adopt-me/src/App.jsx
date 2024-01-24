import React from 'react'
import ReactDOM from 'react-dom'
import Pet from './components/Pet'

const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <Pet name="Luna" animal="Dog" breed="Havanese" />
            <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
            <Pet name="Doink" animal="Cat" breed="Mixed" />
        </div>
    )
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)