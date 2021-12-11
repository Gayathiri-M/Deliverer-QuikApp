import styled from 'styled-components';

const CustomRow = styled.div`
    margin-top:5px;
    display:flex;
    
    @media (max-width:400px)
    {
        flex-direction:column;
    }
    @media (min-width:400px) and (max-width:576px)
    {
        flex-direction:column;
    }
`;

const Panel = styled.div`
    margin-left:30px; 
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;

    @media (max-width:400px)
    {
        margin:25px 10px;
    }

    @media (min-width:400px) and (max-width:576px)
    {
        margin:25px 0px;
    }

    @media (min-width:576px) and (max-width:768px)
    {
        margin:25px 0px;
    }

`;

const Prof = styled.div`
    margin:auto 0px;
`;

const ProfileContainer = styled.div`
    justify-content:center;
`;

const ProfIcon = styled.i`
    border:2px solid red;
    border-radius: 100%;
    font-size: 43px;
    color:gray;
`;


const ProfName = styled.div`
    margin:auto 0px;
    margin-left:28px;
    display:flex;
    font-size:18px;

    @media (max-width:400px)
    {
        margin-left:2px;
        margin-top:5px;
        font-size:16px;
    }
    @media (min-width:400px) and (max-width:576px)
    {
        margin-left:3px;
        margin-top:5px;
        font-size:18px;
    }
`;

const ProfAddress = styled.div`
    margin:6px 0px;
    display: flex;
    font-size:17px;

    @media (min-width:400px) and (max-width:576px)
    {
        margin:5px 0px;
    }

    @media (min-width:576px) and (max-width:768px)
    {
        margin:10px 0px;
    }

`;

const LocIcon = styled.i`
    padding: 7px 9px;

    @media (min-width:400px) and (max-width:576px)
    {
        padding: 4px 9px;
    }

    @media (min-width:576px) and (max-width:768px)
    {
        padding: 4px 9px;
    }

`;

const BtnBox = styled(CustomRow)`
    font-size: 17px;

    @media (max-width:400px)
    {
        margin:25px 0px;
        margin-right:45px;
        flex-direction:row;
        font-size:14px;
    }

    @media (min-width:400px) and (max-width:576px)
    {
        margin:25px 0px;
        margin-right:45px;
        flex-direction:row;
        font-size:14px;
    }

    @media (min-width:576px) and (max-width:768px)
    {
        margin:25px auto;
    }

    @media (min-width:768px) and (max-width:992px)
    {
        margin:25px auto;
    }

`;

const ShopBox = styled(CustomRow)`
        padding-top:7px;
        padding-right:40px;

    @media (max-width:400px)
    {
        margin-left:45px;
    }

    @media (min-width:400px) and (max-width:576px)
    {
        margin:auto 0px;
        margin-left:45px;
    }
`;

const Accept = styled.button`
    border: 1px solid rgb(83, 192, 83);
    padding: 3px 8px 3px 8px;
    border-radius: 7px;
    background-color:rgb(99, 226, 99);
    color:white;

    @media (max-width:400px)
    {
        margin:2px auto;
    }

    @media (min-width:400px) and (max-width:576px)
    {
        margin:2px auto;
    }

    @media (min-width:576px) and (max-width:768px)
    {
        margin:7px 0px;
    }
`;

const Cancel = styled.button`
    background-color: rgb(250, 76, 76);
    color:white;
    border:1px solid rgb(204, 70, 70);
    padding: 3px 8px 3px 8px;
    border-radius: 7px;

    @media (max-width:400px)
    {
        margin:2px auto;
    }

    @media (min-width:400px) and (max-width:576px)
    {
        margin:2px auto;
    }

    @media (min-width:576px) and (max-width:768px)
    {
        margin:7px 0px;
    }
`;


{/**Review*/}

const Review = styled(CustomRow)`
    width:550px;
    flex-wrap: wrap;
   
    @media (max-width:400px)
    {
        margin:5px 0px;
        margin-top:15px;
    }

    @media (min-width:400px) and (max-width:576px)
    {
        margin:5px 0px;
        margin-top:15px;
    }

    @media (min-width:576px) and (max-width:768px)
    {
        margin:7px 0px;
        margin-top:15px;
        margin-left:0px;
        padding-left:0px;
    }

    @media (min-width:768px) and (max-width:992px)
    {
        margin-left:-10px;
        padding-left:5px;
        font-size: 17px;
    }

    @media (min-width:992px)
    {
        margin-left:10px;
        padding-left:5px;
        font-size: 17px;
    }
`;

const Rates = styled.div`
    margin:auto 0px;
    display:flex;

    @media (max-width:400px)
    {
        flex-direction:row;
        margin-top:15px;
    }
    @media (min-width:400px) and (max-width:576px)
    {
        flex-direction:row;
        margin-top:15px;
    }
`;

const Checked = styled.span`
    color:#f2580f;
`;

const ReviewPanel = ({...props}) => {

    return(
        <Panel className="row">
           
           <CustomRow className="row">
                <Prof className="col-sm-1">
                    <ProfileContainer>
                        <ProfIcon className="fas fa-user-circle"></ProfIcon>
                    </ProfileContainer>
                </Prof>
                
                <ProfName className="col-sm-7">{props.cus_fname} {props.cus_lname}</ProfName>
           </CustomRow>
            
        
            
            <Review>{props.review}</Review>
          

            <Rates className="col">
                <Checked className="fa fa-star"></Checked>
                <Checked className="fa fa-star"></Checked>
                <Checked className="fa fa-star"></Checked>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
            </Rates>
            
        </Panel>
    );
}



const RequestPanel = ({...props}) => { 

    return ( 
        <Panel className="row col-md-12">
           
           <CustomRow className="row">
                <Prof className="col-sm-1">
                    <ProfileContainer>
                        <ProfIcon className="fas fa-user-circle"></ProfIcon>
                    </ProfileContainer>
                </Prof>
                
                <ProfName className="col-sm-7">{props.cus_name}</ProfName>
            </CustomRow>

            <CustomRow className="row">
                <ProfAddress className="col"><LocIcon className="fas fa-map-marker-alt"></LocIcon>{props.cus_add}</ProfAddress>
            </CustomRow>

            <ShopBox>
                <div className="col-md-1">{props.shops_count} shop(s)</div>    
            </ShopBox>

            <BtnBox>
                <div className="col">
                    <Accept type="submit" className="Accept">Accept</Accept>
                </div>  

                <div className="col req-btns">
                    <Cancel className="Cancel">Cancel</Cancel>
                </div>
            </BtnBox>

           
      
        </Panel>
     );
};


export {ReviewPanel, RequestPanel};