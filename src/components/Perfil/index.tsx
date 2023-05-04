import style from "./Perfil.module.css";
import imgPerfil from "./perfil.jpg";

const Perfil = () =>{

    return(
        <div className={style.perfil} >
            <img className={style.perfil__img} src={imgPerfil} />
            <h2 className={style.perfil__title} >Giudicelli Elias</h2>
        </div>
    )
}

export default Perfil;