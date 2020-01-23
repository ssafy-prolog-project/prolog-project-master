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
    background-color : #1a3365;
    display: none;
    
    @media (max-width: 768px) {
        display: block;
    }
`;

export default MobileNavBar;