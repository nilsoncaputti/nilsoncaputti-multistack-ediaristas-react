import { ThemeProvider } from '@material-ui/core';
import '@styles/globals.css';
import { AppContainer } from '@styles/pages/_app.styled';
import { MainProvider } from 'data/contexts/MainContext';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Footer from 'ui/components/surfaces/Footer/Footer';
import Header from 'ui/components/surfaces/Header/Header';
import theme from 'ui/themes/theme';

function App({ Component, pageProps }: AppProps) {
    const [myTheme, setMyTheme] = useState(theme);

    useEffect(() => {
        document.querySelector('#jss-server-side')?.remove();
    }, []);

    return (
        <>
            <Head>
                <title>
                    e-diaristas {pageProps.title && ` - ${pageProps.title}`}
                </title> 
            </Head>

            <ThemeProvider theme={theme} >
                <AppContainer>
                    <Header/>

                    <main>
                        <Component {...pageProps}/>
                    </main>
                    
                    <Footer/>
                </AppContainer>
            </ThemeProvider>
        </>
    );
}

const AppProviderContainer: React.FC<AppProps> = (props) => {
    return (
        <MainProvider>
            <App {...props}/>
        </MainProvider>
    )
};

export default AppProviderContainer;