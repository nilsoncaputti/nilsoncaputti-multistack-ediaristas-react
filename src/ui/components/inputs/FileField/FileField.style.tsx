import { styled } from '@material-ui/core/styles';

export const FileContainer = styled('div')`
    position: relative;
    
    .MuiTextField-root:last-of-type {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
    }
`;

export const UploadIcon = styled('i')`
    color: ${({ theme }) => theme.palette.text.secondary};
`;