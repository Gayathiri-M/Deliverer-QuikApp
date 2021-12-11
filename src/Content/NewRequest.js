import {RequestPanel} from './Layout';
import styled from 'styled-components';

const CustomDiv = styled.div`
    margin:25px auto;
`;

const CustomHeadDiv = styled.div`
    text-align:center;
    padding-left:65px;

    @media (max-width:400px)
    {
        display:none;
    }

    @media (min-width:400px) and (max-width:576px)
    {
        display:none;
    }

    @media (min-width:576px) and (max-width:768px)
    {
        display:none;
    }    
`;

const Lead = styled.p`
    font-size:16px;
    color:grey;
`;

const CustomRow = styled.div`
    margin:4px auto;
`;

const NewRequest = () => {
    return ( 
        <CustomDiv className="newRequests container container-fluid">

            <CustomHeadDiv className="row">

                <div className="col-md-2"><Lead className="lead">Customer</Lead></div>

                <div className="col-md-5"><Lead className="lead">Delivery Address</Lead></div>

                <div className="col-md-2"><Lead className="lead">Shops count</Lead></div>

                <div className="col-md-3"><Lead className="lead">Accept or Decline</Lead></div>

            </CustomHeadDiv>

            <CustomRow className="row">
                <RequestPanel
                    profile="fas fa-user-circle"
                    cus_name="Johnson Erik"
                    cus_add="No.15, Armor street, Wellamdama, Matara"
                    shops_count={4}/>
            </CustomRow>

            <CustomRow className="row">
                <RequestPanel
                profile="fas fa-user-circle"
                cus_name="Emma Watson"
                cus_add="No.84, Washington lane, Kandara, Matara"
                shops_count={2}/>
            </CustomRow>
        </CustomDiv>
     );
}
 
export default NewRequest;

