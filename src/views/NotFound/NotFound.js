import React from 'react';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Main from 'layouts/Main';
import Container from 'components/Container';

const NotFound = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Main>
      <Box
        bgcolor={theme.palette.alternate.main}
        position={'relative'}
        minHeight={'calc(100vh - 247px)'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        height={1}
        marginTop={-12}
        paddingTop={12}
      >
        <Container>
          <Grid container>
            <Grid
              item
              container
              alignItems={'center'}
              justifyContent={'center'}
              xs={12}
              md={6}
              data-aos={isMd ? 'fade-right' : 'fade-up'}
            >
              <Box>
                <Typography
                  variant="h1"
                  component={'h1'}
                  align={isMd ? 'left' : 'center'}
                  sx={{ fontWeight: 700, color: theme.palette.primary.main}}
                >
                  404
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  color="text.secondary"
                  align={isMd ? 'left' : 'center'}
                >
                  Oh no! Looks like you followed a bad link.
                  <br />
                  <Link href={'/'} underline="none">
                    Head back home!
                  </Link>
                </Typography>
                <Box
                  marginTop={4}
                  display={'flex'}
                  justifyContent={{ xs: 'center', md: 'flex-start' }}
                >
                  <Button
                    component={Link}
                    variant="contained"
                    color="primary"
                    size="large"
                    href={'/'}
                  >
                    Back home
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid 
              item 
              container 
              justifyContent={'center'} 
              xs={12} 
              md={6}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <Box height={1} width={1} maxWidth={500}>
                <Box
                  component={'img'}
                  loading="lazy"
                  width={1}
                  height={1}
                  borderRadius={2}
                  src={
                    'https://res.cloudinary.com/dogooderdev/image/upload/v1694109640/Otherworldly/404-nf_cduzvc_22b5bab_8b7b9b.png'
                  }
                  sx={{
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.9)'
                        : 'none',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Main>
  );
};

export default NotFound;
