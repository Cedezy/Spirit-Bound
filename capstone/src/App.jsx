import React, { useState, useEffect } from 'react';
import { Sword, Ghost, Heart, Shield, Download, Menu, X } from 'lucide-react';
import homepic from './assets/homepic.png'
import pic1 from './assets/pic1.png';
import pic2 from './assets/pic2.png';
import pic3 from './assets/pic3.png';
import pic4 from './assets/pic4.png';
import pic5 from './assets/pic5.png';
import pic6 from './assets/pic6.png';
import pic7 from './assets/pic7.png';
import pic8 from './assets/pic8.png';
import './SpiritBound.css'

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const observers = [];
        const elements = document.querySelectorAll('.fade-in');
        
        elements.forEach((el, index) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if(entry.isIntersecting) {
                        setIsVisible(prev => ({ ...prev, [index]: true }));
                    }
                },
                { threshold: 0.1 }
            );
            observer.observe(el);
            observers.push(observer);
        });
        return () => observers.forEach(obs => obs.disconnect());
    }, []);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/SpiritBound.zip';
        link.download = 'SpiritBound.zip';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const gallery = [
        pic6, pic2, pic5, pic3, pic4, pic1,
    ]
    
    return (
        <div className="bg-zinc-950 text-gray-100 min-h-screen overflow-x-hidden">
            <nav className="fixed top-0 w-full z-50 bg-zinc-950/90 backdrop-blur-sm border-b border-red-900/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Ghost className="w-8 h-8 text-red-500 mr-3" />
                        <span className="title-font text-2xl text-red-500 glow-text">Spirit Bound</span>
                        </div>
                        
                        <div className="hidden md:flex space-x-8 heading-font">
                            <a href="#about" className="hover:text-red-500 ease-in-out duration-300">
                                About
                            </a>
                            <a href="#features" className="hover:text-red-500 ease-in-out duration-300">
                                Features
                            </a>
                            <a href="#gallery" className="hover:text-red-500 ease-in-out duration-300">
                                Gallery
                            </a>
                            <button onClick={handleDownload} className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg glow-border ease-in-out duration-300 cursor-pointer">
                                Download
                            </button>
                        </div>

                        <button  className="md:hidden text-red-500"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden bg-zinc-900 border-t border-red-900/20">
                        <div className="px-4 py-4 space-y-3 heading-font">
                            <a href="#about" className="block hover:text-red-500 transition-colors" 
                            onClick={() => setIsMenuOpen(false)}>
                                About
                            </a>
                            <a href="#features" className="block hover:text-red-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
                                Features
                            </a>
                            <a href="#gallery" className="block hover:text-red-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
                                Gallery
                            </a>
                            <button onClick={handleDownload} className="w-full bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg ease-in-out duration-300">
                                Download Game
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient from-zinc-950 via-red-950/20 to-zinc-950"></div>
                <div className="absolute inset-0 parallax"
                style={{
                    backgroundImage: 'url(https://thumb.ac-illust.com/ca/ca65aa1edd8595e53a6ae4b5db438fa4_t.jpeg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.3
                }}
                ></div>
                
                <div className="absolute inset-0 mist"></div>
                
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <div className="mb-8">
                        <Ghost className="w-20 h-20 text-red-500 mx-auto mb-6 glow-text" />
                    </div> 
                    <h1 className="title-font text-7xl md:text-9xl mb-6 glow-text text-red-500 animate-pulse">
                        Spirit Bound
                    </h1>
                    <p className="body-font text-2xl md:text-3xl mb-8 text-gray-300">
                        A 2D Filipino Horror RPG Inspired by Myths and Legends
                    </p> 
                    <p className="body-font text-lg md:text-xl mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Journey through cursed lands, battle mythological creatures, and save your village from an ancient evil
                    </p> 
                    <button onClick={handleDownload}
                        className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg text-xl heading-font transition-all ease-in-out duration-300 cursor-pointer transform hover:scale-105 glow-border inline-flex items-center gap-3">
                        <Download className="w-6 h-6 group-hover:animate-bounce" />
                        Download Game
                    </button>
                </div>

                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-red-500 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-red-500 rounded-full mt-2"></div>
                    </div>
                </div>
            </section>

            <section id="about" className="py-24 px-4 relative">
                <div className="absolute inset-0 bg-gradient from-zinc-950 via-red-950/10 to-zinc-950"></div>
    
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className={`fade-in ${isVisible[0] ? 'visible' : ''} text-center mb-16`}>
                        <h2 className="heading-font text-5xl md:text-6xl mb-6 text-red-500 glow-text">The Story</h2>
                        <div className="w-24 h-1 bg-red-500 mx-auto glow-border"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className={`fade-in ${isVisible[1] ? 'visible' : ''}`}>
                            <div className="bg-zinc-900/50 p-8 rounded-lg border border-red-900/30 backdrop-blur">
                                <p className="body-font text-xl leading-relaxed mb-6 text-gray-300">
                                    You are a young warrior returning to your home village, only to find it consumed by a mysterious curse cast by a vengeful 
                                    <span className="text-red-500 font-semibold"> mangkukulam</span>.
                                </p>
                                <p className="body-font text-xl leading-relaxed mb-6 text-gray-300">
                                    The curse has transformed many villagers into creatures drawn from Philippine myths, while your father lies in a coma, slowly succumbing to the dark magic. Time is running out.
                                </p>
                                <p className="body-font text-xl leading-relaxed text-gray-300">
                                    Battle corrupted beings like the <span className="text-red-500 font-semibold">Aswang</span>, <span className="text-red-500 font-semibold">Tikbalang</span>, and <span className="text-red-500 font-semibold">Sigbin</span>. Uncover the source of the affliction and restore peace before darkness consumes everything you love.
                                </p>
                            </div>
                        </div>
                        
                        <div className={`fade-in ${isVisible[2] ? 'visible' : ''}`}>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition ease-in-out duration-300"></div>
                                <div className="relative bg-zinc-900 p-4 rounded-lg">
                                    <div className="aspect-video bg-zinc-800 rounded flex items-center justify-center">
                                        <img src={homepic} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="features" className="py-24 px-4 relative">
                <div className="absolute inset-0 bg-zinc-950"></div>
                
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className={`fade-in ${isVisible[3] ? 'visible' : ''} text-center mb-16`}>
                        <h2 className="heading-font text-5xl md:text-6xl mb-6 text-red-500 glow-text">Key Features</h2>
                        <div className="w-24 h-1 bg-red-500 mx-auto glow-border"></div>
                    </div>
                
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                        { icon: Sword, title: "Story-Driven Gameplay", desc: "Immersive narrative that unfolds through exploration and choice" },
                        { icon: Ghost, title: "Filipino Mythology", desc: "Encounter authentic creatures from Philippine folklore" },
                        { icon: Heart, title: "Emotional Journey", desc: "A deeply personal quest to save your family and village" },
                        { icon: Shield, title: "2D Combat & Exploration", desc: "Engaging battle system with strategic depth" }
                        ].map((feature, idx) => (
                        <div 
                            key={idx}
                            className={`fade-in ${isVisible[4 + idx] ? 'visible' : ''} bg-zinc-900/50 p-8 rounded-lg border border-red-900/30 hover:border-red-500/50 transition-all hover:transform hover:scale-105 backdrop-blur`}
                        >
                            <feature.icon className="w-12 h-12 text-red-500 mb-4 glow-text" />
                            <h3 className="heading-font text-2xl mb-3 text-red-500">{feature.title}</h3>
                            <p className="body-font text-gray-400 text-lg leading-relaxed">{feature.desc}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="gallery" className="py-24 px-4 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-red-950/10 to-zinc-950"></div>
                
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className={`fade-in ${isVisible[8] ? 'visible' : ''} text-center mb-16`}>
                        <h2 className="heading-font text-5xl md:text-6xl mb-6 text-red-500 glow-text">Gallery</h2>
                        <div className="w-24 h-1 bg-red-500 mx-auto glow-border"></div>
                    </div>
                
                    <div className="grid md:grid-cols-3 gap-6">
                        {gallery.map((img, idx) => (
                            <div key={idx} className={`fade-in ${isVisible[9 + idx] ? 'visible' : ''} relative group`}>
                                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg blur opacity-25 group-hover:opacity-50 ease-in-out duration-300"></div>
                                <div className="relative bg-zinc-900 p-4 rounded-lg">
                                    <div className="aspect-video bg-zinc-800 rounded flex items-center justify-center">
                                        <img
                                            src={img}
                                            alt={`Screenshot ${idx + 1}`}
                                            className="w-full h-full object-cover rounded"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                
                    <div className={`fade-in ${isVisible[13] ? 'visible' : ''} mt-16 text-center`}>
                        <div className="bg-zinc-900/50 p-12 rounded-lg border border-red-900/30 backdrop-blur">
                            <p className="heading-font text-2xl text-red-500 mb-4">Ready to Begin Your Journey?</p>
                            <p className="body-font text-lg text-gray-400 mb-8">
                                Download Spirit Bound now and experience Filipino horror like never before
                            </p>
                            <button onClick={handleDownload}
                                className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg text-xl heading-font transition-all ease-in-out duration-300 cursor-pointer transform hover:scale-105 glow-border flex items-center gap-3">
                                <Download className="w-6 h-6" />
                                Download Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-zinc-950 border-t border-red-900/20 py-12 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="flex items-center justify-center mb-6">
                        <Ghost className="w-8 h-8 text-red-500 mr-3" />
                        <span className="title-font text-3xl text-red-500 glow-text">Spirit Bound</span>
                    </div> 
                    <p className="body-font text-gray-400 text-lg mb-4">
                        Developed with the Godot Engine
                    </p>
                    <p className="heading-font text-gray-500">
                        © 2025 Spirit Bound. All Rights Reserved.
                    </p>
                    <p className="body-font text-gray-600 mt-4 text-sm">
                        Promoting Filipino culture through interactive storytelling
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default App
