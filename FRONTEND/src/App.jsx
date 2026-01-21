import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter , Route, Routes} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<div>Car Listings Page</div>} />
       
      </Routes>
    </BrowserRouter>
  )
}

export default App