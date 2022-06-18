import { Link } from "react-router-dom";

const Header =(props)=> {
    return (
        <nav className="nav">
            <Link to="/">
                <div>iStocks</div>
            </Link>
            <Link to="/stocks">
                <div>Stocks</div>
            </Link>
            <Link to="/about">
                <div>About</div>
            </Link>
        </nav>
    );
};

export default Header;