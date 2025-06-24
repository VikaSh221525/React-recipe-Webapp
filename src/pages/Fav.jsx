import { useContext, useEffect, useState } from "react";
import Recipecard from "../components/Recipecard";
import { recipecontext } from "../context/Recipecontext";

const Fav = () => {
    const { recipe } = useContext(recipecontext);
    const [favourite, setFavourite] = useState(() => JSON.parse(localStorage.getItem("fav") || "[]"));

    useEffect(() => {
        // Remove favorites that are not present in the main recipe list
        const validFavs = favourite.filter(fav =>
            recipe.some(r => r.id === fav.id)
        );
        if (validFavs.length !== favourite.length) {
            setFavourite(validFavs);
            localStorage.setItem("fav", JSON.stringify(validFavs));
        }
    }, [recipe]);

    const renderrecipes = favourite.map((recipe) => (
        <Recipecard key={recipe.id} recipe={recipe} />
    ));

    return (
        <div className="h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {favourite.length > 0 ? renderrecipes : <h1 className="text-8xl text-red-500">No Favourite Found!</h1>}
        </div>
    );
}

export default Fav;