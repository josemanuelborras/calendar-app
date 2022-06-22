import { Routes, Route } from "react-router-dom";
import Date from './components/Date';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Date />} />
    </Routes>
  );
}

export default App;