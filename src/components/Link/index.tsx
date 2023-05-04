import style from "./Link.module.css";

interface LinkProps{
    children: string;
    href: string;
    img: string;

}

const Link = ({children, href, img} : LinkProps) =>{

    return (
        <a className={style.link} href={href} >
            <img className={style.link__img} src={img} />
            <h3 className={style.link__title}>{children}</h3>
        </a>
    )
}

export default Link;