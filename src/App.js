// import logo from './logo.svg';
// import './App.css';
import './assets/scss/App.scss';

import ChoosePage from "./components/ChoosePage/ChoosePage";
// import ResaultPage from './components/ResaultPage/ResaultPage';


import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Page from "./components/HomePage/HomePage";
import ResaultMscv from "./components/ResaultMscv/ResaultMscv";
import ResaultBunker from "./components/ResaultBunker/ResaultBunker";
import ResaultChirik from "./components/ResaultChirik/ResaultChirik";
import ResaultRubl from "./components/ResaultRubl/ResaultRubl";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Page/>,
    },
    {
        path: "/ChoosePage",
        element:  <ChoosePage/>,
    },
    {
        path: "/ResaultBunker",
        element:  <ResaultBunker/>,
    },
    {
        path: "/resault-mscv",
        element:  <ResaultMscv/>,
    },
    {
        path: '/ResaultChirik',
        element: <ResaultChirik/>,
    },
    {
        path: '/ResaultRubl',
        element: <ResaultRubl/>
    }


]);
function App() {
    return (

        <div className="App">
            <RouterProvider router={router} />
        </div>


    );
}

export default App;
