import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <div>
            <Routes>
              <Route path="/" element={<div>Hello World</div>} />
              <Route path="/about" element={<div>About us</div>} />
              <Route path="/add" element={<div>Add Music</div>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;