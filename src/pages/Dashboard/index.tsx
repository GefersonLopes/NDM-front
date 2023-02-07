import { useContext } from "react";
import { CreatePlayer } from "../../components/CreatePlayer";
import { CreateTeam } from "../../components/CreateTeam";
import { EditTeam } from "../../components/EditTeam";
import { MyTeamBlank } from "../../components/MyTeamBlank";
import { MyTeamDetails } from "../../components/MyTeamDetails";
import { MyTeamPlayers } from "../../components/MyTeamPlayers";
import { MyTeamPosition } from "../../components/MyTeamPosition";

import { TeamTournament } from "../../components/TeamTournament";

import { TournamentsView } from "../../components/TournamentsView";
import { Welcome } from "../../components/Welcome";

import { SubscriptionsProvider } from "../../context/SubscriptionsContext";
import { TournamentContext } from "../../context/TournamentContext";
import { DashboardMenu } from "./DashboardMenu";
import { StyledDashboard } from "./style";

export const DashboardPage = () => {
    const { dashboardPage } = useContext(TournamentContext);

    return (
        <StyledDashboard>
            <main>
                <DashboardMenu />
                <div>
                    <SubscriptionsProvider>
                        {dashboardPage === 0 && <Welcome />}
                        {dashboardPage === 3 && <TournamentsView />}
                        {dashboardPage === 7 && <TeamTournament />}
                        {dashboardPage === 14 && <MyTeamBlank />}
                        {dashboardPage === 15 && <MyTeamDetails />}
                        {dashboardPage === 16 && <MyTeamPlayers />}
                        {dashboardPage === 17 && <MyTeamPosition />}
                        {dashboardPage === 18 && <CreateTeam />}
                        {dashboardPage === 19 && <EditTeam />}
                        {dashboardPage === 20 && <CreatePlayer />}
                    </SubscriptionsProvider>
                </div>
            </main>
        </StyledDashboard>
    );
};
