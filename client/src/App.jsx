import "../src/";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import OutletContainer from "./layout/OutletContainer";
import Dashboard from "./pages/Dashboard";

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

  return <RouterProvider router={router} />;
}

export default App;
