import React from 'react';
import styled from 'styled-components';
import { counterData } from '../Helpers/data.js';

const CounterWrapper = styled.div`
    background: rgba(255, 251, 250, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 100px;
`;

const CounterText = styled.h1`
    color: #242323;
`;

const TextName = styled.p`
    color: #242323;
    margin-top: -20px;
    font-weight: 600;
`;

function Counters() {
    return (
        <CounterWrapper>
            <div style={{ display: 'flex', flexWrap: "wrap" }}>
                {counterData.map((items, index) => (
                    <div key={index} style={{ marginRight: 100, width: 150, display: "flex", flexDirection: 'column', justifyContent: "center" }}>
                        <CounterText>{items.count}
                            <span 
                                style={{ color: "#fccf58", fontWeight: "bold", fontSize: 40 }}>
                            +</span>
                        </CounterText>
                        <TextName>{items.name}</TextName>
                    </div>
                ))}
            </div>
        </CounterWrapper>
    )
}

export default Counters;