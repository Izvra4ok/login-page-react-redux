import './App.css';
import Header from "./components/Header";
import LoginPage from "./page/LoginPage";
import {Route, Routes} from "react-router-dom";
import ProfilePage from "./page/ProfilePage";
import Navbar from "./components/Navbar";

const App = () => {


    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className={"App__content"}>
                <Routes>
                    <Route path={"/*"} element={<LoginPage/>}/>
                    <Route path={"/profile/*"} element={<ProfilePage/>}/>
                    <Route path={"/login/*"} element={<LoginPage/>}/>
                </Routes>
            </div>


        </div>
    );
}

export default App;
