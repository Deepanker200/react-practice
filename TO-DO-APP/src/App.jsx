import { Provider } from 'react-redux'
import Counter from './components/Counter'
import Todo from './components/Todo'
import TodoStore from './components/TodoStore'
import appStore from '/src/utils/appStore'

function App() {

  return (
    <>
    <Provider store={appStore}>
      {/* <Counter /> */}
      {/* <Todo/> */}
      <TodoStore/>
      </Provider>
    </>
  )
}

export default App
