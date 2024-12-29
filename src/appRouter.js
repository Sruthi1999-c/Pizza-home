import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Signin from "./signin"
import Body from "./Body"
import Pizza from "./Pizza"
import Slides from "./Slides"


const AppRouter = createBrowserRouter([

    {
      path:"/",
      element: <App/>,
      children:[
        {
          path: "/",
          element: <Body/>
        },
        {         
          path:"/signin",
          element: <Signin/>
        },
    
        {
          path:"/order/pizza",
          element: <Pizza/>
          
        },
        {
          path:"/order/slides",
          element: <Slides/>
          
        }
      ]     
    },
  ])

  export default AppRouter;