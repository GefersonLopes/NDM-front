import FooterHome from "../../components/FooterHome";
import Header from "../../components/Header";
import { DivHomeCenter, FigureBackground, LinkToRegister } from "./style";

const Homepage = () => {
    return (
        <FigureBackground>
            <Header />
            <DivHomeCenter>
                <h2>Crie seu campeonato agora</h2>
                <LinkToRegister to="/dashboard">VER O PROJETO</LinkToRegister>
            </DivHomeCenter>
            <FooterHome />
        </FigureBackground>
    );
};

export default Homepage;
