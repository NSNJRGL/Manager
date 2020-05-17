import React, {useState, useEffect, createRef} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Button, Layout, Text, Divider} from '@ui-kitten/components';
import Modal from 'react-native-modal';

import CustomTopNavigation from '../components/CustomTopNavigation';
import CustomInput from '../components/CustomInput';
import CustomSelect from '../components/CustomSelect';
import SuccessModal from '../components/SuccessModal';
import CustomCounter from '../components/CustomCounter';
import CustomRating from '../components/CustomRating';

const ResearchScreen = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const scrollViewRef = createRef();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setIsVisible(true);
    });

    return unsubscribe;
  }, [navigation]);

  const onHideModal = () => {
    navigation.navigate('Work');
    setIsVisible(false);
    setFormSubmitted(true);
  };

  const handleScrollTo = (p) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo(p);
    }
  };

  const handleOnScroll = (event) => {
    setScrollOffset(event.nativeEvent.contentOffset.y);
  };

  const handleLeftMenu = (isHide) => {
    setIsVisible(isHide);
  };

  return (
    <View>
      <Modal
        isVisible={isVisible}
        scrollTo={handleScrollTo}
        scrollOffset={scrollOffset}
        scrollOffsetMax={400 - 300}
        propagateSwipe={true}
        style={styles.modal}>
        <View style={styles.scrollableModal}>
          <CustomTopNavigation
            title="Судалгаа илгээх"
            leftIcon={true}
            navigation={navigation}
            handleModalBackButton={handleLeftMenu}
          />
          <ScrollView
            ref={scrollViewRef}
            onScroll={handleOnScroll}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}>
            <View style={styles.listContainer}>
              <Layout style={styles.titleContainer}>
                <Text category="s1">
                  Судалгаа илгээхийн тулд та доорх санал{'\n'} асуулгыг бөглөнө
                  үү!
                </Text>
              </Layout>
              <Divider style={styles.dividerHeight} />
              <Layout style={styles.bodyContainer}>
                <CustomInput label="ОВОГ, НЭР" placeHolder="" />
                <CustomInput label="РЕГИСTЕР" placeHolder="" />
                <CustomInput label="ХОРОО" placeHolder="" />
                <CustomInput label="БАГ" placeHolder="" />
                <CustomInput label="ГУДАMЖ" placeHolder="" />
                <CustomInput label="TООT" placeHolder="" />
                <CustomInput label="ИРГЭНИЙ ХҮСЭЛT" placeHolder="" />
                <CustomInput label="УTАСНЫ ДУГААР" placeHolder="" />
                <CustomCounter title="СОНГОГЧДЫН TОО" />

                <CustomSelect />
                <CustomRating />
              </Layout>
            </View>
          </ScrollView>
          <Button style={styles.button} onPress={onHideModal}>
            СУДАЛГАА ИЛГЭЭХ
          </Button>
        </View>
      </Modal>

      <View>
        {formSubmitted && (
          <SuccessModal
            visible={formSubmitted}
            header="Судалгаа амжилттай илгээгдлээ."
            button="Хаах"
            handlemodal={() => {
              setFormSubmitted(false);
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    margin: 0,
    alignItems: undefined,
    justifyContent: undefined,
  },
  titleContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  bodyContainer: {
    paddingHorizontal: 20,
  },
  dividerHeight: {
    height: 2,
  },
  scrollableModal: {
    flex: 1,
  },
  scrollableModalContent1: {
    height: 200,
    backgroundColor: '#87BBE0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText1: {
    fontSize: 20,
    color: 'white',
  },
  scrollableModalContent2: {
    height: 800,
    backgroundColor: '#A9DCD3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText2: {
    fontSize: 20,
    color: 'white',
  },
  button: {
    borderRadius: 0,
  },
  listContainer: {
    marginBottom: 20,
  },
});

export default ResearchScreen;
