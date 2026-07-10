import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import WhatsappButton from "./components/WhatsappButton";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <WhatsappButton />
    </BrowserRouter>
  );
}

export default App;