import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Icon, Text} from '@ui-kitten/components';

const MinusIcon = (props) => (
  <Icon {...props} width={30} height={30} name="minus-circle-outline" />
);

const PlusIcon = (props) => (
  <Icon {...props} width={30} height={30} name="plus-circle-outline" />
);

const CustomCounter = ({title}) => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text category="h6" style={styles.title}>
        {title}
      </Text>
      <View style={styles.container}>
        <Button
          style={styles.button}
          appearance="ghost"
          accessoryLeft={MinusIcon}
          onPress={() => setCounter(counter - 1)}
        />
        <Text category="h6" style={styles.counter}>
          {counter}
        </Text>
        <Button
          style={styles.button}
          appearance="ghost"
          accessoryLeft={PlusIcon}
          onPress={() => setCounter(counter + 1)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  button: {
    paddingHorizontal: 20,
  },
  counter: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  title: {
    marginTop: 30,
  },
});

export default CustomCounter;
