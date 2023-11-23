import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import coffeLogoImg from '../../assets/Logo.svg'
import { MapPin, ShoppingCart} from 'phosphor-react'
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <div className="container">
                <NavLink to="/">
                    <img src={coffeLogoImg} />
                </NavLink>

                <HeaderButtonsContainer>
                    <HeaderButton variant="purple">
                        <MapPin size={20} weight="fill" />
                        Porto Alegre, RS
                    </HeaderButton>

                    <NavLink to="/completeOrder">
                        <HeaderButton variant="yellow">
                            <ShoppingCart size={20} weight="fill" />
                        </HeaderButton>
                    </NavLink>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    )
}