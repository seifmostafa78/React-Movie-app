import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Watchlist from "./components/Watchlist"
import Watched from "./components/Watched"
import Add from "./components/Add";
import GlobalContextProvider from "./context/GlobalContext";
import './components/App.css'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <GlobalContextProvider>
          <Header/>
          <Routes>
            <Route path="/" element={<Watchlist/>}></Route>
            <Route path="/watched" element={<Watched/>}></Route>
            <Route path="/add" element={<Add/>}></Route>
          </Routes>
        </GlobalContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App