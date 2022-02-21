import React from 'react';
import { 
    JobInformationContainer,
    JobInformationIcon,
    JobDataContainer
} from './JobInformation.style';

// import { } from '@mui/material';

export interface JobInformationProps {}

const JobInformation: React.FC<JobInformationProps> = ({children}) => {
    return (
        <JobInformationContainer>
            <JobInformationIcon className={'twf-check-circle'}/>

            <JobDataContainer>
                {children}
            </JobDataContainer>
        </JobInformationContainer>
    );
}

export default JobInformation;