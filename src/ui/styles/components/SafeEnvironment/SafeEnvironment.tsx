import React from 'react';
import { SafeenvironmentContainer } from './SafeEnvironment.style';
import { Container } from '@mui/material';

const SafeEnvironment = () => {
    return ( 
    <SafeenvironmentContainer> 
        <Container>
            Ambiente 100% Seguro <i className='twf-lock' />
        </Container>
    </SafeenvironmentContainer>
    );
};

export default SafeEnvironment;