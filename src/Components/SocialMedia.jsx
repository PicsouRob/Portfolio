import React from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

const SocialWrapper = styled.div`
    display: flex;
    position: fixed;
    top: 40px;
    left: 20px;
    bottom: 40px;
    align-items: center;
`;

const Bar = styled.div`
    width: 1px;
    height: 400px;
    background-color: #302f2f;
`;

const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

function SocialMedia() {
    return (
        <SocialWrapper>
            <Bar></Bar>
            <SocialContainer>
                <SocialIcon bgColor="transparent" fgColor="#302f2f" url="https://twitter.com/jaketrent" />
                <SocialIcon bgColor="transparent" fgColor="#302f2f" url="https://facebook.com/jaketrent" />
                <SocialIcon bgColor="transparent" fgColor="#302f2f"url="https://instagram.com/jaketrent" />
                <SocialIcon bgColor="transparent" fgColor="#302f2f" url="https://linkedin.com/jaketrent" />
            </SocialContainer>
        </SocialWrapper>
    )
}

export default SocialMedia;