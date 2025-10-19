import Card from "./components/Card"

function App() {

  return (
    <>
      {console.log("Hello, Friends")}   {/* it will print on console */}
      <h1 className="text-3xl text-red-500">Hello React</h1>
      <Card id="1" name="new card"/>
    </>
  )
}

export default App
