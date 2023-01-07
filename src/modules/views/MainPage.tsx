import * as React from 'react';
// import Button from '../components/Button';
import Typography from '../components/Typography';
import MainPageLayout from './MainPageLayout';

const backgroundImage =
  'https://images.pexels.com/photos/3780104/pexels-photo-3780104.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

export default function MainPage() {
  return (
    <MainPageLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Hi! I'm Athena Xu
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Nanotechnology Engineering Student at the University of Waterloo
      </Typography>
      {/* <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/portfolio/opsource/sign-up/"
        sx={{ minWidth: 200 }}
      >
        Resume
      </Button> */}
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        "Strive not to be a success, but rather to be of value." - Albert Einstein
      </Typography>
    </MainPageLayout>
  );
}
