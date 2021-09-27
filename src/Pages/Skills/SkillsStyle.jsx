import styled from 'styled-components';

export const padding = (screen) => {
    let size;
    if(screen < 576){
        size = "30px";    
    }  else if(screen < 768) {
        size = "30px 70px"
    } else if(screen < 992) {
        size = "30px 60px"
    } else {
        size = "30px 80px"
    } 

    return size;
} 

export const SkillsWrapper = styled.div`
    padding: ${(props) => padding(props.width)};
`;

export const SkillsContainer = styled.div`
    display: ${(props) => props.width < 768 ? "block" : "flex"};
    padding-bottom: 60px;
`;

export const SkillName = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 100px;
    grid-template-rows: 130px 100px;
    grid-template-columns: repeat(3, 1fr);
    margin: 60px 0px 50px 0;
`;

export const ImageSkills = styled.img`
    width: ${(props) => props.width > 992 ? "400px" : "300px"};
    height: 500px;
`;