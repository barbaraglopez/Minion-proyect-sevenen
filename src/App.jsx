import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/services/Home/Home";
import { AppProvider } from "./context/useContext";
import { Login } from "./pages/auth/Login/Login";
import { Sucursales } from "./pages/services/Sucursales/Sucursales.jsx";
import { Prompt} from "./pages/services/Prompt/Prompt";
import { AddPrompt } from "./pages/services/Prompt/AddPrompt.jsx";
import { EditPrompt } from "./pages/services/Prompt/EditPrompt.jsx";
import { EditarSucursal } from "./pages/services/Sucursales/EditarSucursal.jsx";
import { Administradores } from "./pages/services/Administradores/Administradores.jsx";
import { EditarAdministrador } from "./pages/services/Administradores/EditarAdministrador.jsx";
import { Configurations } from "./pages/services/Configurations/Configurations.jsx";
import { Integrations } from "./pages/services/Integrations/Integrations";
import { ConectSocialMedia } from "./components/SocialMedia/ConectSocialMedia";
import { Comandos } from "./pages/services/Comandos/Comandos.jsx";
import { EditarComando } from "./pages/services/Comandos/EditarComando.jsx";
import { AgregarComando } from "./pages/services/Comandos/AgregarComando.jsx";
import { AddIntegration } from "./pages/services/Integrations/AddIntegration"

function App() {
  return (
    <main className="max-h-full flex flex-col">
        <AppProvider>
            <Routes>
               <Route path="/" element={<Login />} />
               <Route path="/home" element={<Home />} />
               <Route path="/login" element={<Login />} />

               <Route path="/prompts" element={<Prompt />} />
               <Route path="/addprompt" element={<AddPrompt />} />
               <Route path="/editprompt" element={<EditPrompt />} />

               <Route path="/sucursales" element={<Sucursales />} />
               <Route path="/editar-sucursal" element={<EditarSucursal />} />

               <Route path="/administradores" element={<Administradores />} />
               <Route path="/editar-administrador" element={<EditarAdministrador />} />

               <Route path="/configurations" element={<Configurations />} />

               <Route path="/integrations" element={<Integrations />} />
               <Route path="/addintegrations" element={<AddIntegration/>} />
               <Route path="/conectsocialmedia" element={<ConectSocialMedia />} />

               <Route path="/comandos" element={<Comandos />} />
               <Route path="/agregar-comando" element={<AgregarComando />} />
               <Route path="/editar-comandos" element={<EditarComando />} />
            </Routes>
        </AppProvider>
    </main>
  );
}

export default App;
