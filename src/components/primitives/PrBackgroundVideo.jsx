const PrBackgroundVideo = () => {
    return (
        <video autoPlay loop muted className="bg-video">
            <source
                src={require("../../assets/videos/first-screen-video.mp4")}
                type="video/mp4"
            />
        </video>
    );
};

export default PrBackgroundVideo;
