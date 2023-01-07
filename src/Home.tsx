import * as React from 'react';
import Education from './modules/views/Education';
import AppFooter from './modules/views/AppFooter';
import MainPage from './modules/views/MainPage';
import Experiencess from './modules/views/Experiences';
import Hobbies from './modules/views/Hobbies';
// import ProductCTA from './modules/views/ProductCTA';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <MainPage />
      <Experiencess />
      <Education />
      <Hobbies />
      {/* <ProductCTA /> */}
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
