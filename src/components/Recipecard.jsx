import { Link } from "react-router-dom";
const Recipecard = (props) => {
    const { id, chef, title, desc, image } = props.recipe;

    return (
        <Link
            to={`/recipes/details/${id}`}
            className="block bg-zinc-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-200 h-fit"
        >
            <img 
                src={image}
                alt={title}
                className="w-full h-56 object-cover"
            />
            <div className="p-4">
                <h1 className="text-lg font-bold text-amber-300 mb-1">{title}</h1>
                <small className="block text-zinc-400 mb-2">{chef}</small>
                <p className="text-zinc-200 text-sm">
                    {desc?.slice(0, 100)}...
                    <span className="text-blue-400 cursor-pointer"> more</span>
                </p>
            </div>
        </Link>
    );
};

export default Recipecard;