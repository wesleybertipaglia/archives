import React, { useState } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AdoptedContext from './contexts/AdoptedContext'

import Header from './components/Header'
import SearchParams from './components/SearchParams'
import Details from './pages/Details'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
})

const App = () => {
    const adoptedPetHook = useState(null)

    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <AdoptedContext.Provider value={adoptedPetHook}>
                    <Header />
                    <Routes>
                        <Route path="/" element={<SearchParams />} />
                        <Route path="/details/:id" element={<Details />} />
                    </Routes>
                </AdoptedContext.Provider>
            </QueryClientProvider>
        </BrowserRouter>
    )
}

const root = document.getElementById('root')
ReactDom.render(<App />, root)
