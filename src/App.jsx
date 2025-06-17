import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  const theme = createTheme({
    fonts: {
      primary: "Agraham",
      secondary: "Metrophobic",
    },
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
