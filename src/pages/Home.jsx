import React, {useState, useEffect} from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

const api_key = import.meta.env.VITE_TMDB_API_KEY;

const Home = ()=>{
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(1);
    const [genre, setGenre] = useState("");
    const [rating, setRating] = useState("");
    const [releaseYear, setReleaseYear] = useState("");

    useEffect(() => {
        const fetchMovies = async () => {
            if(searchTerm){
                const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: api_key,
                        page: page,
                        query: searchTerm,
                    }
                })
                setMovies(prevMovies => [...prevMovies, ...response.data.results]);
            }
            else{
                const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
                    params: {
                        api_key: api_key,
                        page: page,
                        with_genres: genre,
                        primary_release_year: releaseYear,
                        vote_average_gte: rating
                    }
                });
                setMovies(prevMovies => [...prevMovies, ...response.data.results]);
            }
            
        };

        fetchMovies();
    }, [page, searchTerm, genre, rating, releaseYear]);
    
    const scroller = () => {
        if(window.innerHeight + document.documentElement.scrollTop + 300 >= document.documentElement.scrollHeight){
            setPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scroller);
        return () => window.removeEventListener("scroll", scroller);
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 style={{ color:"#032541" }} className="text-3xl font-bold mb-4">Popular Movies</h1>

            <div className="flex justify-between mb-4 mx-auto max-w-full">
                <div className="flex flex-wrap gap-4 w-full justify-center">
                    <div className="flex-1 min-w-[200px] max-w-xs">
                        <label className="block mb-1">Search:</label>
                        <input 
                            type="text" 
                            className="w-full h-10 mb-4 p-2 border border-gray-400 rounded"
                            placeholder="Search for a movie..."
                            value={searchTerm}
                            onChange={(e) => {
                                setMovies([]);
                                setPage(1);
                                setSearchTerm(e.target.value);
                                setGenre("");
                                setRating("");
                                setReleaseYear("");
                            }
                        }
                        />
                    </div>

                    <div className="flex-1 min-w-[200px] max-w-xs">
                        <label className="block mb-1">Genre:</label>
                        <select
                            value={genre}
                            onChange={(e) => {
                                setMovies([]);
                                setPage(1);
                                setSearchTerm("");
                                setGenre(e.target.value)
                            }
                            }
                            className="w-full h-10 mb-4 p-2 border border-gray-400 rounded"
                        >
                            <option value="">All Genres</option>
                            <option value="28">Action</option>
                            <option value="12">Adventure</option>
                            <option value="35">Comedy</option>
                            <option value="80">Crime</option>
                            <option value="18">Drama</option>
                            <option value="27">Horror</option>
                            <option value="9648">Mystery</option>
                            <option value="10749">Romance</option>
                            <option value="878">Science Fiction</option>
                            <option value="53">Thriller</option>

                        </select>
                    </div>

                    <div className="flex-1 min-w-[200px] max-w-xs">
                        <label className="block mb-1">Release Year:</label>
                        <input 
                            type="number" 
                            className="w-full h-10 mb-4 p-2 border border-gray-400 rounded"
                            placeholder="Enter the Release Year..."
                            value={releaseYear}
                            onChange={(e) => {
                                setMovies([]);
                                setPage(1);
                                setSearchTerm("");
                                setReleaseYear(e.target.value)
                            }
                        }
                        />
                    </div>

                    <div className="flex-1 min-w-[200px] max-w-xs">
                        <label className="block mb-1">Rating:</label>
                        <select
                            value={rating}
                            onChange={(e) => {
                                setMovies([]);
                                setPage(1);
                                setSearchTerm("");
                                setRating(e.target.value)
                            }
                            }
                            className="w-full h-10 mb-4 p-2 border border-gray-400 rounded"
                        >
                            <option value="">All Ratings</option>
                            <option value="7">7+</option>
                            <option value="8">8+</option>
                            <option value="9">9+</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    );
};

export default Home;