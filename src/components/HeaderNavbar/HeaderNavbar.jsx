
import Container from "../Container/Container";
import HeaderNavbarButtons from "../HeaderNavbarButtons/HeaderNavbarButtons";
import HeaderNavbarLogo from "../HeaderNavbarLogo/HeaderNavbarLogo";
import HeaderNavbarMenu from "../HeaderNavbarMenu/HeaderNavbarMenu";


function HeaderNavbar (){
    return (
        <Container>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <HeaderNavbarLogo />
                <HeaderNavbarMenu />
                <HeaderNavbarButtons />
            </div>
            
        </Container>
    )
}

export default HeaderNavbar