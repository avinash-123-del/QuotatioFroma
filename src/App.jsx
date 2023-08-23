import React from 'react'


import { Route , Routes} from 'react-router-dom'
import GeneratedQuotation from './Components/GeneratedQuotation'
import Form from './Components/Form'

const App = () => {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='/quotation' element={<GeneratedQuotation/>}/>
    </Routes>

    </>
  )
}

export default App