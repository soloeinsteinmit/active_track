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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<OutletContainer />}>
        <Route index element={<Dashboard />} />
        {/* <Route path="getstarted" element={<GetStarted />} /> */}
        {/* <Route path="message_assistu" element={<ChatScreen />} /> */}
      </Route>
    )
  );

  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <RouterProvider router={router} />
    </NextThemesProvider>
  );
}

export default App;
