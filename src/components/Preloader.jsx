// import { useLoading } from "../context/LoadingContext";

const Preloader = () => {
    // const { loading } = useLoading();
    return (
        // <div className={"preloader " + (loading ? "active" : "hide")}>
        <div className="preloader">
            <h2>Welcome to Game Store</h2>
            <div className="progress">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    );
};

export default Preloader;
