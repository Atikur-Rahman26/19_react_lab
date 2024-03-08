import "./App.css";
import "./SummationFinderPage/SummationFinder";
import SummationFinder from "./SummationFinderPage/SummationFinder";
import TaskManager from "./TaskManager/TaskManager";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/sum" element={<SummationFinder />} />
          <Route path="/task" element={<TaskManager />} />
          <Route path="/" exact element={<SummationFinder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
