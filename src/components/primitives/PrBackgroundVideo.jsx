import desktopBgVideo from "../../assets/videos/desktop-bg-video.mp4";
import mobileBgVideo from "../../assets/videos/mobile-bg-video.mp4";

const PrBackgroundVideo = () => {
    return (
        <>
            <video autoPlay loop muted className="bg-video mobile">
                <source src={mobileBgVideo} type="video/mp4" />
            </video>
            <video autoPlay loop muted className="bg-video desktop">
                <source src={desktopBgVideo} type="video/mp4" />
            </video>
        </>
    );
};

export default PrBackgroundVideo;
