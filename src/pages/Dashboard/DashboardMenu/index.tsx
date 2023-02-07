import { StyledDashboardMenu } from "./style";
import { FaSignOutAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";
import { TournamentContext } from "../../../context/TournamentContext";
import { UserContext } from "../../../context/UsersContext";

export const DashboardMenu = () => {
    const { dashboardPage, setDashboardPage } = useContext(TournamentContext);

    function isSelected(pages: number[] | number) {
        if (typeof pages === "number") {
            return dashboardPage === pages ? "selected" : "";
        } else {
            return pages.includes(dashboardPage) ? "selected" : "";
        }
    }

    const { logoutDashboard } = useContext(UserContext);

    return (
        <StyledDashboardMenu>
            <figure>
                <img src="./ball.png" alt="logo" />
                <h1 style={{ textAlign: "center" }}>NDM</h1>
                <div>
                    <img src="./ball.png" alt="ball" />
                </div>
            </figure>
            <div>
                <GiHamburgerMenu />
                <div>
                    <nav>
                        <button
                            className={isSelected([14, 15, 16, 17, 19])}
                            onClick={() => setDashboardPage(14)}
                        >
                            {" "}
                            Seção de times{" "}
                        </button>
                    </nav>
                    <button onClick={() => logoutDashboard()}>
                        <FaSignOutAlt />
                        HOME
                    </button>
                </div>
            </div>
        </StyledDashboardMenu>
    );
};
