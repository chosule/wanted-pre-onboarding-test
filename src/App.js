import logo from './logo.svg';
import './App.css';
import Root from "./routes/Root"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PageB from './pages/PageB';
import PageA from './pages/PageA';
import PageC from './pages/PageC';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    errorElement:<p>is error 😂</p>,
    children:[
      {path:'/page_b',element:<PageB/>},
      {path:'/page_c',element:<PageC/>},
    ]
  }
]) 


function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
