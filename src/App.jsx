// import Case from "./Components/Case.jsx"
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
            <History history={history}/>
            <Casetwo addToHistory={addToHistory}/>
        </div>
    );
}

export default App;