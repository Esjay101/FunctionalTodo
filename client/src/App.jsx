import './App.css';
import {Navigate, Routes, Route} from "react-router-dom";
import {TodoPage} from "./pages/TodoPage";
import {LoginPage} from "./pages/LoginPage";
import React, {useContext, useState} from "react"

export const TokenContext = React.createContext(null);

const ProtectedRoute = ({element, username}) => {
  const [token] = useContext(TokenContext);
  return token ? element({username}) : <Navigate to="/login"/>
}



function App() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState("ok")
  return (
    <div className="App">
      <TokenContext.Provider value={[token, setToken]}>
      <Routes>
        <Route path="/" element={<ProtectedRoute element={TodoPage} username={username}/>}/>
        <Route path="login" element={<LoginPage setUsername={setUsername}/>}/>
      </Routes>
      </TokenContext.Provider>
    </div>
  )
}
  
export default App
