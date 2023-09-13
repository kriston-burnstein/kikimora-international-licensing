import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your name'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
});

const GetStarted = () => {

  const initialValues = {
    name: '',
    email: '',
  };

  const onSubmit = (values) => {
    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'primary'}
          align={'center'}
        >
          Get Started
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
          Request Your Living Art Licensing Today!
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          Learn how we create this intricate art for you, train your performers, 
          <br />
          and set your stage for unparalleled events with our premier licensing approach.
        </Typography>
      </Box>
      <Box maxWidth={900} margin={'0 auto'}>
        <form
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
            <Box
              width={1}
              marginRight={{ xs: 0, md: 2 }}
              marginBottom={{ xs: 4, md: 0 }}
              display={'flex'}
              flexDirection={{ xs: 'column', md: 'row' }}
            >
              <TextField
                sx={{
                  height: 54,
                  marginRight: { xs: 0, md: 2 },
                  marginBottom: { xs: 4, md: 0 },
                }}
                variant="outlined"
                color="primary"
                size="large"
                label="Name"
                fullWidth
                name={'name'}
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              <TextField
                sx={{
                  height: 54,
                }}
                variant="outlined"
                color="primary"
                size="large"
                label="Email"
                fullWidth
                name={'email'}
                value={formik.values.email}
                onChange={formik.handleChange}
                error={
                  formik.touched.email && Boolean(formik.errors.email)
                }
                helperText={formik.touched.email && formik.errors.email}
              />
            </Box>
            <Box>
              <Button
                sx={{ height: 54, whiteSpace: 'nowrap', minWidth: 100 }}
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                type="submit"
              >
                Request Info
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default GetStarted;
