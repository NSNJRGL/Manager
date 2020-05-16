import React from 'react';
import {Text} from 'react-native';

import CustomTopNavigation from '../components/CustomTopNavigation';

const BannerDetailScreen = (props) => {
  return (
    <React.Fragment>
      <CustomTopNavigation
        title={props.route.params && props.route.params.title}
        leftIcon={true}
        navigation={props.navigation}
      />
      <Text>bannerdetail</Text>
    </React.Fragment>
  );
};

export default BannerDetailScreen;
