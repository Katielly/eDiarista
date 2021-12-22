import { styled } from "@mui/material/styles";

export const SafeenvironmentContainer = styled('div')`
    color: ${({theme}) => theme.palette.text.secondary};
    blackground: ${({theme}) => theme.palette.background.default};
    text-align: right;
    padding: ${({theme}) => theme.spacing(2)} 0;
    font-size: 12px;
`;
