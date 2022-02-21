import React from 'react';
import { ChipsContainer, ChipsStyled } from './ChipField.style';

export interface ChipFieldProps {
    itemsList: string[];
    emptyMessage?: string;
    onDelete?: (item: string) => void;
}

const ChipField: React.FC<ChipFieldProps> = ({
    itemsList, 
    emptyMessage = ('Nada selecionado ainda'),
    ...props
}) => {
    function onDelete(item: string) {
        if(props.onDelete) {
            props.onDelete(item);
        }
    }

    return (
        <ChipsContainer>
            {itemsList.length ? (
                itemsList.map((item, index) => (
                    <li key={index}>
                        <ChipsStyled 
                            label={item}
                            deleteIcon={<i className={'twf-times'}/>}
                            onDelete={() => onDelete(item)}
                        />
                    </li>
                ))
            ): (
                <span>{ emptyMessage }</span>
            )}
        </ChipsContainer>
    );
};

export default ChipField;