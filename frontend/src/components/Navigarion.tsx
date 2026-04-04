import { Link } from "react-router"

export const Naviagtion = () =>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/contacts'}>Contacts</Link>
                </li>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
            </ul>
        </nav>
    )
}