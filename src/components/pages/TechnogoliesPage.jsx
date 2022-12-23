import html from "../../assets/images/technologies/html.png";
import scss from "../../assets/images/technologies/sass.png";
import js from "../../assets/images/technologies/js.png";
import react from "../../assets/images/technologies/react.png";
import redux from "../../assets/images/technologies/redux.png";
import reactRouter from "../../assets/images/technologies/react-router.png";
import npm from "../../assets/images/technologies/npm.png";
import git from "../../assets/images/technologies/git.png";

const TechnogoliesPage = () => {
    const technologiesList = [
        { name: "HTML", icon: html },
        { name: "SCSS ", icon: scss },
        { name: "JS ", icon: js },
        { name: "React ", icon: react },
        { name: "Redux ", icon: redux },
        { name: "react-router ", icon: reactRouter },
        { name: "npm ", icon: npm },
        { name: "Git ", icon: git },
    ];
    return (
        <div className="tech-page">
            <h1>Used Technologies</h1>
            <ul>
                {technologiesList.map((tech) => (
                    <li>
                        <img src={tech.icon} alt={tech.name + " Logo"} />
                        <h4>{tech.name}</h4>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TechnogoliesPage;
