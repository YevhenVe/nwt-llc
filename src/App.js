import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ModalProvider } from "./contexts/ModalContext";
import Team from "pages/team/Team";

function App() {
  return (
    <ThemeProvider>
      <ModalProvider>
        <Header />
        <Home />
        <About />
        <Team />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
