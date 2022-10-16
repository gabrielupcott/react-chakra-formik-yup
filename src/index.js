import { createRoot } from "react-dom/client";
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import View1 from "./View1";
import View2 from "./View2";
import View3 from "./View3";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<View1 />} />
        <Route path="/view1" element={<View1 />} />
        <Route path="view2" element={<View2 />} />
        <Route path="view3" element={<View3 />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
  
);