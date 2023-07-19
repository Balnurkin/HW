import style from './HeaderNavbarButtons.module.css'
import { CiSearch } from 'react-icons/ci'
import { GiShoppingCart } from 'react-icons/gi'
import { PiUserLight } from 'react-icons/pi'

function HeaderNavbarButtons(){
    return(
        <div style={{ height: '27px' }}>
            <button className={style.button__style}><CiSearch/></button>
            <button className={style.button__style}><GiShoppingCart/></button>
            <button className={style.button__style}><PiUserLight/></button>
        </div>
    )
}

export default HeaderNavbarButtons