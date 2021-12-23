import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";


export const FooterStyled =  styled ('footer')`
      background-color: ${({ theme}) => theme.palette.primary.main};
      color: ${({ theme}) => theme.palette.primary.contrastText};
      padding: ${({ theme}) => theme.spacing(4)} 0; 

`;

export const FooterContainer = styled (Container) `

`;

export const FooterTitle = styled ((props) => (
    <Typography component={'h2'} variant={'body2'} {...props} />
    )) ``;