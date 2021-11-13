import { Box, List, Typography } from '@material-ui/core';
import Link from 'ui/components/navigation/Link/Link';
import {
    AppList,
    FooterContainer,
    FooterGrid,
    FooterListItem,
    FooterSocialList,
    FooterTitle,
    SocialButton,
    SocialContainer
} from './Footer.style';

const Footer = () => {
    return <FooterContainer>
        <FooterGrid>
            <div>
                <FooterTitle>Menu</FooterTitle>

                <List>
                    <FooterListItem>
                        <Link href={'/encontrar-diarista'} mui={{ color: 'inherit', variant: 'body2' }}>
                            Encontrar um(a) diarista
                        </Link>
                    </FooterListItem>

                    <FooterListItem>
                        <Link href={'/cadastro/diarista'} mui={{ color: 'inherit', variant: 'body2' }}>
                            Seja um(a) diarista
                        </Link>
                    </FooterListItem>

                    <FooterListItem>
                        <Link href={'/'} mui={{ color: 'inherit', variant: 'body2' }}>
                            Por que usar o E-Diaristas?
                        </Link>
                    </FooterListItem>

                    <FooterListItem>
                        <Link href={'/'} mui={{ color: 'inherit', variant: 'body2' }}>
                            Principais Dúvidas
                        </Link>
                    </FooterListItem>
                </List>
            </div>

            <Box sx={{ maxWidth: '400px' }}>
                <FooterTitle>Quem somos</FooterTitle>

                <Typography variant={'body2'} sx={{ mt: 2 }}>
                    E-Diaristtas te ajuda a encontrar um profissional perfeito para realizar a limpeza da sua casa. Garantimos o(a) melhor profissional com total segurança e praticidade! São milhares de clientes satisfeitos por todo o país.
                </Typography>
            </Box>

            <SocialContainer>
                <Box>
                    <FooterTitle>Baixe nossos aplicativos</FooterTitle>

                    <AppList>
                        <li>
                            <a href={'https://apps.apple.com/br/app/treinaweb/id1322729447'} target={'_blank'} rel={'noopener noreferrer'}>
                                <img src={'/img/logos/app-store.png'} alt={'AppStore'} />
                            </a>
                        </li>

                        <li>
                            <a href={'https://play.google.com/store/apps/details?id=br.com.treinaweb.mobile'} target={'_blank'} rel={'noopener noreferrer'}>
                                <img src={'/img/logos/google-play.png'} alt={'Google Play'} />
                            </a>
                        </li>
                    </AppList>
                </Box>

                <div>
                    <FooterTitle>Redes Sociais</FooterTitle>

                    <FooterSocialList>
                        <FooterListItem>
                            <SocialButton href={'https://www.facebook.com/'}>
                                <i className={'twf-facebook-f'} />
                            </SocialButton>
                        </FooterListItem>

                        <FooterListItem>
                            <SocialButton href={'https://www.instagram.com/'}>
                                <i className={'twf-instagram'} />
                            </SocialButton>
                        </FooterListItem>

                        <FooterListItem>
                            <SocialButton href={'https://www.youtube.com/'}>
                                <i className={'twf-youtube'} />
                            </SocialButton>
                        </FooterListItem>
                    </FooterSocialList>
                </div>
            </SocialContainer>
        </FooterGrid>
    </FooterContainer>;
};

export default Footer;