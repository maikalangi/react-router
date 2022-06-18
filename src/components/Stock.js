import { useParams } from "react-router";

const stock = (props) => {
    console.log({ props });
    const stock = props.stocks.filter(data => data.symbol === useParams().symbol)[0]
    // console.log("STOCK", stock);
    // console.log("symbol", symbol);
    return (
        <div className="stock-page">
            <h1>{stock.name}/{stock.symbol}</h1>
            <h2>{stock.lastPrice}</h2>
        </div>
    )
};

export default stock;