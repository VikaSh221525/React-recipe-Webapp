import Navbar from "./components/Navbar"
import Mainroutes from "./routes/Mainroutes"

const App = () => {
  return (
    <div className="w-[100%] h-[100%] bg-zinc-700 text-white py-10 px-[10%] ">
      <Navbar/>
      <Mainroutes/>
    </div>
  )
}

export default App