import styled from 'styled-components';
import { padding } from '../Skills/SkillsStyle';

export const ServicesWrapper = styled.div`
    position: relative;
    padding: ${(props) => padding(props.width)};
`;

export const ServicesContainer = styled.div`
    margin-top: 40px;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    grid-template-rows: 40px 40px;
    grid-template-columns: repeat(1, 1fr);
`;