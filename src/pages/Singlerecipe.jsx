import React, { use, useContext, useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { recipecontext } from '../context/Recipecontext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useState } from 'react';

const Singlerecipe = () => {
    const navigate = useNavigate()
    const { recipe, setrecipe } = useContext(recipecontext);
    const params = useParams();
    const findrecipe = recipe.find((findrecipe) => params.id == findrecipe.id);

    const { register, handleSubmit, reset } = useForm({
        defaultValues:
        {
            title: findrecipe?.title,
            category: findrecipe?.category,
            image: findrecipe?.image,
            chef: findrecipe?.chef,
            desc: findrecipe?.desc,
            ingredients: findrecipe?.ingredients,
            instructions: findrecipe?.instructions,

        }
    });
    // Dummy submit handler
    const onUpdate = (data) => {
        const recipeindex = recipe.findIndex((data) => params.id == data.id);

        const copydata = [...recipe];
        copydata[recipeindex] = { ...copydata[recipeindex], ...data }
        setrecipe(copydata)
        localStorage.setItem("recipes", JSON.stringify(copydata));
        toast.success("Recipe updated!");

    }
    const [favorite, setfavorite] = useState(JSON.parse(localStorage.getItem("fav")) || [])

    const Deletehandler = () => {
        const filterdata = recipe.filter((r) => r.id != params.id);
        setrecipe(filterdata);
        localStorage.setItem("recipes", JSON.stringify(filterdata));

        const updatedFav = favorite.filter((f) => f.id != params.id);
        setfavorite(updatedFav);
        localStorage.setItem("fav", JSON.stringify(updatedFav));
        navigate("/Recipes")
    }

    useEffect(() => {
        console.log("Single Recipe.jsx mounted");
        return () => {
            console.log("Single Recipe.jsx unmounted");

        }
    }, [])
    // ye square bracket jo akhri me lga h use effect me ye rendering ko rokta h


    const favhandler = () => {
        let copyfav = [...favorite];
        copyfav.push(findrecipe);
        setfavorite(copyfav)
        localStorage.setItem("fav", JSON.stringify(copyfav));
    }

    const unfavhandler = () => {
        let filterfav = favorite.filter(f => f.id != findrecipe?.id);
        setfavorite(filterfav)
        localStorage.setItem("fav", JSON.stringify(filterfav));
    }



    return findrecipe ?
        <div className='w-full flex'>
            <div className="left w-1/2 p-2 flex flex-col gap-4 realtive">
                <h1 className="text-3xl font-black mb-2 text-amber-400">{findrecipe.title}</h1>

                {favorite.find((f) => f.id == findrecipe?.id) ?
                    <i onClick={unfavhandler} className="absolute left-[45%] ri-heart-fill text-pink-500 text-3xl transition-transform duration-300 group-active:scale-125"></i> :
                    <i onClick={favhandler} className="absolute left-[45%] ri-heart-line text-pink-500 text-3xl transition-transform duration-300 group-active:scale-125"></i>
                }



                <img className="h-[40vh] w-full object-cover rounded-lg shadow" src={findrecipe.image} alt={findrecipe.title} />
                <div className="flex items-center justify-between mt-2">
                    <h2 className="text-xl font-semibold text-amber-400">{findrecipe.chef}</h2>
                    <span className="bg-amber-200 text-zinc-800 px-3 py-1 rounded-full text-sm font-medium">
                        {findrecipe.category || "No Category"}
                    </span>
                </div>
                <p className="text-zinc-300 mt-2">{findrecipe.desc}</p>
                <div>
                    <h3 className="font-bold text-lg text-amber-300 mb-1">Ingredients:</h3>
                    <ul className="list-disc list-inside text-zinc-200">
                        {(Array.isArray(findrecipe.ingredients) ? findrecipe.ingredients : String(findrecipe.ingredients).split('\n')).map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-lg text-amber-300 mb-1">Instructions:</h3>
                    <ol className="list-decimal list-inside text-zinc-200">
                        {(Array.isArray(findrecipe.instructions) ? findrecipe.instructions : String(findrecipe.instructions).split('\n')).map((step, idx) => (
                            <li key={idx}>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>
            <form
                onSubmit={handleSubmit(onUpdate)}
                className="w-1/2 max-w-lg bg-zinc-800 rounded-2xl shadow-lg p-10 space-y-6 relative"
            >


                <h2 className="text-3xl font-bold text-center mb-6 text-amber-300">Create Recipe</h2>

                <div>
                    <input
                        className="w-full bg-zinc-700 text-white border-b-2 border-amber-300 focus:border-amber-400 outline-none p-3 rounded-t-md transition"
                        type="url"
                        {...register("image")}
                        // value={findrecipe.image}
                        placeholder="Image URL"
                    />
                </div>

                <div>
                    <input
                        className="w-full bg-zinc-700 text-white border-b-2 border-amber-300 focus:border-amber-400 outline-none p-3 rounded-t-md transition"
                        {...register("chef")}
                        type="text"
                        // value={findrecipe.chef}
                        placeholder="Chef Name"
                    />
                </div>
                <div>
                    <input
                        className="w-full bg-zinc-700 text-white border-b-2 border-amber-300 focus:border-amber-400 outline-none p-3 rounded-t-md transition"
                        {...register("title")}
                        type="text"
                        // value={findrecipe.title}
                        placeholder="Recipe Title"
                    />
                </div>

                <div>
                    <select
                        className="w-full bg-zinc-700 text-white border-b-2 border-amber-300 focus:border-amber-400 outline-none p-3 rounded-t-md transition"
                        {...register("category")}
                    // value={findrecipe.category}
                    >
                        <option className="text-black" value="">Select Category</option>
                        <option className="text-black" value="Vegetarian">Vegetarian</option>
                        <option className="text-black" value="vegetarian">vegetarian</option>
                        <option className="text-black" value="desserts">desserts</option>
                    </select>
                </div>

                <div>
                    <textarea
                        className="w-full bg-zinc-700 text-white border-b-2 border-amber-300 focus:border-amber-400 outline-none p-3 rounded-t-md resize-none transition"
                        placeholder="Enter Description"
                        {...register("desc")}
                        // value={findrecipe.desc}
                        rows={3}
                    ></textarea>
                </div>

                <div>
                    <textarea
                        className="w-full bg-zinc-700 text-white border-b-2 border-amber-300 focus:border-amber-400 outline-none p-3 rounded-t-md resize-none transition"
                        placeholder="Enter Ingredients"
                        {...register("ingredients")}
                        rows={3}
                    ></textarea>
                </div>

                <div>
                    <textarea
                        className="w-full bg-zinc-700 text-white border-b-2 border-amber-300 focus:border-amber-400 outline-none p-3 rounded-t-md resize-none transition"
                        placeholder="Enter Instructions"
                        {...register("instructions")}
                        rows={3}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full mt-4 bg-amber-400 hover:bg-amber-500 text-zinc-900 font-semibold py-3 rounded-xl shadow transition"
                >
                    Update Recipe
                </button>
                <button
                    onClick={Deletehandler}
                    type="button"
                    className="w-full mt-4 bg-amber-400 hover:bg-amber-500 text-zinc-900 font-semibold py-3 rounded-xl shadow transition"
                >
                    Delete Recipe
                </button>
            </form>

        </div> : "Loading..."
}

export default Singlerecipe


// create update and delete functionality