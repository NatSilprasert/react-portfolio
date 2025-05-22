import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <>
      <h1>LOL</h1>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>      
      </BrowserRouter>
    </>
  )
}

export default App
