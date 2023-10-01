import React, { useState } from "react";
import './VideoSideBar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

const VideoSideBar = ({ likes: initialLikes, shares, messages }) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(initialLikes);

    const handleLikeClick = () => {
        if (!liked) {
            setLikes(+likes + 1);
        } else {
            setLikes(+likes - 1);
        }
        setLiked(!liked);
    };

    return (
        <div className="videoSidebar">
            <div className="videoSidebarButton" onClick={handleLikeClick}>
                {liked ? <FavoriteIcon fontSize="large" /> : <FavoriteBorderIcon fontSize="large" />}
                <p>{likes}</p>
            </div>
            <div className="videoSidebarButton">
                <MessageIcon fontSize="large" />
                <p>{messages}</p>
            </div>
            <div className="videoSidebarButton">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    );
};

export default VideoSideBar;
