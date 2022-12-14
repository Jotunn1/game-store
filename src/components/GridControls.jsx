import { ReactComponent as GridLogo } from "../assets/images/grid.svg";
import { ReactComponent as ColumnLogo } from "../assets/images/columns.svg";

export const GridControls = ({ setGamesLayout }) => {
    return (
        <div className="grid">
            <button onClick={() => setGamesLayout('grid')}>
                <GridLogo />
            </button>
            <button onClick={() => setGamesLayout('column')}>
                <ColumnLogo />
            </button>
        </div>
    )
}
