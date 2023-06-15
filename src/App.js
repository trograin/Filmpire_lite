import React from "react";
import { useEffect } from "react";

// 2be764cd

const API_URL = 'http://www.omdbapi.com/?apikey=2be764cd';

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data);
    }

    useEffect(() => {

    }, []);

    return (
        <div>App</div>
    );
}

export default App