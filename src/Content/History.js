import {ReviewPanel} from './Layout';
import styled from 'styled-components';

const CustomDiv = styled.div`
    margin:25px auto;
`;

const CustomRow = styled.div`
    margin:4px auto;
    margin-left:10px;
`;

const History = () => {
    return ( 
        <CustomDiv className="history container container-fluid">
            <CustomRow>
                <ReviewPanel
                    cus_fname="Johnson"
                    cus_lname="Erik"
                    review="Very good service, Timely delivery and Has brought the quality full products"
                    rates={3}/>
            </CustomRow>
            
            <CustomRow>
                <ReviewPanel
                    cus_fname="Johnson"
                    cus_lname="Erik"
                    review="Very good service, Timely delivery and Has brought the quality full products"
                    rates={3}/>
            </CustomRow>
        </CustomDiv>
     );
}
 
export default History;