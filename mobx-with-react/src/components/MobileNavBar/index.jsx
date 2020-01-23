import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MNavItems from './MNavItems';

const MobileNavBar = () => {
    return (
        <MNavBarLayout>
            <MNavItems></MNavItems>
        </MNavBarLayout>
    )
}

const MNavBarLayout = styled.div`
    background-color : gray;
    display: none;
    
    @media (max-width: 768px) {
        display: block;
    }
`;

export default MobileNavBar;