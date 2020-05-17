import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text} from '@ui-kitten/components';
import {AirbnbRating} from 'react-native-ratings';

export const CustomRating = () => {
  const [starCount, setStarCount] = useState(0);

  return (
    <>
      <Text style={styles.labelStyle}>СЭTГЭЛ ХАНАMЖ</Text>
      <AirbnbRating
        count={5}
        onFinishRating={(rating) => setStarCount(rating)}
        defaultRating={1}
        size={40}
        reviews={['Mаш муу', 'Mуу', 'Дунд', 'Сайн', 'Mаш сайн']}
      />
    </>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8F9BB3',
    marginVertical: 20,
  },
});

export default CustomRating;
