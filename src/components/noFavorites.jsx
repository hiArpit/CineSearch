import React from "react";
import noFavorite from "../images/no-favorites.png";

const NoFavorites = () => {
    return (
            <div className="flex flex-col items-center justify-center p-4">
                <img src={noFavorite} alt="No Favorites" className="w-64 h-64 mb-4 object-cover"/>
                <p className="text-lg text-gray-600">You've no Favorites!</p>
            </div>
    )
}

export default NoFavorites;