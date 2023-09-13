import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const mock = [
  {
    image: 'https://res.cloudinary.com/dogooderdev/image/upload/c_fill,h_1067,w_1600/v1692574370/Otherworldly/0153-1-copy_oommtc.jpg',
    description: 'Living Roses Collection',
    title: 'Red Rose',
    color: '#CD4242',
  },
  {
    image: 'https://res.cloudinary.com/dogooderdev/image/upload/v1692296922/Otherworldly/3_tj9ixm.jpg',
    description: 'Winter White Collection',
    title: 'Pearl Princess',
    color: '#CE371F',
  },
  {
    image: 'https://res.cloudinary.com/dogooderdev/image/upload/v1692296921/Otherworldly/4_ngvfjz.jpg',
    description: 'Winter White Collection',
    title: 'Pearl Princess',
    color: '#ED7D4D',
  },
  {
    image: 'https://res.cloudinary.com/dogooderdev/image/upload/v1692296922/Otherworldly/5_pzthee.jpg',
    description: 'Living Roses Collection',
    title: 'Red Rose',
    color: '#CE371F',
  },
  {
    image: 'https://res.cloudinary.com/dogooderdev/image/upload/v1692296922/Otherworldly/6_hcxj0o.jpg',
    description: 'Living Roses Collection',
    title: 'Red Rose Queen',
    color: '#CE371F',
  },
  {
    image: 'https://res.cloudinary.com/dogooderdev/image/upload/v1692296923/Otherworldly/7_f0xfla.jpg',
    description: 'Winter White Collection',
    title: 'Ice Queen',
    color: '#CE371F',
  },
  {
    image: 'https://res.cloudinary.com/dogooderdev/image/upload/v1692296923/Otherworldly/8_d6zrry.jpg',
    description: 'Fairytales Collection',
    title: 'Purple Gremlin',
    color: '#A965C8',
  },
  {
    image: 'https://res.cloudinary.com/dogooderdev/image/upload/v1692296924/Otherworldly/9_utcdnx.jpg',
    description: 'Fairytales Collection',
    title: 'Pink Gremlin',
    color: '#A965C8',
  },
  {
    image: 'https://res.cloudinary.com/dogooderdev/image/upload/v1692296923/Otherworldly/10_zx1zng.jpg',
    description: 'Winter White Collection',
    title: 'Ice Queen',
    color: '#A965C8',
  },
  {
    image: 'https://res.cloudinary.com/dogooderdev/image/upload/v1692296924/Otherworldly/11_mlbloz.jpg',
    description: 'Winter White Collection',
    title: 'Ice Queen',
    color: '#A965C8',
  },
];

const Folio = () => {
  const theme = useTheme();
  return (
    <Box>
      {/* <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Extravagent Licensable Living Art
        </Typography>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          We are reimagining entertainment to help you achieve your dreams
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          Choose for elegant and opulant otherworldly creations.
          <br />
          We help you fulfill your best potential through an engaging licensing
          experience.
        </Typography>
      </Box> */}
      <Grid container spacing={1}>
        {mock.map((item, i) => (
          <Grid key={i} item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 2,
                '&:hover': {
                  '& img': {
                    transform: 'scale(1.2)',
                  },
                },
              }}
            >
              <Box
                component={'img'}
                loading="lazy"
                height={1}
                width={1}
                src={item.image}
                alt="..."
                minHeight={{ xs: 150, md: 300 }}
                sx={{
                  transition: 'transform .7s ease !important',
                  transform: 'scale(1.0)',
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.9)' : 'none',
                }}
              />
              <Box
                position={'absolute'}
                bottom={0}
                left={0}
                right={0}
                padding={3}
                sx={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 2%, ${item.color})`,
                }}
              >
                <Typography
                  variant={'h4'}
                  fontWeight={700}
                  sx={{ color: 'common.white' }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant={'h6'}
                  fontWeight={700}
                  sx={{ color: 'common.white' }}
                  gutterBottom
                >
                  {item.description}
                </Typography>
                <Link href={'#get-started'}
                  sx={{
                    textDecoration: 'none',
                  }}>
                  <Button
                    size={'large'}
                    variant={'contained'}
                    color={'primary'}
                  >
                    License
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Folio;
