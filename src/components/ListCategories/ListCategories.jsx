import style from './ListCategories.module.css'

function ListCategories({ src, title }){
    return (
        <div className={style.categories__catalog}>
            <img src={src} alt="" />
            <p>{title}</p>
        </div>
    )
}

export default ListCategories