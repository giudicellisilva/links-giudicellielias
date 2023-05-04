import { useState } from "react";
import Link from "components/Link";
import style from "./Home.module.css";
import Perfil from "components/Perfil";
import git from "img/github.svg";
import portifolioImg from "img/g.png";
import linkedin from "img/linkedin.svg";
import CheckboxCustomized from "components/CheckboxCustomized";


const Home = () =>{

    const [checkd, setCheckd] = useState(false);

    return(
        <div className={`${style.home} ${checkd ? style.darkMode : "" }`}>
            <CheckboxCustomized setCheckd={setCheckd} />
            <Perfil />
            <div className={style.home__links}>
                <Link href="https://giudicellisilva.github.io/giudicellielias/" img={portifolioImg}>Portfólio</Link>
                <Link href="https://github.com/giudicellisilva" img={git}>GitHub</Link>
                <Link href="https://www.linkedin.com/in/giudicelli-elias-48b339215/" img={linkedin  }>Linkedin</Link>
            </div>
        </div>
    )
}

export default Home;