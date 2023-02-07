import { MainStyled, TeamDetails, TeamHeaderStyled } from "./style";
import editIcon from "../../img/edit_icon.svg";
import { useContext } from "react";
import { TournamentContext } from "../../context/TournamentContext";
import { useEffect } from "react";
import { api } from "../../services/api";
import { TeamContext } from "../../context/TeamContext";
import { ButtonRight } from "../../styles/Buttons/style";
import standard_team_shield from "../../img/standard_team_shield.png";

export const MyTeamDetails = () => {
    const { setDashboardPage } = useContext(TournamentContext);
    const { teamData, setTeamData, getPlayersFromATeam, playersData } =
        useContext(TeamContext);


    const { teamId } = useContext(TeamContext);

    useEffect(() => {
        async function getMyTeam() {
            try {
                const requisition = await api.get(`teams/${teamId}`);
                setTeamData(requisition.data);
            } catch (err) {
                console.error(err);
            }
        }

        getPlayersFromATeam();
        getMyTeam();
    }, []);

    return (
        <MainStyled>
            <ButtonRight onClick={() => setDashboardPage(16)}>
                {">"}
            </ButtonRight>
            <TeamHeaderStyled>
                <figure>
                    {teamData.logo !== "" ? (
                        <img src={teamData.logo} alt={teamData.name} />
                    ) : (
                        <img
                            src={standard_team_shield}
                            alt={teamData.name}
                        ></img>
                    )}
                </figure>
                <h2>{teamData.name}</h2>
                <button>
                    <img
                        src={editIcon}
                        alt="Editar Time"
                        onClick={() => setDashboardPage(19)}
                    />
                </button>
            </TeamHeaderStyled>
            <TeamDetails>
                <div>
                    <h4>
                        Quantidade de jogadores:{" "}
                        <span>{playersData.length}</span>
                    </h4>
                </div>
            </TeamDetails>
        </MainStyled>
    );
};
