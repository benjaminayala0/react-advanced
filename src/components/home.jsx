import react from "react";
import Contents from "./contents.jsx";
import { useNavigate,Link } from "react-router-dom";

const Home = () => {

     const product = [
        { id: 1, title: 'Tablet' },
        { id: 2, title: 'Phone'  },
        { id: 3, title: 'Bike'  },
        { id: 4, title: 'Mackbook' },
    ];

    const navigate = useNavigate();
    const navegationManage = () => {
        navigate("/catalog");
    }


    return(
        <>
            <h1>Welcome to the Home Page</h1>
            <Contents />

            <h1>Products List</h1>
            <ul className="list-groups">
                {product.map((product) => (
                    <Link to={'/product/' + product.title}
                        key={product.id}
                    className='list-group-item list-group-item-action'>{product.title}
                    </Link>
                ))}
            </ul>

            <button onClick={navegationManage}>
                Go to Catalog
            </button>
        </>
    )
}

export default Home