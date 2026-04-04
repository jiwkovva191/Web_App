import { BrowserRouter, Route, Routes } from "react-router"
import { About, Contacts, Home, NotFound } from "./pages"
import { Layout } from "./components"

const App = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/about'} element={<About/>}/>
          <Route path={'/contacts'} element={<Contacts/>}/>
          <Route path={'*'} element={<NotFound/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
