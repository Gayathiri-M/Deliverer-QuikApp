import styled from 'styled-components';

const CustomRow = styled.div`
    display:flex;

    @media (max-width:400px)
    {
        flex-direction:column;
    }
    @media (min-width:400px) and (max-width:604px)
    {
        flex-direction:column;
    }
`;

const Logo = styled.div`
    margin-top: 3px;
    margin-left: 15px;
    padding: 2px;
    letter-spacing: 2px;
`;

const Q = styled.span`
    color: #f2580f;
`;


const CityContainer = styled.div`
    margin-top: 18px;
    margin-left: 30px;
    padding:2px;
    background-color: white;
    width:max-content;
    justify-content: center;
    display:flex;
    font-size: 15px;


    border-radius: 20px;
    border:2px solid #2a102a;

    @media (max-width:400px){
        margin-left: 5px;
    }

    @media (min-width:400px) and (max-width:604px){
        margin-left: 5px;
    }
`;

const City = styled.span`
    color:grey;
    font-size: 16px;
    padding-right:10px;

    @media (max-width:400px){
        font-size:13px;
    }
`;

const LocIcon = styled.span`
    color: #2a102a;
    padding-right: 5px;
    padding-left: 5px;

    @media (max-width:400px){
        font-size:13px;
        padding:0px 4px;
        padding-left:10px;
    }
`;

const CustomNav = styled.nav`
    width:95%;
    margin-top: 15px;
    margin-right: 40px;

    @media (max-width:400px)
    {
        margin-right:5px;
    }

`;

const CustomLi = styled.li`
    margin-right: 15px;
    color: #2a102a;
    font-size: 18px;

    @media (max-width:400px){
        margin:2px auto;
        font-size:15px;
    }
`;

const CustomAnchor = styled.a`
    margin-right: 15px;
    color: #2a102a;
    font-size: 18px;

    &:hover{
        color:#f2580f;
    }

    @media (max-width:400px)
    {   
        margin:0px auto;
        font-size:15px;
    }
`;

const Toggler = styled.button`
    &:focus{
        outline:none;
    }
`;

const CustomDropdown = styled.div`
    width:max-content;
    font-size:18px;
    padding:0;

    @media (max-width:400px)
    {  
        font-size:16px;
    }
`;

const Badge = styled.span`
    content:'';
    font-size: 12px;
    margin-top: -14px;
    margin-left:2px;
    position: absolute;
    padding:1px 5px;
    border-radius: 100%;
    background: #f2580f;
    color: white;
    border:1px solid #bdb0bd;

    @media (max-width:400px){
        margin-top:85px;
        margin-left:5px;
    }
`;


const Header = () => {
    return ( 
        <div className="header">
            <CustomNav className="navbar navbar-expand-sm">
                <CustomRow className="row logo-row">
                    <Logo className="col-2">
                        <h1 href="/">
                            <Q>Q</Q>
                            <span>u</span>
                            <span>i</span>
                            <span>k</span>
                        </h1>
                    </Logo>

                    <div className="col-4">
                        <CityContainer>
                            <div>
                                <LocIcon><i className="fas fa-map-marker-alt"></i></LocIcon>
                            </div>
                            <div>
                                <City>
                                    Wellamadama, Matara
                                </City>
                            </div>
                        </CityContainer>
                    </div>
                </CustomRow>    


                <div className="ml-auto">                          
                    <Toggler className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </Toggler>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto ">
                            <CustomLi className="nav-item">
                                <CustomAnchor className="nav-link" href="https://www.facebook.com">Home</CustomAnchor>
                            </CustomLi>
                            <CustomLi className="nav-item">
                                <CustomAnchor className="nav-link" href="https://www.google.com">
                                    <span><i className="fa fa-file-text"></i></span>
                                    <Badge>3</Badge> 
                                </CustomAnchor>
                            </CustomLi>
                            <CustomLi className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
                                    <span><i className="far fa-user user locIcon"></i></span>
                                </div>
                                <CustomDropdown className="dropdown-menu">
                                    <a className="dropdown-item" href="https://www.twitter.com">Profile</a>
                                    <a className="dropdown-item" href="https://www.gmail.com">Edit</a>
                                    <a className="dropdown-item" href="https://www.instagram.com">Sign out</a>
                                </CustomDropdown>
                            </CustomLi>
                        </ul>
                    </div>
                </div>
            </CustomNav>
        </div>
     );
}
 
export default Header;