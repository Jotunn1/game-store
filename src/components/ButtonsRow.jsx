import { useSelector } from "react-redux";
import PrButtonCta from "./primitives/PrButtonCta";

const ButtonsRow = () => {
    const games = useSelector((state) => state.gamesList);

    const randomGameId = Math.floor(Math.random() * games.length);
    const btnsList = [
        { icon: "enter", btnText: "start", innerLink: "/browse" },
        {
            icon: "dice",
            btnText: "drop dice",
            innerLink: `/games/${randomGameId}`,
        },
        {
            icon: "githublogo-dark",
            btnText: "gitHub",
            outerLink: "https://github.com/Jotunn1",
        },
        {
            icon: "linkedin",
            btnText: "linkedIn",
            outerLink: "https://www.linkedin.com/in/ihor-bozhuk-aba4451a8/",
        },
    ];
    return (
        <ul className="blured-bg btns-row">
            {btnsList.map((el, index) =>
                el.outerLink ? (
                    <PrButtonCta
                        key={index}
                        icon={el.icon}
                        btnText={el.btnText}
                        outerLink={el.outerLink}
                    />
                ) : (
                    <PrButtonCta
                        key={index}
                        icon={el.icon}
                        btnText={el.btnText}
                        innerLink={el.innerLink}
                    />
                )
            )}
        </ul>
    );
};

export default ButtonsRow;
