import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import About from './components/About'
import User from './components/User';
import Body from './components/Body';
import About2 from './components/About2';
import Controlled from './components/Controlled';
import Lifting from './components/Lifting';
import Parent from './components/Parent';
import Subj from './utils/ContextData';
import { Provider } from "react-redux"
import appStore from './utils/appStore';
import ParentCallback from './components/ParentCallback';

function App() {

  const userName = "John";
  const userName2 = "John2";
  const userName3 = 12;

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/about",
          element: <About name={userName} name2={userName2} name3={userName3} />
        },
        {
          path: "/user/:id",
          element: <User />
        },
        {
          path: "/about2",
          element: <About2 />
        },
        {
          path: "/controlled",
          element: <Controlled />
        },
        {
          path: "/lift",
          element: <Lifting />
        },
        {
          path: "/childtoparent",
          element: <Parent />
        },
        {
          path: "/callback",
          element: <ParentCallback />
        }
      ]
    }
  ])

  return (
    <>
      <Provider store={appStore}>
        <Subj.Provider value='English'>
          <RouterProvider router={appRouter} />
        </Subj.Provider>
      </Provider>
    </>
  )
}

export default App
