import { ComponentMeta, ComponentStory } from '@storybook/react';

import ChipField from './ChipField';

export default {
    title: 'data-display/ChipField',
    component: ChipField,
    argTypes: {},
} as ComponentMeta<typeof ChipField>;

const Template: ComponentStory<typeof ChipField> = (args) => (
    <ChipField {...args} />
);

export const Default = Template.bind({});
Default.args = {
    itemsList: [
        'Diadema - SP',
        'Mauá - SP',
        'Santo André - SP',
        'São Bernardo do Campo - SP',
        'São Caetando do Sul - SP',
    ],

    emptyMessage: 'Nada selecionado ainda'
};