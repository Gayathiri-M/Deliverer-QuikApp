import './DHome.css';
import Header from './Header/Header';
import Content from './Content/Content';

import { Route, Routes } from 'react-router-dom';
import NewRequest from './Content/NewRequest';
import InProgress from './Content/InProgress';
import History from './Content/History';

const DHome = () => {

    const activate = () => {
        var x = document.getElementById("activebtn");
        x.style.backgroundColor = "lightgreen";
        x.style.borderColor = "black";

    };

    const deactivate = () => {
        var x = document.getElementById("activebtn");
        x.style.backgroundColor = "white";
        x.style.borderColor = "#f2580f";
    };

    return ( 
        <div className="dh">
            <div className="Header">
                <Header/>
            </div>

            <div className="main container container-fluid">
                <div className="row active">
                    <input type="button" value="Active" className="activebtn" id="activebtn" onClick={activate} onDoubleClick={deactivate}/>
                </div>
                <br/>
                <div className="tab">
                    <Content/>
                </div>
                
            </div>

            <div className="footer">

            </div>


            <Routes>
                <Route path='/newRequests' element={<NewRequest/>}/> 
                <Route path='/inprogress' element={<InProgress/>}/>
                <Route path='/history' element={<History/>}/>
            </Routes>
        </div>
     );
}
 
export default DHome;