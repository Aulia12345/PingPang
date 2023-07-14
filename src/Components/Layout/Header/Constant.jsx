import { NavLink } from "react-router-dom";

const navStyles = ({ isActive }) => {
    return {
        fontWeight: isActive ? 'bold' : 'normal',
    }
}

export const MENU_ITEM = [
    {
        label: (
            <NavLink style={navStyles} to={"/"} ><p className="textcollapse">Beranda</p>
            </NavLink>
        ),
        key: "beranda",
    },
    {
        label: (
            <NavLink style={navStyles} to={"/products"} ><p className="textcollapse">Our Products</p>
            </NavLink>
        ),
        key: "our products",
    },
    {
        label: (
            <NavLink style={navStyles} to={"/profile-company"} ><p className="textcollapse">Profile Company</p>
            </NavLink>
        ),
        key: "profile company",
    },
]