import { useRoutes } from 'react-router-dom'

import { routes } from './router'
import MioPageLoading from "./components/loading/page-loading"


function App() {  
  return (
    <div className="App">
      {useRoutes(routes)}
    </div>
  )
}

export default App
