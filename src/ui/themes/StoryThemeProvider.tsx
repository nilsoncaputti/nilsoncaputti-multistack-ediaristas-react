import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const StoryThemeProvider = (storyFn: any) => (
    <ThemeProvider theme={theme}>
        <EmotionThemeProvider theme={theme}>{storyFn()}</EmotionThemeProvider>
    </ThemeProvider>
);

export default StoryThemeProvider;