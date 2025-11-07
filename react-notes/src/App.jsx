import Body from "./components/Body"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./components/About";
import NewBody from './components/NewBody';
import Error from "./components/Error";
import {Provider} from "react-redux"
import appStore from "./utils/appStore";
import RenderedBody from "./components/RenderedBody";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <RenderedBody />
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
