import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeModeToggler from 'components/ThemeModeToggler';

const Topbar = ({ onSidebarOpen, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="Kikimora Licensing Topbar Navigation"
        width={{ xs: 125, md: 150 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? 'https://res.cloudinary.com/dogooderdev/image/upload/v1692892946/Otherworldly/logo-kikimora-licensing-otherworldly-slim_xlod7c.svg'
              : 'https://res.cloudinary.com/dogooderdev/image/upload/v1692892946/Otherworldly/logo-kikimora-licensing-otherworldly-slim_xlod7c.svg'
          }
          height={1}
          width={1}
          alt="Kikimora Licensing Logo"
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <Link
            href={'/'}
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
            }}
          >
            {'Home'}
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link
            href={'#simple-steps'}
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
            }}
          >
            {'Learn More'}
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link
            href={'#folio'}
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
            }}
          >
            {'Gallery'}
          </Link>
        </Box>
        <Box marginLeft={4}>
          <ThemeModeToggler />
        </Box>
        <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            href={'#get-started'}
            size="large"
          >
            Start Now
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  colorInvert: PropTypes.bool,
};

export default Topbar;