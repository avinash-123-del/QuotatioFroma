import React from 'react'
import CustomerInfo from './Components/CustomerInfo'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import BillSection from './Components/BillSection'
import Invoice from './Components/Invoice'
const App = () => {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CustomerInfo />} />
          <Route path='/pricing' element={<BillSection />} />
          <Route path='/invoice' element={<Invoice />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App