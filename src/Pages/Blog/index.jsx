import React from 'react';
import { blogData } from '../../Helpers/BlogApi';
import { useWidth, AboutMe, HeaderDescription } from '../../Styles/GlobalStyleWrapper';
import { BlogWrapper, BlogContainer, BlogContent, BlogText, BlogImage, Button } from './BlogStyle';

const imgStyle = { overflow: "hidden", borderRadius: "30px 30px 0 0" }

function Blog() {
    const { width } =  useWidth();

    return (
        <BlogWrapper width={width} id="blog">
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                    <HeaderDescription header="Read My" width={width}
                        bottom="Latest Blogs" isRight={true}
                    ></HeaderDescription>
                </div>
                <BlogContainer width={width}>
                    {blogData.map((items, index) => (
                        <BlogContent key={index} width={width}>
                            <div style={imgStyle}>
                                <BlogImage src={items.img} alt={items.img} width={width} />
                            </div>
                            <BlogText>
                                <h3>Lorem ipsum dolor sit</h3>
                                <p style={{ marginTop: -17, color: "gray" }}>Web Development</p>
                                <AboutMe>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue nulla. Vivamus lorem felis.</AboutMe>
                                <Button>Read More</Button>
                            </BlogText>
                        </BlogContent>
                    ))}
                </BlogContainer>
            </div>
        </BlogWrapper>
    )
}

export default Blog;