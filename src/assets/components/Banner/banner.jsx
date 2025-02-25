import React, { useEffect, useState} from 'react';
import axios from "../utils/Axios"
import request from "../utils/Request"
import "./Banner.css"

const Banner = () => {
    const [Movie, setMovie] = useState({});


    useEffect(() => {
        (async () => {
            try {
                const requests = await axios.get(request. fetchScienceFiction) 
                console.log(requests)
                setMovie(requests.data.results[Math.floor(Math.random() * requests.data.results.length)]);
            } catch (error) {
                console.log("Error:", error);
            }
        })();
    }, []);
    function truncate(str, n ){
        return str?.length > n ? str.substr(0, n-1) + '...' : str;
    }

    return (
        <div
            className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(https://image.tmdb.org/t/p/original${Movie?.backdrop_path})`, // Use backdrop_path
                backgroundPosition: "center",
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className='banner_content'>
                <h1 className='banner_title'>
                    {Movie?.title || Movie?.name || Movie?.original_name}
                </h1>
                <div className='banner_btn'>
                    <button className='banner_btn_play'>Play</button>
                    <button className='banner_btn_my'>My List</button>
                </div>
                <h1 className='banner_des'>{truncate(Movie?.overview, 150)}</h1>
            </div>
            <div className='banner_fadebottom' />
        </div>
    );
};

export default Banner;