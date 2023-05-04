import { useEffect, useState } from "react";
import style from "./CheckboxCustomized.module.css";

interface CheckboxCustomizedProps{
    setCheckd : (setCheckd: React.SetStateAction<boolean> ) => void;
}

const CheckboxCustomized = ({setCheckd} : CheckboxCustomizedProps) =>{    

    const [inputCheck, setInputCheck] = useState(false);

    useEffect(() =>{
        setCheckd(inputCheck);
    }, [inputCheck] )

    return(
        <label htmlFor="checkbox" className={style.label}>
            <input type="checkbox" id="checkbox" name="checkbox" className={style.label__input} checked={inputCheck} onChange={(event) => setInputCheck(event.target.checked)} />
            <span className={style.label__button}></span>
        </label>
    )
}
export default CheckboxCustomized;