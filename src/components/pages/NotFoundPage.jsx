import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import image404 from "../../assets/images/404.png";

export const NotFoundPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const navigateTimer = setTimeout(() => {
            navigate("browse");
        }, 7100);
        return () => clearTimeout(navigateTimer);
    }, []);

    return (
        <div className="error-page">
            <div>
                <img src={image404} alt="Not Found Warning" />
                <div>
                    <h2>
                        <span>{location.pathname}</span> is not available!
                    </h2>
                    <p>
                        The page you tried to access is not available. You will
                        be redirected to our browse section shortly.
                    </p>
                </div>
                <div className="progress-bar"></div>
            </div>
        </div>
    );
};
