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

import React, {useState, useEffect} from "react"
import MovieCard from "../components/MovieCard"
import NoFavorites from "../components/noFavorites";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const myFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(myFavorites);
    }, [])

    return (
        <div className="container mx-auto p-4">
            {favorites.length === 0 ? (
                <NoFavorites />
            ) : (
                <>
                    <h1 style={{ color: "#032541"}} className="text-3xl font-bold mb-4">My Favorite Movies</h1>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {favorites.map(movie => (
                            <MovieCard key={movie.id} movie={movie}/>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Favorites;