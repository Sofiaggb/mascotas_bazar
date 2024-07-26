import "./assets/css/index.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./Router"

function App() {

  return (
    <div className=" font-popins">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
