import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import OutletContainer from "./layout/OutletContainer";
import Dashboard from "./pages/Dashboard";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import PreviousData from "./pages/PreviousData";
import CheckVitals from "./pages/CheckVitals";
import Register from "./pages/Register";
import Login from "./pages/Login";
import RootLayout from "./layout/RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />

        <Route path="register" element={<Register />} />

        <Route path="dashboard" element={<OutletContainer />}>
          <Route index element={<Dashboard />} />

          <Route path="data" element={<PreviousData />} />
          <Route path="check_vitals" element={<CheckVitals />} />
        </Route>

        {/* <Route path="message_assistu" element={<ChatScreen />} /> */}
      </Route>
    )
  );

  return (
    <NextThemesProvider attribute="class" defaultTheme="light">
      <RouterProvider router={router} />
    </NextThemesProvider>
  );
}

export default App;
