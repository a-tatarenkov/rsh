import './Product.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Reviews from "./Reviews/Reviews";

const Product = () => {
    let [product, setProduct] = useState({});
    let { productId } = useParams();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then((response) => setProduct(response.data))
    }, []);

    return (
        <div className='Product'>
            <img src={product.image} alt={product.title}/>
            <div className='container'>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <h2>Category: {product.category}</h2>
                <p>Price: {product.price}$</p>
                <Reviews/>
            </div>
        </div>
    )
}

export default Product;