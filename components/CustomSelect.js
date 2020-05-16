import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '@ui-kitten/components';
import {Picker} from '@react-native-community/picker';

export const CustomSelect = () => {
  const [names, setNames] = useState({language: 'Mан'});

  return (
    <View>
      <Text style={styles.labelStyle}>НАMЫН ХАРЬЯAЛАЛ</Text>
      <Picker
        selectedValue={names}
        style={styles.container}
        onValueChange={(itemValue, itemIndex) => setNames({name: itemValue})}>
        <Picker.Item label="Mонгол ардын нам" value="ман" />
        <Picker.Item label="Mонгол ардын хувьсгалт нам" value="махн" />
        <Picker.Item label="Ардчилсан нам" value="ардчилсан нам" />
        <Picker.Item label="Иргэний зориг нам" value="иргэний зориг нам" />
        <Picker.Item label="Хүн нам" value="хүн нам" />
        <Picker.Item label="Бусад" value="бусад" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#F7F9FC',
    borderColor: '#E4E9F2',
    borderWidth: 2,
    borderRadius: 4,
  },
  inputStyle: {
    paddingTop: 20,
    zIndex: 1000,
  },
  labelStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8F9BB3',
    marginVertical: 20,
  },
});

export default CustomSelect;
