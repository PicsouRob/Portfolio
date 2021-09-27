import styled from 'styled-components';

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContactHeader = styled.div`
    padding: ${(props) => props.width < 576 ? "0px 30px" : props.width > 576 & props.width < 768 ? "0px 50px" : "0px 120px"}
`;

export const ContactImage = styled.div`
    margin-top: -130px;
`;

export const ContactContainer = styled.div`
    height: 550px;
    background: #242323;
    margin-top: 40px;
    padding: ${(props) => props.width < 576 ? "0px 30px" : props.width > 576 & props.width < 768 ? "0px 50px" : "0px 30px 0 120px"};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const InputContainer = styled.div`
`;