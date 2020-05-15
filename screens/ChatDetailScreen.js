import React from 'react';
import {View, Text} from 'react-native';

import CustomTopNavigation from '../components/CustomTopNavigation';

const ChatDetailScreen = () => {
  return (
    <React.Fragment>
      <CustomTopNavigation title="Mессеж" leftIcon={true} />
    </React.Fragment>
  );
};

export default ChatDetailScreen;
