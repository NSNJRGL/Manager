import React from 'react';

import CustomTopNavigation from '../components/CustomTopNavigation';

const ChatDetailScreen = (props) => {
  return (
    <React.Fragment>
      <CustomTopNavigation
        title={props.route.params.title}
        leftIcon={true}
        navigation={props.navigation}
      />
    </React.Fragment>
  );
};

export default ChatDetailScreen;
