import PrButtonCta from "./primitives/PrButtonCta";

const NavigationList = () => {
    const navList = [
        { icon: "game", btnText: "game page" },
        { icon: "404", btnText: "404 page" },
        { icon: "placeholder", btnText: "placeholder" },
        {
            icon: "git",
            btnText: "commit Log",
            outerLink: "https://github.com/Jotunn1/game-store/commits/main",
        },
        { icon: "react-logo", btnText: "technologies" },
        {
            icon: "githublogo-dark",
            btnText: "source code",
            outerLink: "https://github.com/Jotunn1/game-store",
        },
        {
            icon: "instagram",
            btnText: "instagram",
            outerLink: "https://www.instagram.com/ihor_bozhuk/",
        },
        {
            icon: "telegram",
            btnText: "contact me",
            outerLink: "https://t.me/Jotunn1",
        },
    ];
    return (
        <div className="nav-list blured-bg">
            <h2>Navigation</h2>
            <ul>
                {navList.map((el, index) =>
                    el.outerLink ? (
                        <PrButtonCta
                            key={index}
                            icon={el.icon}
                            btnText={el.btnText}
                            link={el.outerLink}
                        />
                    ) : (
                        <PrButtonCta
                            key={index}
                            icon={el.icon}
                            btnText={el.btnText}
                        />
                    )
                )}
            </ul>
        </div>
    );
};

export default NavigationList;
