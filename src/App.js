import CookieBanner from "react-cookie-banner";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ModalProvider } from "./contexts/ModalContext";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Team from "pages/team/Team";
import Hiring from "pages/hiring/Hiring";
import Contacts from "pages/contacts/Contacts";
import Footer from "components/footer/footer";
import "./styles/Index.scss";

function App() {
  return (
    <ThemeProvider>
      <ModalProvider>
        <Header />
        <Home />
        <About />
        <Hiring />
        <Team />
        <Contacts />
        <Footer />
        <CookieBanner
          className="custom-react-cookie-banner"
          message="NWT-LLC.COM using cookies!"
          buttonMessage="Agree"
          onAccept={() => {
            alert("Thanks for understanding");
          }}
          cookie="user-has-accepted-cookies"
        />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
