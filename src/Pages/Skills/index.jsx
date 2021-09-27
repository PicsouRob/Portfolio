import React from 'react';
import { SkillsWrapper, SkillsContainer, SkillName, ImageSkills } from './SkillsStyle';
import skills from '../../assets/skills.png';
import { skillsData } from '../../Helpers/data';
import { useWidth, HeaderDescription } from '../../Styles/GlobalStyleWrapper';

function Skills() {
    const { width } =  useWidth();

    return (
        <SkillsWrapper width={width} id='skills'>
            <HeaderDescription header="Area Of" width={width}
                bottom="Experties" isRight={false}
            ></HeaderDescription>
            <SkillsContainer width={width}>
                <SkillName>
                    {skillsData.map((item, index) => (
                        <div key={index}>
                            <img src={item.image} alt={item.name} width={80} height={80} />
                            <h3>{item.name}</h3>
                        </div>
                    ))}
                </SkillName>
                <ImageSkills src={skills} alt="skills" width={width} />
            </SkillsContainer>
        </SkillsWrapper>
    )
}

export default Skills;