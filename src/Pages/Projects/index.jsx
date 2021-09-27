import React, { useState } from 'react';
import { projectData, uiDesign, uxSturdy, wireframeData } from '../../Helpers/ProjectApi';
import { useWidth, GlobalContainer, HeaderDescription } from '../../Styles/GlobalStyleWrapper';
import { Button, ButtonContainer, 
    ProjectsWrapper, RenderProject, 
    ButtonNumber, ButtonNextSelected, ImageContent, 
    Text, DetailButton, ProjectContent, Content
} from './ProjectStyle';

function Projects() {
    const { width, padding, imageWidth, heightImage } =  useWidth();
    console.log(width);
    const [project, setProject] = useState(projectData);
    const [isSelected, setIsSelected] = useState("All");

    const handleClick = (text, ind) => {
        setIsSelected(text);
        switch (text) {
            case "All":
                setProject(projectData);
                break;
            case "UI Design":
                setProject(uiDesign);
                break;
            case "UX Sturdy":
                setProject(uxSturdy);
                break;
            case "Wireframes":
                setProject(wireframeData);
                break;
            default:
                break;
        }
    }

    const buttonData = [{
        name: "All"
    },
    {
        name: "UI Design"
    },
    {
        name: "UX Sturdy"
    },
    {
        name: "Wireframes"
    },];

    return (
        <ProjectsWrapper id="projects" padding={padding}>
            <div>
                <GlobalContainer>
                    <div style={{ display: "flex", 
                        justifyContent: "space-between", 
                        flexDirection: width < 576 ? "column-reverse" : "row",
                        width: "100%"}}>
                        <ButtonContainer>
                            {buttonData.map((items, index) => (
                                <Button style={{ background: isSelected === items.name ? "#fccf58" : "#fff" }} key={index} $bg onClick={() => handleClick(items.name, index)}>{items.name}</Button>
                            ))}
                        </ButtonContainer>
                        <div style={{ float: "right" }}>
                            <HeaderDescription header="Read My" width={width}
                                bottom="Latest Blogs" isRight={true}
                            ></HeaderDescription>
                        </div>
                    </div>
                </GlobalContainer>
                <RenderProject width={width}>
                    {project.map((items, index) => (
                        <ProjectContent width={imageWidth} 
                            img={items.img}  key={index} height={heightImage}
                        >
                            <ImageContent>
                                <Content>
                                    <h3 style={{ color: "#fff" }}>Ui DESIGN</h3>
                                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                                    <DetailButton>View Details</DetailButton>
                                </Content>
                            </ImageContent>
                        </ProjectContent>
                    ))}
                </RenderProject>
                <ButtonNextSelected>
                    <ButtonNumber $isSelected>1</ButtonNumber>
                    <ButtonNumber>2</ButtonNumber>
                    <ButtonNumber>3</ButtonNumber>
                </ButtonNextSelected>
            </div>
        </ProjectsWrapper>
    )
}

export default Projects;