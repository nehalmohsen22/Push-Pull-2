import "./App.css";
import Header from "./componants/header/Header";
import Footer from "./componants/footer/Footer";
import Home from "./componants/home/Home";
import Login from "./componants/login/Login";
import Error from "./componants/error/Error";
import About from "./componants/about/About";
import Profile from "./componants/profile/Profile";
import Posts from "./componants/Posts";
import Post from "./componants/posts/Post";
import { Routes, Route, Navigate } from "react-router-dom";
import Messenger from "./componants/messenger/Messenger";
function App() {
  let posts = [
    { Title: "product1", price: "40" },
    { Title: "product2", price: "30" },
    { Title: "product3", price: "50" },
    { Title: "product4", price: "40" },
    { Title: "product5", price: "560" },
    { Title: "product6", price: "450" },
  ];

  return (
    <>
      <Header />

      <main className="mt-5">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Messenger" element={<Messenger />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/:id" element={<Post />}>
            <Route path=":id" element={<Post />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;
