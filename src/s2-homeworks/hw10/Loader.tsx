import s from './Loader.module.css'
import svg from './bll/Ellipse 4.svg'


export const Loader = () => {
    return (
        <div className={s.loader}>
            <img src={svg}/>
        </div>
    )
}

