import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
{/*           <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="#D1B6FF"
            href="/portfolio/opsource/"
            sx={{ fontSize: 18 }}
          >
            {'personal portfolio'}
          </Link> */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/portfolio/opsource/"
              sx={rightLink}
            >
              {'About Me'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/portfolio/opsource/Experience/"
              sx={{ ...rightLink, color: 'inherit' }}
            >
              {'Experience'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/portfolio/opsource/Education/"
              sx={{ ...rightLink, color: 'inherit' }}
            >
              {'Education'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/portfolio/opsource/Hobbies/"
              sx={{ ...rightLink, color: 'inherit' }}
            >
              {'Hobbies'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
