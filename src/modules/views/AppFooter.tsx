import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';

function Copyright() {
  return (
    <React.Fragment>
      
      <p color="inherit">
      {'© '} Athena Xu {new Date().getFullYear()}
      </p>{' '}
      
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'inherit',
  mr: 1,
  '&:hover': {
    bgcolor: 'inherit',
  },
};

/* const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
]; */

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: '#8496FF' }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        {/* <Grid container spacing={5}> */}
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: 'flex' }}>
                <Box component="a" href="https://www.linkedin.com/in/athena-xu/" sx={iconStyle}>
                  <img
                    height = {53}
                    src="https://assets.stickpng.com/images/58e91afdeb97430e81906504.png"
                    alt="Linkedin"
                  />
                </Box>
                <Box component="a" href="https://github.com/athenax246" sx={iconStyle}>
                  <img
                    height = {53}
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    alt="Github"
                  />
                </Box>
              </Grid>
              
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            {/* xs=extra small screen, sm=small, md=medium */}
            <Typography variant="h5" marked="left" gutterBottom>
              Location : 
            </Typography>
            <Typography variant="h5" marked="left" gutterBottom>
              Waterloo, ON
            </Typography>

            <Typography variant="h5" marked="center" gutterBottom>
              Email :
            </Typography>
            <Typography variant="h5" marked="center" gutterBottom>
              athena.xu3792@gmail.com
            </Typography>
            <Grid item xs={6} sm={4} md={2}>
                <Copyright />
            </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
