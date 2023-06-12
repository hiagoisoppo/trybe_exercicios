import { Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import CoffeeList from './pages/coffee-list'
import Layout from './components/layout';
import Coffee from './pages/coffee'
import NotFound from './pages/not-found';

import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="coffees" element={ <CoffeeList /> } />
          <Route path="coffees/:coffee" element={ <Coffee /> } />
        </Route>
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </>
  )
}

export default App
