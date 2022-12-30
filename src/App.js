import './App.css';
import {useSelector} from "react-redux";
import {loginSelector} from "./Redux/selectors/authSelectors";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import {Route, Routes} from "react-router-dom";
import ProfilePage from "./components/ProfilePage";

const App = () => {


    return (
        <div className="App">
            <Header/>
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
