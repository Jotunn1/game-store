import desktopBgVideo from "../../assets/videos/desktop-bg-video.mp4";
import mobileBgVideo from "../../assets/videos/mobile-bg-video.mp4";

const PrBackgroundVideo = () => {
    // const preloaderHandler = (e) => {
    //     console.log(e);
    //     isPreloaderActive.current = false;
    //     console.log(isPreloaderActive.current);
    // };

    return (
        <>
            <video autoPlay loop muted className="bg-video mobile">
                <source src={mobileBgVideo} type="video/mp4" />
            </video>
            <video
                autoPlay
                loop
                muted
                className="bg-video desktop"
                // onLoadedData={(e) => preloaderHandler(e)}
            >
                <source src={desktopBgVideo} type="video/mp4" />
            </video>
        </>
    );
};

export default PrBackgroundVideo;
