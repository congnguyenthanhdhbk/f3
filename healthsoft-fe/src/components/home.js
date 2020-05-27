import React from "react";
import {Link} from "react-router-dom";
import { Nav, NavItem, NavLink } from 'reactstrap';

class Home extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to={`/view/:id`}>View Patient</Link>
                    </li>
                    <li>
                        <Link to={`/edit/:id`}>Edit Patient</Link>
                    </li>
                    <li>
                        <Link to={`/list`}>List Patient</Link>
                    </li>
                    <li>
                        <Link to={`/add`}>Create Patient</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Home
