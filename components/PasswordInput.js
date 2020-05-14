import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Input, Icon, Text} from '@ui-kitten/components';

const PasswordInput = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const onIconPress = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderPhoneIcon = (style) => <Icon {...style} name={'phone-outline'} />;

  const renderPasswordIcon = (style) => (
    <Icon {...style} name={secureTextEntry ? 'eye-off' : 'eye'} />
  );

  const label = (text) => <Text style={styles.labelStyle}>{text}</Text>;

  return (
    <>
      <Input
        label={label('УTАСНЫ ДУГААР')}
        value={phone}
        placeholder="00000000"
        accessoryRight={renderPhoneIcon}
        textStyle={styles.textStyle}
        onChangeText={setPhone}
      />
      <Input
        label={label('НУУЦ ҮГ')}
        style={styles.password}
        value={password}
        placeholder="********"
        accessoryRight={renderPasswordIcon}
        textStyle={styles.textStyle}
        onIconPress={onIconPress}
        onChangeText={setPassword}
      />
    </>
  );
};

const styles = StyleSheet.create({
  password: {
    marginTop: 20,
  },
  textStyle: {
    fontSize: 18,
  },
  labelStyle: {
    fontSize: 12,
    color: '#8F9BB3',
    fontWeight: 'bold',
  },
});

export default PasswordInput;
