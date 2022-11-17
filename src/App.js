import { ThemeProvider } from "./contexts/ThemeContext";
import { ModalProvider } from "./contexts/ModalContext";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Team from "pages/team/Team";
import Hiring from "pages/hiring/Hiring";
import Contacts from "pages/contacts/Contacts";

function App() {
  return (
    <ThemeProvider>
      <ModalProvider>
        <Header />
        <Home />
        <About />
        <Team />
        <Hiring />
        <Contacts />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
