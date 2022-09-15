import React from "react";
import Navbar from "./Components/Header/Header"
import ItemListContainer from "./Components/Containers/ItemListContainer/ItemListContainer";
import ItemCount from "./Components/ItemCount";

function App() {
  const mensaje = "Bienvenidos a esta página"
  return (
<>  
   <Navbar />
   <ItemListContainer
   greeting={mensaje}/>
</>
  );
}

export default App;
