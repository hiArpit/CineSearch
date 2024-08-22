/*
 * MIT License
 * 
 * Copyright (c) 2024 Arpit Negi
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React, { useEffect, useState } from "react";
import noImage from "../images/no-image.jpg";

const MovieCard = ({ movie }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setIsFavorite(favorites.find(favMovie => favMovie.id === movie.id));
    }, [])

    const handleFavorites = () => {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        if(favorites.find(favMovie => favMovie.id === movie.id)){
            favorites = favorites.filter(favMovie => favMovie.id !== movie.id);
            setIsFavorite(false);
        }
        else{
            favorites.push(movie);
            setIsFavorite(true);
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    return (
        <div className="bg-white rounded-lg border shadow-md h-auto overflow-hidden transition-transform transform hover:scale-105 hover:border-blue-500">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} 
            onError={(e) => {
                e.target.onerror = null;
                e.target.src = noImage;
            }} 
            className="w-full h-60 sm:h-80 object-cover"/>
            <div className="p-2">
                <h2 className="text-lg font-bold overflow-hidden text-ellipsis whitespace-nowrap">{movie.title}</h2>
                <p className="text-sm text-gray-600">{movie.release_date}</p>
                <div className="flex justify-center mt-4">
                    <button onClick={handleFavorites} style={{ backgroundColor:"#032541"}} className="text-white p-1 rounded">
                        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                    </button>
                </div>
                
            </div>
        </div>
    );
};

export default MovieCard;