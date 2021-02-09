import React from 'react';

const YOUTUBE_URL = 'https://www.youtube.com/embed/';

const Video = (props) => {
    const videoId = props.videoId;
    return (
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={`${YOUTUBE_URL}${videoId}`} />
        </div>
    )
}

export default Video;