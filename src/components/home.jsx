import react from "react";
import Contents from "./contents.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();
    const navegationManage = () => {
        navigate("/catalog");
    }


    return(
        <>
            <h1>Welcome to the Home Page</h1>
            <Contents />

            <button onClick={navegationManage}>
                Go to Catalog
            </button>
        </>
    )
}

export default Home