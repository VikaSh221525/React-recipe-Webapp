import React from 'react';
import { ChefHat, Heart, Clock, Users, ArrowRight, Star, Utensils, Sparkles } from 'lucide-react';

const Home = () => {
    const categories = [
        {
            name: "Breakfast",
            icon: <Utensils className="w-7 h-7" />,
            count: "45+ recipes",
            image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            gradient: "from-orange-500/80 to-red-500/80"
        },
        {
            name: "Lunch",
            icon: <ChefHat className="w-7 h-7" />,
            count: "60+ recipes",
            image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            gradient: "from-red-500/80 to-pink-500/80"
        },
        {
            name: "Dinner",
            icon: <Users className="w-7 h-7" />,
            count: "80+ recipes",
            image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            gradient: "from-purple-500/80 to-red-500/80"
        },
        {
            name: "Desserts",
            icon: <Heart className="w-7 h-7" />,
            count: "35+ recipes",
            image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            gradient: "from-pink-500/80 to-red-500/80"
        }
    ];

    const features = [
        {
            icon: <ChefHat className="w-10 h-10 text-red-400" />,
            title: "Easy Recipes",
            description: "Step-by-step instructions for delicious meals that anyone can master"
        },
        {
            icon: <Heart className="w-10 h-10 text-pink-400" />,
            title: "Save Favorites",
            description: "Build your personal collection of beloved recipes and access them instantly"
        },
        {
            icon: <Clock className="w-10 h-10 text-orange-400" />,
            title: "Quick & Easy",
            description: "From 15-minute meals to weekend projects - find recipes for every schedule"
        },
        {
            icon: <Sparkles className="w-10 h-10 text-yellow-400" />,
            title: "Create & Share",
            description: "Share your culinary masterpieces with our passionate food community"
        }
    ];

    const featuredRecipes = [
        {
            title: "Creamy Pasta Carbonara",
            time: "25 mins",
            difficulty: "Easy",
            rating: 4.8,
            image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            chef: "Maria's Kitchen"
        },
        {
            title: "Chocolate Lava Cake",
            time: "30 mins",
            difficulty: "Medium",
            rating: 4.9,
            image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            chef: "Sweet Delights"
        },
        {
            title: "Grilled Salmon",
            time: "20 mins",
            difficulty: "Easy",
            rating: 4.7,
            image: "https://images.pexels.com/photos/3622643/pexels-photo-3622643.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            chef: "Healthy Bites"
        }
    ];

    return (
        <div className="text-white">
            {/* Hero Section */}
            <section className="relative mb-20 overflow-hidden">
                <div
                    className="relative h-[70vh] bg-cover bg-center bg-no-repeat rounded-2xl"
                    style={{
                        backgroundImage: "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
                    }}
                >
                    <div className="absolute inset-0 bg-black/70 rounded-2xl"></div>

                    <div className="relative z-10 flex items-center h-full px-8 md:px-12">
                        <div className="max-w-4xl">
                            <div className="mb-6">
                                <span className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-semibold border border-red-400/30">
                                    <Sparkles className="w-4 h-4" />
                                    Welcome to Your Culinary Journey
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                                <span className="text-white">Discover</span>
                                <br />
                                <span className="text-red-400">Amazing Recipes</span>
                            </h1>

                            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl">
                                Transform your kitchen into a culinary paradise. Explore thousands of handcrafted recipes,
                                share your creations, and join a community of passionate food lovers.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg">
                                    <span>Explore Recipes</span>
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                <button className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300">
                                    Create Your Recipe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="mb-20">
                <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center bg-zinc-800 p-6 rounded-xl border border-zinc-600 hover:border-red-400/50 transition-all duration-300">
                        <div className="text-4xl font-black text-red-400 mb-2">1000+</div>
                        <div className="text-gray-300 font-medium">Delicious Recipes</div>
                    </div>
                    <div className="text-center bg-zinc-800 p-6 rounded-xl border border-zinc-600 hover:border-pink-400/50 transition-all duration-300">
                        <div className="text-4xl font-black text-pink-400 mb-2">25K+</div>
                        <div className="text-gray-300 font-medium">Happy Cooks</div>
                    </div>
                    <div className="text-center bg-zinc-800 p-6 rounded-xl border border-zinc-600 hover:border-yellow-400/50 transition-all duration-300">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <span className="text-4xl font-black text-yellow-400">4.9</span>
                            <Star className="w-6 h-6 fill-current text-yellow-400" />
                        </div>
                        <div className="text-gray-300 font-medium">Average Rating</div>
                    </div>
                    <div className="text-center bg-zinc-800 p-6 rounded-xl border border-zinc-600 hover:border-orange-400/50 transition-all duration-300">
                        <div className="text-4xl font-black text-orange-400 mb-2">150+</div>
                        <div className="text-gray-300 font-medium">Countries</div>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="mb-20 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
                        Your <span className="text-red-400">Recipe Haven</span> Awaits
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
                        Whether you're a seasoned chef or just starting your culinary adventure, our platform is designed to
                        <span className="text-red-400 font-semibold"> inspire</span>,
                        <span className="text-pink-400 font-semibold"> guide</span>, and
                        <span className="text-orange-400 font-semibold"> connect</span> food enthusiasts from every corner of the globe.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="mb-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-white mb-4">Why Choose Our Platform?</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        We make cooking <span className="text-red-400 font-semibold">enjoyable</span>,
                        <span className="text-pink-400 font-semibold"> accessible</span>, and
                        <span className="text-orange-400 font-semibold"> rewarding</span> for everyone.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-zinc-800 p-6 rounded-xl border border-zinc-600 hover:border-red-400/50 transition-all duration-300 hover:transform hover:scale-105">
                            <div className="mb-4 flex justify-center">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
                            <p className="text-gray-300 leading-relaxed text-center">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Categories Section */}
            <section className="mb-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-white mb-4">Browse by Category</h2>
                    <p className="text-xl text-gray-300">
                        Find the perfect recipe for <span className="text-red-400 font-semibold">any time</span> of day or
                        <span className="text-pink-400 font-semibold"> special occasion</span>
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                                <div
                                    className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${category.image})` }}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient}`}></div>
                                </div>
                                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                    <div className="mb-3 flex justify-center">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-1 text-center">{category.name}</h3>
                                    <p className="text-sm opacity-90 text-center font-medium">{category.count}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Recipes Section */}
            <section className="mb-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-white mb-4">Featured Recipes</h2>
                    <p className="text-xl text-gray-300">
                        Try these <span className="text-red-400 font-semibold">popular recipes</span> loved by our community
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {featuredRecipes.map((recipe, index) => (
                        <div key={index} className="bg-zinc-800 rounded-xl overflow-hidden border border-zinc-600 hover:border-red-400/50 transition-all duration-300 hover:transform hover:scale-105">
                            <div className="relative overflow-hidden">
                                <div
                                    className="h-48 bg-cover bg-center hover:scale-110 transition-transform duration-500"
                                    style={{ backgroundImage: `url(${recipe.image})` }}
                                ></div>
                                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 text-sm font-bold text-white">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-3 h-3 fill-current text-yellow-400" />
                                        <span>{recipe.rating}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{recipe.title}</h3>
                                <p className="text-gray-400 mb-3 text-sm">by {recipe.chef}</p>
                                <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                                    <span className="flex items-center gap-1 bg-zinc-700 px-2 py-1 rounded-full">
                                        <Clock className="w-3 h-3" />
                                        {recipe.time}
                                    </span>
                                    <span className="bg-red-500 text-white px-3 py-1 rounded-full font-semibold text-xs">
                                        {recipe.difficulty}
                                    </span>
                                </div>
                                <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                                    View Recipe →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="text-center">
                <div className="bg-zinc-800 rounded-xl p-12 border border-zinc-600">
                    <h2 className="text-4xl font-black text-white mb-6">
                        Ready to Start Your
                        <span className="text-red-400 block mt-2">Culinary Journey?</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Join thousands of food lovers discovering amazing recipes, sharing their creations,
                        and building their personal cookbook every single day.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                            <span>Browse All Recipes</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-10 py-4 rounded-xl text-lg font-bold transition-all duration-300">
                            Share Your Recipe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;