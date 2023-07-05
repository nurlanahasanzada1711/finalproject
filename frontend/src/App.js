import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes/routes";
import { UserContextProvider } from "./context/UserContext";
import { TeamContextProvider } from "./context/ServiceContext";

const routes = createBrowserRouter(ROUTES);


function App() {
  return (
   <TeamContextProvider>
        <UserContextProvider>
      <RouterProvider router={routes}/>
    </UserContextProvider>
   </TeamContextProvider>
   
 
   

  );
}

export default App;
