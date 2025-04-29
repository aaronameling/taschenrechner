import Casetwo from "./Components/Casetwo.jsx"
import History from "./Components/History.jsx"
import './App.css'
import {useState} from "react";

function App() {

    const [history, setHistory] = useState([]);

    const addToHistory = (calcPath) => {
        setHistory(prevState => [...prevState, calcPath]);
    }

    return(
        <div>
            <div className="bg-red-500 text-white p-4 text-center">
                Test Tailwind
            </div>
            <History history={history}/>
            <Casetwo addToHistory={addToHistory}/>
        </div>
    );
}

export default App;