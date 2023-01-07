import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'medium',
};

const image = {
  height: 55,
  my: 4,
};

function Education() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: '#8496FF', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="opsource/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          Education
        </Typography>
        <div>
{/*           <Grid container spacing={5}>

          </Grid> */}
          <Grid item xs={18} md={8}>
              <Box sx={item}>
                {/* <Box sx={number}>1.</Box> */}

                <Typography variant="h6" align="center">
                University of Waterloo
                </Typography>
                <Typography variant="h5" align="center">
                Nanotechnology Engineering Student
                </Typography>
                <img
                    height = {150}
                    src="https://uwaterloo.ca/brand/sites/ca.brand/files/styles/body-500px-wide/public/uploads/images/university-of-waterloo-vertical-logo.png?itok=9KCQdLsy"
                    alt="University of Waterloo logo"
                  />
              </Box>
          </Grid>
          <Grid item xs={18} md={8}>
              <Box sx={item}>
                {/* <Box sx={number}>2.</Box> */}

                <Typography variant="h6" align="center">
                Waterloo Collegiate Institute
                </Typography>
                <Typography variant="h5" align="center">
                High School Graduate
                </Typography>
                <img
                    height = {120}
                    src="https://lh3.googleusercontent.com/u/0/drive-viewer/AFDK6gNu_JzMhSKeWsE5_EHLScZxxXWxxJTUT-LkcmAEbtcAB7AonZzzqjOxljQsev67NqDd2AHns9aRSck9FHNC2H8Wf8Az-Q=w1115-h878"
                    alt="Waterloo Collegiate Institute logo"
                  />
              </Box>
          </Grid>
        </div>

      </Container>
    </Box>
  );
}


export default Education;
