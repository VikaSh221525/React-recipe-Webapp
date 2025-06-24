import React from 'react';
import { ChefHat, Heart, Users, Award, Target, Lightbulb, Globe, Star, Clock, Utensils } from 'lucide-react';

const About = () => {
    const teamMembers = [
        {
            name: "Sarah Johnson",
            role: "Head Chef & Founder",
            image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
            description: "15+ years of culinary expertise from Michelin-starred restaurants"
        },
        {
            name: "Marcus Chen",
            role: "Recipe Developer",
            image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
            description: "Specializes in fusion cuisine and healthy cooking techniques"
        },
        {
            name: "Elena Rodriguez",
            role: "Community Manager",
            image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
            description: "Passionate about connecting food lovers from around the world"
        }
    ];

    const values = [
        {
            icon: <Heart className="w-8 h-8 text-red-400" />,
            title: "Passion for Food",
            description: "We believe cooking is an art form that brings people together and creates lasting memories."
        },
        {
            icon: <Users className="w-8 h-8 text-pink-400" />,
            title: "Community First",
            description: "Our platform thrives on the shared knowledge and creativity of our amazing community."
        },
        {
            icon: <Target className="w-8 h-8 text-orange-400" />,
            title: "Quality & Authenticity",
            description: "Every recipe is carefully tested and verified to ensure the best cooking experience."
        },
        {
            icon: <Globe className="w-8 h-8 text-green-400" />,
            title: "Global Flavors",
            description: "We celebrate diverse cuisines and cooking traditions from every corner of the world."
        }
    ];

    const achievements = [
        {
            icon: <Award className="w-10 h-10 text-yellow-400" />,
            title: "Best Recipe App 2024",
            description: "Awarded by Food & Tech Magazine"
        },
        {
            icon: <Star className="w-10 h-10 text-yellow-400" />,
            title: "4.9/5 User Rating",
            description: "Based on 50,000+ reviews"
        },
        {
            icon: <Users className="w-10 h-10 text-blue-400" />,
            title: "1M+ Active Users",
            description: "Growing community worldwide"
        },
        {
            icon: <ChefHat className="w-10 h-10 text-red-400" />,
            title: "10,000+ Recipes",
            description: "Curated by professional chefs"
        }
    ];

    return (
        <div className="text-white">
            {/* Hero Section */}
            <section className="relative mb-20 overflow-hidden">
                <div
                    className="relative h-[60vh] bg-cover bg-center bg-no-repeat rounded-2xl"
                    style={{
                        backgroundImage: "url('https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
                    }}
                >
                    <div className="absolute inset-0 bg-black/70 rounded-2xl"></div>

                    <div className="relative z-10 flex items-center justify-center h-full px-8">
                        <div className="text-center max-w-4xl">
                            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                                <span className="text-white">About</span>
                                <br />
                                <span className="text-red-400">Our Story</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                                Discover the passion, people, and purpose behind the world's most beloved recipe platform
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-black text-white mb-6">
                            Our <span className="text-red-400">Mission</span>
                        </h2>
                        <p className="text-xl text-gray-300 leading-relaxed mb-6">
                            We believe that great food has the power to bring people together, create memories, and
                            transform ordinary moments into extraordinary experiences. Our mission is to make cooking
                            accessible, enjoyable, and inspiring for everyone.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                            Whether you're a complete beginner or a seasoned chef, we provide the tools, recipes,
                            and community support you need to create amazing meals and share your culinary journey
                            with others around the world.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="bg-red-500 p-3 rounded-full">
                                <Lightbulb className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">Innovation in Every Recipe</h3>
                                <p className="text-gray-400">Constantly evolving to serve you better</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div
                            className="h-96 bg-cover bg-center rounded-2xl shadow-lg"
                            style={{
                                backgroundImage: "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop')"
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="mb-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-white mb-4">Our Core Values</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        The principles that guide everything we do and shape our community
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <div key={index} className="bg-zinc-800 p-6 rounded-xl border border-zinc-600 hover:border-red-400/50 transition-all duration-300 hover:transform hover:scale-105 text-center">
                            <div className="mb-4 flex justify-center">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                            <p className="text-gray-300 leading-relaxed">{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Story Section */}
            <section className="mb-20">
                <div className="bg-zinc-800 rounded-2xl p-8 md:p-12 border border-zinc-600">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-black text-white mb-6">
                                How It All <span className="text-red-400">Started</span>
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-red-500 text-white rounded-full p-2 mt-1">
                                        <Clock className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">2019 - The Idea</h3>
                                        <p className="text-gray-300">
                                            Started as a small project to digitize family recipes and share them with friends
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-pink-500 text-white rounded-full p-2 mt-1">
                                        <Users className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">2020 - Growing Community</h3>
                                        <p className="text-gray-300">
                                            Reached 1,000 users who loved sharing and discovering new recipes together
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-orange-500 text-white rounded-full p-2 mt-1">
                                        <Award className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">2021 - Recognition</h3>
                                        <p className="text-gray-300">
                                            Won "Best New Food App" and expanded our team of culinary experts
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-green-500 text-white rounded-full p-2 mt-1">
                                        <Globe className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">2024 - Global Impact</h3>
                                        <p className="text-gray-300">
                                            Now serving over 1 million food lovers across 150+ countries worldwide
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="h-96 bg-cover bg-center rounded-xl"
                            style={{
                                backgroundImage: "url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop')"
                            }}
                        >
                            <div className="h-full bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="mb-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-white mb-4">Meet Our Team</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        The passionate people behind your favorite recipe platform
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-zinc-800 rounded-xl overflow-hidden border border-zinc-600 hover:border-red-400/50 transition-all duration-300 hover:transform hover:scale-105">
                            <div
                                className="h-64 bg-cover bg-center"
                                style={{ backgroundImage: `url(${member.image})` }}
                            ></div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                                <p className="text-red-400 font-semibold mb-3">{member.role}</p>
                                <p className="text-gray-300 leading-relaxed">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Achievements Section */}
            <section className="mb-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-white mb-4">Our Achievements</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Milestones that reflect our commitment to excellence
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="bg-zinc-800 p-6 rounded-xl border border-zinc-600 hover:border-yellow-400/50 transition-all duration-300 text-center">
                            <div className="mb-4 flex justify-center">
                                {achievement.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                            <p className="text-gray-400 text-sm">{achievement.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section className="text-center">
                <div className="bg-zinc-800 rounded-xl p-12 border border-zinc-600">
                    <div className="mb-8">
                        <ChefHat className="w-16 h-16 text-red-400 mx-auto mb-4" />
                        <h2 className="text-4xl font-black text-white mb-4">
                            Join Our <span className="text-red-400">Culinary Family</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                            Have questions, suggestions, or just want to share your cooking success story?
                            We'd love to hear from you and help you on your culinary journey.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="text-center">
                            <div className="bg-red-500 p-3 rounded-full w-fit mx-auto mb-3">
                                <Utensils className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Recipe Support</h3>
                            <p className="text-gray-400">help@recipeapp.com</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-pink-500 p-3 rounded-full w-fit mx-auto mb-3">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Community</h3>
                            <p className="text-gray-400">community@recipeapp.com</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-orange-500 p-3 rounded-full w-fit mx-auto mb-3">
                                <Heart className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Partnerships</h3>
                            <p className="text-gray-400">partners@recipeapp.com</p>
                        </div>
                    </div>

                    <button className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105">
                        Get In Touch
                    </button>
                </div>
            </section>
        </div>
    );
};

export default About;