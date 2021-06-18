import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MiddleSection from "./components/MiddleSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import UserForm from "./components/UserForm";
import MobileNavBar from "./components/MobileNavBar";
import { useDispatch, useSelector } from "react-redux";
import {
  currentUser,
  loginToApp,
  logoutOfApp,
} from "./features/counter/userSlice";
import Payment from "./components/Payment";
import { auth } from "./firebase";

function App() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const user = useSelector(currentUser);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          loginToApp({
            name: userAuth.displayName,
            email: userAuth.email,
            photoUrl: userAuth.photoURL,
            uid: userAuth.uid,
          })
        );
      } else {
        dispatch(logoutOfApp());
      }
    });
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <UserForm />
        ) : (
          <>
            <Header toggle={toggle} />
            <MobileNavBar isOpen={isOpen} toggle={toggle} />
            <Switch>
              <Route path="/payment">
                <Payment />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Router path="/menu">
                <Menu />
              </Router>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/" exact>
                <HeroSection />
                <MiddleSection />
              </Route>
            </Switch>
            <Footer />
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
