import { createContext, useState } from "react";

import {
    iDataTournament,
    iTournamentContext,
    iTournamentProvider,
    tReadingTournament,
} from "../types/TournamentContextTypes";

export const TournamentContext = createContext({} as iTournamentContext);

export const TournamentProvider = ({ children }: iTournamentProvider) => {
    const [allTournaments, setAllTournaments] = useState(
        [] as iDataTournament[]
    );

    // Dashboard page conditional rendering

    const [readingTournament, setReadingTournament] = useState(
        false as tReadingTournament
    );
    const [dashboardPage, setDashboardPage] = useState(0);

    return (
        <TournamentContext.Provider
            value={{
                readingTournament,
                setReadingTournament,
                dashboardPage,
                setDashboardPage,
                allTournaments,
                setAllTournaments,
            }}
        >
            {children}
        </TournamentContext.Provider>
    );
};
