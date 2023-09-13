import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import ThemeModeToggler from 'components/ThemeModeToggler';

const SidebarNav = ({ onClose }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box>
      <Box
        width={1}
        paddingX={2}
        paddingY={1}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="Kikimora Licensing Sidebar Navigation" 
          width={{ xs: 125, md: 150 }}
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
        <Box>
          <ThemeModeToggler />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <Link
            href={'/'}
            onClick={onClose}
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
            }}
          >
            {'Home'}
          </Link>
        </Box>
        <Box marginTop={2}>
          <Link
            href={'#simple-steps'}
            onClick={onClose}
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
            }}
          >
            {'Learn More'}
          </Link>
        </Box>
        <Box marginTop={2}>
          <Link
            href={'#folio'}
            onClick={onClose}
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
            }}
          >
            {'Gallery'}
          </Link>
        </Box>
        <Box marginTop={2}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            href="#get-started"
            onClick={onClose}
          >
            Start Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SidebarNav;