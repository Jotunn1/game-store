import { useState } from "react";
import desktopBgVideo from "../../assets/videos/desktop-bg-video.mp4";
import mobileBgVideo from "../../assets/videos/mobile-bg-video.mp4";

const PrBackgroundVideo = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const videoLoadHandler = () => {
        setIsVideoLoaded(true);
    };
    return (
        <div
            className={
                "video-wrapper " + (isVideoLoaded ? "loaded" : "placeholder")
            }
        >
            <video autoPlay loop muted className="bg-video mobile">
                <source src={mobileBgVideo} type="video/mp4" />
            </video>
            <video
                autoPlay
                loop
                muted
                className="bg-video desktop"
                onLoadedData={() => videoLoadHandler()}
            >
                <source src={desktopBgVideo} type="video/mp4" />
            </video>
        </div>
    );
};

export default PrBackgroundVideo;
