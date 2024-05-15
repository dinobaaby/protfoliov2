import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";

function App() {
    return (
        <>
            <Header />
            <Banner />
            <div style={{ height: "100vh" }}></div>
        </>
    );
}

export default App;
