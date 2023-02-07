import { createContext, useState } from "react";

import {
    iDataTournament,
    iTournamentContext,
    iTournamentProvider,
    tReadingTournament,
} from "../types/TournamentContextTypes";

export const TournamentContext = createContext({} as iTournamentContext);

export const TournamentProvider = ({ children }: iTournamentProvider) => {
    const [myTournaments, setMyTournaments] = useState([] as iDataTournament[]);
    const [allTournaments, setAllTournaments] = useState(
        [] as iDataTournament[]
    );
    const [tournamentData, setTournamentData] = useState({} as iDataTournament);

    // Dashboard page conditional rendering
    const [disableButton, setDisableButton] = useState(false);
    const [readingTournament, setReadingTournament] = useState(
        false as tReadingTournament
    );
    const [dashboardPage, setDashboardPage] = useState(0);

    return (
        <TournamentContext.Provider
            value={{
                tournamentData,
                disableButton,

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
