import { Link } from 'react-router-dom';

import styled from "styled-components";

const CustomLink = styled(Link)`
    background-color: transparent;
    color: #f2580f;

    font-size: 18px;

    &:hover{
        color:#2a102a;
    }

    &:active{
        color:#f2580f;
    }

    @media (max-width:400px){
        font-size:14px;
    }

    @media (min-width:400px) and (max-width:576px)
    {
        font-size:17px;
    }
    
`;



const Content = () => {
    return ( 
        <div className="content">
            <ul className="nav nav-tabs options">
                <li className="nav-item opt-item">
                    <CustomLink className="nav-link" data-toggle="tab" to="/newRequests">NewRequests</CustomLink>
                </li>
                <li className="nav-item opt-item">
                    <CustomLink className="nav-link" data-toggle="tab" to="/inProgress">InProgress</CustomLink>
                </li>
                <li className="nav-item opt-item">
                    <CustomLink className="nav-link" data-toggle="tab" to="/history">History</CustomLink>
                </li>
            </ul>

           
            
            
        </div>
     );
}
 
export default Content;