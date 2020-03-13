import React from 'react';
import styled from 'styled-components';
import LandingImage from '../img/landing-back.jpg';
import {Link} from 'react-router-dom';

const StyledBody = styled.div`
  background-image: url(${LandingImage});
  background-size: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

const Landing = () => {
    return(
        <StyledBody>
            <Link to="/medication">
                <button>Take Pill</button>
            </Link>
        </StyledBody>
    )
}

export default Landing;