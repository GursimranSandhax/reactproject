import { Link } from "react-router-dom";
import { scps } from "./scp.js";

function Navmenu()
{
return(
    <nav className="navmenu">
        <ul>
            {
                scps.map(
                    scp =>(
                        <li key={scp.Item}>
                            <Link to={`/scp/${scp.Item}`}>{scp.Item}
                            </Link>
                        </li>
                    )
                )

            }
        </ul>
    </nav>
)
}
export default Navmenu;