import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const Navigation = () => {
    return (
        <div>
            <Link to='/blog'>Blog</Link>
            <Link to='/store'>Store</Link>
        </div>
    )
};

export default Navigation