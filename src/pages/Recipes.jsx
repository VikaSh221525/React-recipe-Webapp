import React, { useContext } from 'react'
import { recipecontext } from '../context/Recipecontext';
import Recipecard from '../components/Recipecard';
import { toast } from 'react-toastify';

const Recipes = () => {
    const { recipe } = useContext(recipecontext);

    const renderrecipes = recipe.map((recipe) => (
                <Recipecard key={recipe.id} recipe={recipe} />
            ))

    return (
        <div className="h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {recipe.length > 0 ? renderrecipes : <h1 className='text-7xl text-red-500'>No Recipes Found!</h1> }
        </div>
    )
}

export default Recipes