import React from "react";
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import Ticker from 'react-ticker'


const VideoFooter=({channel,description})=>{
    return(
        <div className="videoFooter">
            <div className="videoFooterText">
                <h3>{channel}</h3>
                <p>{description}</p>
                {/* <div className="videoFooterTicker">
                    <MusicNoteIcon classname="videoFooterIcon"/>
                   {/*} <Ticker mode="smooth">
                        {
                            ({index})=>(
                                <>
                                <p>I am Windows PC</p>
                                </>
                            )
                        }
                    </Ticker>
                </div> */}
            </div>
            <img className="videoFooterRecord" src="https://static.thenounproject.com/png/934821-200.png" alt="video footer"/>
        </div>
    )
}
export default VideoFooter