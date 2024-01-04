
import ReactDOM from "react-dom/client";
import { HashRouter,Routes,Route } from "react-router-dom";
import { AppContext } from "./context/Contex";
import Header from "./components/Header";
import Feed from "./components/Feed";
import SerchResult from "./components/SerchResult";
import VedioDetail from"./components/VedioDetail"
import LeftNabMenuitme from "./components/LeftNabMenuitme";
const App = () => {
    return (
        <AppContext>
            <HashRouter>
                <div className=" flex flex-col h-full ">
                    <Header/>
                    <Routes>
                        <Route path="/" exact element={<Feed/>} />
                        <Route path="/searchResult/:serchQuery" element={<SerchResult/> } />
                        <Route path="/video/:id" element={<VedioDetail/>} />
                    </Routes>
                </div>
            </HashRouter>
        </AppContext>
    )
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);