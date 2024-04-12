import React from 'react'
import {Routes, Route} from 'react-router-dom'
import About from './component/About/About'
import Administration from './component/Administration/Administration'
import Registry from './component/Registry/Registry'
import Research from './component/R&C/Research'
import Admission from './component/Admission/Admission'

const App = () => {
  return (
  <div>
    <Routes>
      <Route path='/' element={<About />}/>
      <Route path='/admin'  element={<Administration />}/>
      <Route path='/admin/0' element={<Admission />}/>
      <Route path='/admin/1' element={<Registry />}/>
      <Route path='/admin/2' element={<Research />}/>
    </Routes>
  </div>
  )
}

export default App