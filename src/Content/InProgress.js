import styled from 'styled-components';

const CustomDiv = styled.div`
    margin:25px auto;
`;

const CustomRow = styled.div`
    margin:4px auto;
    margin-left:10px;
`;

const InProgress = () => {
    return ( 
        <CustomDiv className="inProgress">
            <CustomRow>
                In progress...
            </CustomRow>
        </CustomDiv>
     );
}
 
export default InProgress;