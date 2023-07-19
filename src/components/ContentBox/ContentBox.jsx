import style from './ContentBox.module.css'

function ContentBox({src, title, price}){
    return(
        <div className={style.content__box}>
            <div style={{ display:'flex', flexDirection:'column', justifyContent:'center' }}>
                <img className={style.items__image} src={src} alt="" />
                <p className={style.content__title}>{title}</p>
                <p className={style.content__price}>{price}</p>
            </div>
            <div className={style.content__buttons}>
                <div className={style.button__style}>
                    <img src="./img/9.svg" alt="" />
                </div>
                <div className={style.button__style}>
                    <img src="./img/10.svg" alt="" />
                </div>
                <div className={style.button__style}>
                    <img src="./img/11.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ContentBox