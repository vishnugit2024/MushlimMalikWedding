import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Login/Loginpage";
import SignupPage from "./Pages/Signup/SignupPage";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Member from "./Pages/Membership Planes/Member";
import OurStory from "./Pages/OURSTORY/OurStory";
import ContactUs from "./Pages/CONTACTUS/ContactUs";
import MalikFooter from "./Components/Footer/MalikFooter";
import Gallery from "./Pages/GalleryPage/Gallery";
import ProfilePage from "./Pages/PROFILES/ProfilePage";
import UserProfile from "./Pages/UserProfile/UserProfile";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/member" element={<Member />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/profilePage" element={<ProfilePage />} />
        <Route path="/userProfile" element={<UserProfile />} />
      </Routes>
      <MalikFooter/>
    </Router>
  );
}

export default App;
