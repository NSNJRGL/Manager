import React from 'react';
import {Text, StyleSheet, ImageBackground, View} from 'react-native';
import {Layout} from '@ui-kitten/components';

import CustomTopNavigation from '../components/CustomTopNavigation';

const BannerDetailScreen = (props) => {
  return (
    <Layout style={styles.container}>
      <CustomTopNavigation
        title={props.route.params && props.route.params.title}
        leftIcon={true}
        navigation={props.navigation}
      />
      <Layout style={styles.header} level="1">
        <Text style={styles.titleLabel} category="h4">
          Сонгууль явуулдаг үндсэн гурван систем байдаг: мажоритар, пропорционал
          болон холимог.
        </Text>
        <ImageBackground
          style={styles.image}
          source={{
            uri:
              'https://firebasestorage.googleapis.com/v0/b/election-manager-277213.appspot.com/o/assets%2Fbanner.jpg?alt=media&token=e7438852-8d7d-4937-8934-5c594a581ed1',
          }}
        />
        <Text style={styles.contentLabel}>
          Пропорционал систем нь улс төрийн хүчнүүдийн /намууд/ рейтинг
          тогтоодог. Өөрөөр хэлбэл улс төрийн хүчнүүдийн авсан саналыг
          пропорцоор нь суудлыг нь хувиаралдаг.{' '}
        </Text>
        <View style={styles.authoringContainer}>
          <Text appearance="hint" category="p2">
            Мажоритар гэдэг нь /франц гаралтай Majoritee/ олонхи гэсэн үг. Энэ
            системээр сонгогчид намуудыг бус тодорхой нэр дэвшигчийг сонгодог.
            Ийм системээр энгийн олонх буюу ердийн олонх /нэг ч болов санал илүү
            авсан бол/ санал авсан нэр дэвшигч суудал авдаг.
          </Text>
          <Text style={styles.dateLabel} appearance="hint" category="p2">
            2020.06.02
          </Text>
          <Text style={styles.owner} appearance="hint" category="p2">
            Б.Насанжаргал
          </Text>
        </View>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginBottom: 8,
  },
  image: {
    height: 240,
  },
  titleLabel: {
    marginHorizontal: 24,
    marginVertical: 16,
    fontWeight: 'bold',
  },
  descriptionLabel: {
    margin: 24,
  },
  contentLabel: {
    margin: 24,
  },
  authoringContainer: {
    flexDirection: 'column',
    marginHorizontal: 24,
  },
  dateLabel: {
    marginTop: 40,
    color: '#C5CEDF',
  },
  owner: {
    fontSize: 14,
    color: '#C5CEDF',
  },
});

export default BannerDetailScreen;
