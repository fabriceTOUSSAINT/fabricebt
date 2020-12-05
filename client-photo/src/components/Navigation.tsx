import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const Navigation = () => {
    return (
        <NavWrapper>
            <StyledLink to='/blog'>Blog</StyledLink>
            {/* <StyledLink to='/store'>Store</StyledLink>
            <StyledLink to='/contact'>Contact</StyledLink> */}
        </NavWrapper>
    )
};

export default Navigation

const NavWrapper = styled.div`
    display:flex;
    background: #fff;
    position: sticky;
    top: 0;
    width: 100%;
    padding: 12px 40px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #333333;
    padding: 0 8px;
`;

