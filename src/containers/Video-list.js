import React from 'react';
import VideoListItem from '../components/video-list-item'

const VideoList = (props) => {

    const movieList = props.movieList;

    return (
        <div>
            <ul>
                {
                    movieList.map(movie => {
                        return <VideoListItem key={movie.id} movie={movie} callBack={receiveFilm}/>
                    })
                }
            </ul>
        </div>
    )

    function receiveFilm(movie) {
        props.callBack(movie);
        console.log('----------')
        console.log('------fdsfdfsfs-', movie)
        console.log('----------')
    }
}

export default VideoList;