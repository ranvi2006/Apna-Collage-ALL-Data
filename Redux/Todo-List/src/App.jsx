import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import TodoList from "./TodoList";
import Footer from "./Footer";
import "./App.css"
// import Home from "./Home";
// import Profile from "./Profile";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<TodoList />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
