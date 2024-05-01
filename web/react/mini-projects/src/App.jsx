import Header from "./components/Header";
import Footer from "./components/Footer";
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <>
      <Header />

      <main>        
        <ChakraProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ChakraProvider>
      </main>

      <Footer />
    </>
  );
}

export default App;
