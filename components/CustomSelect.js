import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '@ui-kitten/components';
import {Picker} from '@react-native-community/picker';
import {YellowBox} from 'react-native';

export const CustomSelect = () => {
  const [value, setValue] = useState('Mонгол ардын нам');

  useEffect(() => {
    YellowBox.ignoreWarnings(['Animated']);
  }, []);

  return (
    <View>
      <Text style={styles.labelStyle}>НАMЫН ХАРЬЯAЛАЛ</Text>
      <Picker
        selectedValue={value}
        style={styles.container}
        onValueChange={(itemValue) => setValue(itemValue)}>
        <Picker.Item label="Mонгол ардын нам" value="Mонгол ардын нам" />
        <Picker.Item label="Ардчилсан нам" value="Ардчилсан нам" />
        <Picker.Item label="Зон олны нам" value="Зон олны нам" />
        <Picker.Item
          label="Дэлхийн Mонголчуудын нам"
          value="Дэлхийн Mонголчуудын нам"
        />
        <Picker.Item label="АTХН" value="АTХН" />
        <Picker.Item
          label="Хөгжлийн хөтөлбөр нам"
          value="Хөгжлийн хөтөлбөр нам"
        />
        <Picker.Item label="Ард түмний нам" value="Ард түмний нам" />
        <Picker.Item label="Mонголын ногоон нам" value="Mонголын ногоон нам" />
        <Picker.Item label="Tа бидний эвсэл" value="Tа бидний эвсэл" />
        <Picker.Item
          label="Шинэ нам, БНН, ҮБЗ нам, MҮАН-ын эсвэл"
          value="Шинэ нам, БНН, ҮБЗ нам, MҮАН-ын эсвэл"
        />
        <Picker.Item
          label="Зөв хүн электрат эвсэл"
          value="Зөв хүн электрат эвсэл"
        />
        <Picker.Item
          label="Эрх чөлөөг хэрэгжүүлэгч нам"
          value="Эрх чөлөөг хэрэгжүүлэгч нам"
        />
        <Picker.Item
          label="Сахигтун үндсэн хуулийн 19 эсвэл"
          value="Сахигтун үндсэн хуулийн 19 эсвэл"
        />
        <Picker.Item
          label="Ард түмний олонхын засаглал нам"
          value="Ард түмний олонхын засаглал нам"
        />
        <Picker.Item
          label="Гэр хороолол хөгжлийн нам"
          value="Гэр хороолол хөгжлийн нам"
        />
        <Picker.Item label="Их эв нам" value="Их эв нам" />
        <Picker.Item
          label="Эх орончдын нэгдсэн нам"
          value="Эх орончдын нэгдсэн нам"
        />
        <Picker.Item label="Бие даагч" value="Бие даагч" />
        <Picker.Item label="Саарал" value="Саарал" />
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
