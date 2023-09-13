import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="Kikimora Licensing" 
            width={125}
          >
            <Box
              component={'img'}
              src={
                mode === 'light'
                  ? 'https://res.cloudinary.com/dogooderdev/image/upload/v1692892946/Otherworldly/logo-kikimora-licensing-otherworldly-slim_xlod7c.svg'
                  : 'https://res.cloudinary.com/dogooderdev/image/upload/v1692892946/Otherworldly/logo-kikimora-licensing-otherworldly-slim_xlod7c.svg'
              }
              height={1}
              width={1}
              alt="Kikimora Licensing Logo"
            />
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1} marginRight={2}>
              {/* <Box marginTop={4}> */}
              <Link href="https://www.facebook.com/kikimorastudio/" target="_blank" rel="noopener noreferrer">
                <IconButton size={'small'} color={'primary'} aria-label="Facebook">
                  <FacebookIcon />
                </IconButton>
              </Link>
              <Link href="https://www.pinterest.com/kikimorastudio/" target="_blank" rel="noopener noreferrer">
                <IconButton size={'small'} color={'primary'} aria-label="Pinterest">
                  <PinterestIcon />
                </IconButton>
              </Link>
              <Link href="https://www.instagram.com/kikimorastudioart/" target="_blank" rel="noopener noreferrer">
                <IconButton size={'small'} color={'primary'} aria-label="Instagram">
                  <InstagramIcon />
                </IconButton>
              </Link>
              {/* </Box> */}
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; 2023 Kikimora International Licensing. All rights reserved.
        </Typography>
        <Typography align={'center'} variant={'caption'} color="text.secondary" component={'p'}>
          Development and Digital Presence powered by{' '}
          <Link href="https://kristonburnstein.com" target="_blank" rel="noopener noreferrer">
            Kriston Burnstein
          </Link>
          {' | '} 
          <Link href="https://kristonburnstein.com" target="_blank" rel="noopener noreferrer">
            Kriston.co
          </Link>.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
