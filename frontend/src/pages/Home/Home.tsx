import "./Home.css"
import {ShopCards} from "./ShopCards/ShopCards";
import {ShopItems} from "./ShopItems/ShopItems";
import {ShopCategories} from "./ShopCategories/ShopCategories";


export const Home = () => {



    return (
        <main>
            <ShopCards/>
            <ShopItems/>
            <ShopCategories/>
        </main>
    );
};