import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

const Hero = () => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item container xs={12} md={6} alignItems={'center'}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              variant="h3"
              color="primary"
              sx={{ 
                fontWeight: 700 
              }}
            >
              Creating Otherworldly{' '}
              <Typography
                color={'text.primary'}
                component={'span'}
                variant={'inherit'}
                sx={{
                  background: `linear-gradient(180deg, transparent 82%, ${alpha(
                    theme.palette.primary.main,
                    0.3,
                  )} 0%)`,
                }}
              >
                Event Entertainment
              </Typography>
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">
              Kikmora invites event producers to explore our exclusive Luxury Living Art Licensable Collection and learn how to elevate your events with our premier program.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          >
            <Link href={'#get-started'}
              sx={{
                textDecoration: 'none',
              }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth={isMd ? false : true}
              >
                Start now
              </Button>
            </Link>
            <Link href={'#simple-steps'}
              sx={{
                textDecoration: 'none',
              }}>
              <Box
                component={Button}
                variant="outlined"
                color="primary"
                size="large"
                marginTop={{ xs: 2, sm: 0 }}
                marginLeft={{ sm: 2 }}
                fullWidth={isMd ? false : true}
              >
                Learn more
              </Box>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        container
        alignItems={'center'}
        justifyContent={'center'}
        xs={12}
        md={6}
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Box
          component={'img'}
          height={'auto'}
          width={1}
          src={'https://res.cloudinary.com/dogooderdev/image/upload/v1692296921/Otherworldly/2_qq5nl1.jpg'}
          alt="Red Rose Living Art Interactive Statue Performer"
          boxShadow={3}
          borderRadius={2}
          maxWidth={600}
          sx={{
            filter: theme.palette.mode === 'dark' ? 'brightness(0.9)' : 'none',
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Hero;
