import{BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import Navmenu from './Navmenu.jsx';
import Datadetails from './Datadetails.jsx';
import './App.css'

function DatadetailsWrapper()
{
  const{Item}=useParams();
  return <Datadetails Item={Item} />
}
function App() {
  

  return (
    <Router>
      <div>
        <Navmenu />
        <Routes>
          <Route path="/scp/:Item" element={<DatadetailsWrapper />}/>
        </Routes>
      </div>
      
    </Router>
  )
}

export default App

