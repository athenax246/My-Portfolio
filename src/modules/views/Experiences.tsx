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

function Experiencess() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'white', overflow: 'hidden' }}
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
          Experiences
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>

                <Typography variant="h5" align="center">
                Midnight Sun Solar Rayce Car Team
                </Typography>
                <Typography variant="h5" align="center">
                Mechanical Core Member
                </Typography>
                <img
                    height = {120}
                    src="https://media.licdn.com/dms/image/C560BAQGHjOsE0A1saQ/company-logo_200_200/0/1647819060628?e=1681344000&v=beta&t=C4KBJAQ9hsgtAoZY4hGDJhVd-lM_R1iHbfvhXFyC7Jk"
                    alt="Midnight Sun Solar Rayce Car Team logo"
                  />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>

                <Typography variant="h5" align="center">
                University of Waterloo Nanorobotics Group
                </Typography>
                <Typography variant="h5" align="center">
                Experimental Team Member
                </Typography>
                <img
                    height = {120}
                    src="https://media.licdn.com/dms/image/C4E0BAQEWq8-K3rihqw/company-logo_100_100/0/1574990530540?e=1681344000&v=beta&t=kEFHQ3DR5OnaXzYygbJW0DPt7ODM9xt1ZBjCNPdQqps"
                    alt="University of Waterloo Nanorobotics Group logo"
                  />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>

                <Typography variant="h5" align="center">
                Waterloo Collegiate Institute Science Club
                </Typography>
                <Typography variant="h5" align="center">
                Leader
                </Typography>
                <img
                    height = {120}
                    src="https://media.licdn.com/dms/image/C560BAQHspti57UmQJQ/company-logo_100_100/0/1672180037197?e=1681344000&v=beta&t=OGXWYp0jBu4H2vAHsY-3WC2cYtUoPZ-XqbAkXWl7Qjw"
                    alt="Science Club logo"
                  />
              </Box>
            </Grid>
          </Grid>
        </div>

      </Container>
    </Box>
  );
}


export default Experiencess;
