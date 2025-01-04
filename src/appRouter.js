import { BrowserRouter } from "react-router-dom"
import App from "./App"
import Signin from "./signin"
import Body from "./Body"
import Pizza from "./Pizza"
import Slides from "./Slides"
import Cart from "./Cart"


const AppRouter = BrowserRouter([

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
          
        },
        {
          path:"/order/cart",
          element: <Cart/>
          
        }
      ]     
    },
  ])

  export default AppRouter;