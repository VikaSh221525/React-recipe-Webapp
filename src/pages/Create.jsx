import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid'
import { useContext } from 'react';
import { recipecontext } from '../context/Recipecontext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const {recipe, setrecipe} =useContext(recipecontext)
    const navigate =  useNavigate();

    const { register, handleSubmit, reset } = useForm();
    // Dummy submit handler
    const onSubmit = data => {
        data.id = nanoid();

        setrecipe([...recipe, data]);
        toast.success("New recipe created!")

        reset();
        navigate("/recipes");
    }

    return (
        <div className="flex items-center justify-center min-h-[80vh]">
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-lg bg-zinc-800 rounded-2xl shadow-lg p-10 space-y-6"
            >
                <h2 className="text-3xl font-bold text-center mb-6 text-amber-300">Create Recipe</h2>
                
                <div>
                    <input
                        className="w-full bg-zinc-700 text-white border-b-2 border-amber-300 focus:border-amber-400 outline-none p-3 rounded-t-md transition"
                        type="url"
                        {...register("image")}
                        placeholder="Image URL"
                    />
                </div>

                <div>
                    <input
                        className="w-full bg-zinc-700 text-white border-b-2 border-amber-300 focus:border-amber-400 outline-none p-3 rounded-t-md transition"
                        {...register("chef")}
                        type="text"
                        placeholder="Chef Name"
                    />
                </div>
                <div>
                    <input
                        className="w-full bg-zinc-700 text-white border-b-2 border-amber-300 focus:border-amber-400 outline-none p-3 rounded-t-md transition"
                        {...register("title")}
                        type="text"
                        placeholder="Recipe Title"
                    />
                </div>

                <div>
                    <select
                        className="w-full bg-zinc-700 text-white border-b-2 border-amber-300 focus:border-amber-400 outline-none p-3 rounded-t-md transition"
                        {...register("categories")}
                    >
                        <option className="text-black" value="">Select Category</option>
                        <option className="text-black" value="Vegetarian">Vegetarian</option>
                        <option className="text-black" value="non-Vegetarian">non-Vegetarian</option>
                        <option className="text-black" value="Desserts">Desserts</option>
                    </select>
                </div>

                <div>
                    <textarea
                        className="w-full bg-zinc-700 text-white border-b-2 border-amber-300 focus:border-amber-400 outline-none p-3 rounded-t-md resize-none transition"
                        placeholder="Enter Description"
                        {...register("desc")}
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
                    Save Recipe
                </button>
            </form>
        </div>
    );
};

export default Create