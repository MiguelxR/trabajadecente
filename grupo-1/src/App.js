import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Home from "./pages/Home";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Profile from "./pages/Profile";
import LayoutUser from "./components/shared/LayoutUser";
import Contactform from "./pages/contact/Contactform";
// import localAPI from "./utils/localAPI";

function App() {
  // const prueba = () => {
  //   localAPI
  //     .get("api/categories")
  //     .then((res) => console.log(res))
  //     .catch((error) => console.log(error));
  // };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
        </Route>
        <Route path="/register" element={<RegisterForm></RegisterForm>}></Route>
        <Route path="/login" element={<LoginForm></LoginForm>}></Route>
        <Route path="/profile" element={<LayoutUser></LayoutUser>}>
          <Route index element={<Profile></Profile>}></Route>
        </Route>
        <Route path="/contact" element={<Contactform></Contactform>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
