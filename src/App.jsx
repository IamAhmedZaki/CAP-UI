
import './App.css'
import {Routes,Route} from 'react-router-dom'
import StudentDashboard from './Screens/StudentDashBoard'

function App() {
  

  return (
    <>
    
     <Routes>
      <Route path="/" element={<StudentDashboard/>} />
      
    </Routes>
      
    </>
  )
}

export default App