const Preloader = ({ isActive }) => {
    console.log(isActive, "preloader");
    return (
        <div className={"preloader " + (isActive ? "active" : "hide")}>
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
