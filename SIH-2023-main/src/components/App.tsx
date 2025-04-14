// App.tsx

import { useState } from "react";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import Footer from "./Footer";
import LawyerSearchPage from "./LawyerSearchPage";
import LawyerDetails from "./LawyerDetails";
import ContactUs from "./ContactUs";
import LawyerSignUp from "./LawyerSignUp";
import ClientSignUp from "./ClientSignUp";
import Login from "./Login"; // ✅ Importing the Login component

import "../styles/App.css";

function App() {
  const [current_page, setCurrentPage] = useState("home");

  const lawyerInfo = {
    name: "Rohit Sinha",
    contact: "+91 935-395-8508",
    probono: "10",
    specialization: "Criminal Defense",
    location: "Banagalore, Karnataka",
    experience: "10+ Years",
    price: "$100",
    rating: "4.5",
    description:
      "A Criminal Defense Attorney is a legal professional with specialized expertise in defending individuals or entities accused of criminal activities. These dedicated advocates play a crucial role in upholding the principles of justice, ensuring fair trials, and safeguarding the rights of their clients within the criminal justice system.",
  };

  if (current_page === "home") {
    return (
      <>
        <Navbar setCurrentPage={setCurrentPage} />
        <div className="nav-fixer"></div>
        <HomePage setCurrentPage={setCurrentPage} />
        <Footer />
      </>
    );
  } else if (current_page === "search") {
    return (
      <>
        <Navbar setCurrentPage={setCurrentPage} />
        <div className="nav-fixer"></div>
        <LawyerSearchPage
          setCurrentPage={setCurrentPage}
          current_page={current_page}
        />
        <Footer />
      </>
    );
  } else if (current_page === "detailed_view") {
    return (
      <>
        <Navbar setCurrentPage={setCurrentPage} />
        <div className="nav-fixer"></div>
        <LawyerDetails
          current_page={current_page}
          setCurrentPage={setCurrentPage}
          details={lawyerInfo}
        />
        <Footer />
      </>
    );
  } else if (current_page === "contact us") {
    return (
      <>
        <Navbar setCurrentPage={setCurrentPage} />
        <div className="nav-fixer"></div>
        <ContactUs />
        <Footer />
      </>
    );
  } else if (current_page === "sign in") {
    return (
      <>
        <Navbar setCurrentPage={setCurrentPage} />
        <div className="nav-fixer"></div>
        <Login setCurrentPage={setCurrentPage} /> {/* ✅ Login Page Rendered */}
        <Footer />
      </>
    );
  } else if (current_page === "lawyer-signup") {
    return (
      <>
        <Navbar setCurrentPage={setCurrentPage} />
        <div className="nav-fixer"></div>
        <LawyerSignUp />
        <Footer />
      </>
    );
  } else if (current_page === "client-signup") {
    return (
      <>
        <Navbar setCurrentPage={setCurrentPage} />
        <div className="nav-fixer"></div>
        <ClientSignUp />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Navbar setCurrentPage={setCurrentPage} />
        <div className="nav-fixer"></div>
        <h1>{current_page}</h1>
        <Footer />
      </>
    );
  }
}

export default App;
