import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <Link to="city">City</Link>
            <Link to="ninjago">Ninjago</Link>
            <Link to="castle-and-knights">Castle & Knights</Link>
            <Link to="marine-and-priates">Marine & Pirates</Link>
            <Link to="movie-characters">Movie Characters</Link>

        </nav>

    )
}