import { useState, useEffect } from "react";
import stocks from "../data";

const Price = () => {
    const stockData = stocks;
    
    const [stock, setStock] = useState({});

    const getStock = async () => {
        const res = await fetch (stocks);
        const data = await res.json();
        setStock(data);
    };
    useEffect(() => {
        getStock();
    }, []);
    const loading = () => {
        return <h1>Loading...</h1>;
    };
    const loaded = () => {
        return (
            <div>
                <h1>{stock.name}/{stock.symbol}</h1>
                <h2>{stock.lastPrice}</h2>
            </div>
        );
    };
    return stock ? loaded() : loading();
};

export default Price;