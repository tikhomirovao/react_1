import './Nav.css';

function Nav(props)
{
    return(
        <nav>
            <ul>
                {
                    Object.keys(props.navigation).map(
                        elem =>
                        {
                            return <li key={elem}><a href={props.navigation[elem]}>{elem}</a></li>
                        }
                    )
                }
            </ul>
        </nav>
    );
}

export default Nav;