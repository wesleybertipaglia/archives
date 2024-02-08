import React from 'react'
import ReactDOM from 'react-dom'
import SearchParams from './components/SearchParams'

const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <SearchParams />
        </div>
    )
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)
