import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';

import CustomTopNavigation from '../components/CustomTopNavigation';

const LegalScreen = ({navigation}) => {
  return (
    <Layout style={styles.container}>
      <CustomTopNavigation
        title="Хууль тогтоомж"
        leftIcon={true}
        navigation={navigation}
      />
      <Layout style={styles.innerContainer}>
        <Text style={styles.titleText}>ЕРӨНХИЙ ҮНДЭСЛЭЛ</Text>
        <Text style={styles.description}>
          1.1. Энэ хуулийн зорилт нь Монгол Улсын Ерөнхийлөгч /цаашид
          “Ерөнхийлөгч” гэх/, түүнчлэн аймаг, нийслэл, сум, дүүргийн иргэдийн
          Төлөөлөгчдийн хурал /цаашид “орон нутгийн хурал” гэх/-ын сонгууль,
          үндсэн зарчим, журмыг тодорхойлж, эдгээр сонгуулийг зохион байгуулж
          явуулахтай холбогдсон харилцааг зохицуулахад оршино.
        </Text>
        <Text style={styles.description}>
          3.1.Энэ хуульд хэрэглэсэн дараах нэр томьёог доор дурдсан утгаар
          ойлгоно:
        </Text>
        <Text style={styles.description}>
          3.1.1.“сонгуулийн эрх бүхий иргэн” гэж арван найман нас хүрсэн,
          иргэний бүртгэлд бүртгүүлсэн, эрх зүйн бүрэн чадамжтай Монгол Улсын
        </Text>
        <Text style={styles.description}>
          3.1.2.“сонгогч” гэж сонгогчдын нэрийн жагсаалтад бүртгэсэн, сонгуулийн
          эрх бүхий иргэнийг;
        </Text>
        <Text style={styles.description}>
          3.1.3.“нэр дэвшигч” гэж энэ хуульд заасан журмын дагуу тухайн
          сонгуульд нэр дэвшиж бүртгүүлсэн, нэр дэвшигчийн үнэмлэх авсан
          иргэнийг;
        </Text>
        <Text style={styles.description}>
          3.1.4.“сонгуулийн жил” гэж дөрвөн жил тутам явагдах явагдах ээлжит
          сонгуулийн жилийг;
        </Text>
        <Text style={styles.description}>
          3.1.5.“онцгой нөхцөл байдал үүссэн” гэж сонгуулийг зохих ёсоор
          явуулахад урьдчилан төлөвлөөгүй, төлөвлөх боломжгүй нэмэлт зардал,
        </Text>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 15,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  description: {
    marginBottom: 20,
    color: '#8F9BB3',
    fontSize: 15,
  },
});

export default LegalScreen;
