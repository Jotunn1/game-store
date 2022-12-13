import PrButtonCta from "./PrButtonCta";

const PrButtonsRow = () => {
    const btnsList = [{ icon: 'enter', btnText: 'start' },
    { icon: 'dice', btnText: 'drop dice' },
    { icon: 'githublogo-dark', btnText: 'gitHub', outerLink: 'https://github.com/Jotunn1' },
    { icon: 'linkedin', btnText: 'linkedIn', outerLink: 'www.linkedin.com/in/ihor-bozhuk-aba4451a8' }]
    return (
        <div className="blured-bg btns-row">
            {btnsList.map((el, index) => el.outerLink ? <PrButtonCta key={index} icon={el.icon} btnText={el.btnText} link={el.outerLink} /> : <PrButtonCta key={index} icon={el.icon} btnText={el.btnText} />)}
        </div>
    )
}

export default PrButtonsRow;