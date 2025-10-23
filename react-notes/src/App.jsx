import Body from "./components/Body"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./components/About";
import NewBody from './components/NewBody';
import Error from "./components/Error";
import {Provider} from "react-redux"
import appStore from "./utils/appStore";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <NewBody />
      },
      {
        path: "/about",
        element: <About />
      },
    ],
    errorElement:<Error/>
  }
])


function App() {

  return (
    <>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
    </>
  )
}

export default App
