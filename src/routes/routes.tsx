import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/Dashboard";
import Homepage from "../pages/Homepage";
import { TournamentProvider } from "../context/TournamentContext";
import { TeamProvider } from "../context/TeamContext";
import { MatchesProvider } from "../context/MatchesContext";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<Homepage />} />

            <Route
                path="/dashboard"
                element={
                    <MatchesProvider>
                        <TournamentProvider>
                            <TeamProvider>
                                <DashboardPage />
                            </TeamProvider>
                        </TournamentProvider>
                    </MatchesProvider>
                }
            />
        </Routes>
    );
};
