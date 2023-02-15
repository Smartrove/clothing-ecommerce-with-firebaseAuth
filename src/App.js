import EcommerceView from "./components/EcommerceView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Navigation from "./components/Navigation";
import SignIn from "./components/SignIn";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <>
          <Route path="/" exact element={<EcommerceView />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sign-in" element={<SignIn />} />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
