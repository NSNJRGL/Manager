import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Input, Text} from '@ui-kitten/components';

export const CustomInput = ({label, placeholder}) => {
  const [value, setValue] = useState('');

  const renderLabel = () => (
    <Text category="label" style={styles.labelStyle}>
      {label}
    </Text>
  );

  return (
    <Input
      value={value}
      label={renderLabel}
      placeholder={placeholder}
      onChangeText={(nextValue) => setValue(nextValue)}
      style={styles.inputStyle}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    paddingTop: 20,
  },
  labelStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8F9BB3',
    marginBottom: 10,
  },
});

export default CustomInput;
