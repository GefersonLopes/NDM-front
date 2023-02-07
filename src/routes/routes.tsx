import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/Dashboard";
import Homepage from "../pages/Homepage";
import { TournamentProvider } from "../context/TournamentContext";
import { TeamProvider } from "../context/TeamContext";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<Homepage />} />

            <Route
                path="/dashboard"
                element={
                    <TournamentProvider>
                        <TeamProvider>
                            <DashboardPage />
                        </TeamProvider>
                    </TournamentProvider>
                }
            />
        </Routes>
    );
};
