import React, { use, useContext, useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { recipecontext } from '../context/Recipecontext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Singlerecipe = () => {
    const navigate = useNavigate()
    const { recipe, setrecipe } = useContext(recipecontext);
    const params = useParams();
    const findrecipe = recipe.find((findrecipe) => params.id == findrecipe.id);
    console.log(findrecipe);

    const { register, handleSubmit, reset } = useForm({
        defaultValues:
        {
            title: findrecipe.title,
            image: findrecipe.image,
            chef: findrecipe.chef,
            desc: findrecipe.desc,
            ingredients: Array.isArray(findrecipe.ingredients) ? findrecipe.ingredients.join('\n') : findrecipe.ingredients,
            instructions: Array.isArray(findrecipe.instructions) ? findrecipe.instructions.join('\n') : findrecipe.instructions,

        }
    });
    // Dummy submit handler
    const onSubmit = (data) => {
        const recipeindex = recipe.findIndex((data) => params.id == data.id);

        const updatedData = {
            ...data,
            ingredients: data.ingredients.split('\n').map(i => i.trim()).filter(Boolean),
            instructions: data.instructions.split('\n').map(i => i.trim()).filter(Boolean),
        };

        const copydata = [...recipe];
        copydata[recipeindex] = { ...copydata[recipeindex], ...updatedData }
        setrecipe(copydata)
        toast.success("Recipe updated!");

    }

    const Deletehandler = () => {
        const filterdata = recipe.filter((r) => r.id != params.id);
        setrecipe(filterdata);
        navigate("/Recipes")
    }

    useEffect(()=>{
        console.log("Single Recipe.jsx mounted");
        return ()=>{
            console.log("Single Recipe.jsx unmounted");
            
        }
    }, [])
    // ye square bracket jo akhri me lga h use effect me ye rendering ko rokta h


    return findrecipe ?
        <div className='w-full flex'>
            <div className="left w-1/2 p-2 flex flex-col gap-4">
                <h1 className="text-3xl font-black mb-2 text-amber-400">{findrecipe.title}</h1>
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
                onSubmit={handleSubmit(onSubmit)}
                className="w-1/2 max-w-lg bg-zinc-800 rounded-2xl shadow-lg p-10 space-y-6"
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
                        {...register("categories")}
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
                    type="submit"
                    className="w-full mt-4 bg-amber-400 hover:bg-amber-500 text-zinc-900 font-semibold py-3 rounded-xl shadow transition"
                >
                    Delete Recipe
                </button>
            </form>

        </div> : "Loading..."
}

export default Singlerecipe


// create update and delete functionality