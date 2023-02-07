import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import {
    iDataNewPlayer,
    iDataNewTeam,
    iPlayerData,
    iTeamContext,
    iTeamData,
    iTeamProvider,
} from "../types/TeamContextTypes";
import { TournamentContext } from "./TournamentContext";

import { UserContext } from "./UsersContext";

export const TeamContext = createContext({} as iTeamContext);

export const TeamProvider = ({ children }: iTeamProvider) => {
    const { setDashboardPage } = useContext(TournamentContext);
    const [disableButton, setDisableButton] = useState(false);
    const [teamData, setTeamData] = useState({} as iTeamData);
    const [playersData, setPlayersData] = useState<iPlayerData[]>([]);
    const { setLoading } = useContext(UserContext);
    const url = "https://ndm-ihxf.onrender.com/";

    const [teamId, setTeamId] = useState<number>();

    useEffect(() => {
        if (teamId) {
            getPlayerTeam(teamId);
        }
    }, [teamId]);

    function createNewTeam(data: iDataNewTeam) {
        setDisableButton(true);

        axios
            .post(url + "teams", data)
            .then((response) => {
                setTeamId(response.data.id);

                setLoading(true);
                toast.success("Time criado com sucesso!");
                setDashboardPage(15);
            })
            .catch((err) => {
                console.log(err);

                toast.error("Ops...seu time não foi criado!");
            });

        setDisableButton(true);
        setLoading(false);
    }

    async function getPlayerTeam(teamId: number) {
        axios
            .get(`${url}players/teamId/${teamId}`)
            .then((response) => setTeamData(response.data));
    }

    async function updateTeam(data: iDataNewTeam) {
        try {
            setLoading(true);

            const requisition = await axios.patch(
                url + `teams/${teamId}`,
                data
            );
            if (requisition.status === 200) {
                toast.success("Alterações no time feitas com sucesso!");
                setDashboardPage(15);
            }
        } catch (err) {
            toast.error("Ops...algo deu errado!");
        } finally {
            setLoading(false);
        }
    }

    async function deleteTeam() {
        try {
            setLoading(true);
            await axios.delete(`${url}teams/${teamId}`);
        } catch (err) {
            toast.error("Ops...algo deu errado!");
        } finally {
            setLoading(false);
        }
    }

    async function getAllTeams() {
        try {
            await axios.get(`${url}teams`);
        } catch (err) {
            toast.error("Ops...algo deu errado!");
        }
    }

    async function createNewPlayer(data: iDataNewPlayer) {
        await getPlayersFromATeam();
        let checkPosition = playersData.filter((e) => {
            return e.position === data.position;
        });

        let checkNumber = playersData.filter((e) => {
            return e.number === data.number;
        });

        if (checkPosition.length > 0) {
            toast.error("Já existe um jogador nessa posição!");
            return;
        }

        if (checkNumber.length > 0) {
            toast.error("Já existe um jogador com esse número!");
            return;
        }

        data.teamId = teamId!;

        setDisableButton(true);
        try {
            setLoading(true);

            const requisition = await axios.post(url + "players", data);
            if (requisition.status === 201) {
                toast.success("Jogador criado com sucesso!");
                setDashboardPage(16);
            }
        } catch (err) {
            toast.error("Ops...algo deu errado!");
        } finally {
            setDisableButton(true);
            setLoading(false);
        }
    }

    async function deletePlayer(playerId: number) {
        try {
            await axios.delete(url + `players/${playerId}`);
            await getPlayersFromATeam();
            toast.success("Jogador excluído com sucesso!");
        } catch (err) {
            toast.error("Ops...algo deu errado!");
        }
    }

    async function getPlayersFromATeam() {
        try {
            const requisition = await axios.get(
                `${url}players/teamId/${teamId}`
            );
            setPlayersData(requisition.data);
        } catch (err) {
            toast.error("Ops...algo deu errado!");
        }
    }

    return (
        <TeamContext.Provider
            value={{
                createNewTeam,
                updateTeam,
                deleteTeam,
                getAllTeams,
                createNewPlayer,
                deletePlayer,
                getPlayersFromATeam,
                disableButton,
                teamId,
                teamData,
                setTeamData,
                playersData,
            }}
        >
            {children}
        </TeamContext.Provider>
    );
};
