import React, {useState, createRef, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Button, Layout, Divider, Icon, Text} from '@ui-kitten/components';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';
import Geolocation from '@react-native-community/geolocation';

import CustomTopNavigation from '../components/CustomTopNavigation';
import CustomCounter from '../components/CustomCounter';
import CustomTextArea from '../components/CustomTextArea';
import RenderImage from '../components/RenderImage';

const CameraIcon = (props) => <Icon {...props} name="camera-outline" />;

const ReportComponent = ({visible, navigation, onHandleModal}) => {
  const [scrollOffset, setScrollOffset] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [images, setImages] = useState([]);
  const [currentLat, setCurrentLat] = useState(0);
  const [currentLong, setcurrentLong] = useState(0);
  const scrollViewRef = createRef();

  useEffect(() => {
    Geolocation.getCurrentPosition((info) => {
      setCurrentLat(info.coords.latitude);
      setcurrentLong(info.coords.longitude);
    });
  }, []);

  const handleScrollTo = (p) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo(p);
    }
  };

  const handleOnScroll = (event) => {
    setScrollOffset(event.nativeEvent.contentOffset.y);
  };

  const handleLeftMenu = () => {
    setIsVisible(false);
    onHandleModal(false);
  };

  const handleSubmit = () => {
    setIsVisible(false);
    onHandleModal(true);
  };

  const handleGallery = () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then((response) => {
      const size = 10;

      setImages(
        response.slice(0, size).map((i) => {
          return {uri: i.path, width: i.width, height: i.height, mime: i.mime};
        }),
      );
    });
  };

  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      scrollTo={handleScrollTo}
      scrollOffset={scrollOffset}
      scrollOffsetMax={400 - 300}
      propagateSwipe={true}>
      <View style={styles.scrollableModal}>
        <CustomTopNavigation
          title="Tайлан илгээх"
          leftIcon={true}
          navigation={navigation}
          handleModalBackButton={handleLeftMenu}
          setBack={true}
        />
        <ScrollView
          ref={scrollViewRef}
          onScroll={handleOnScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}>
          <Layout style={styles.titleContainer}>
            <Text category="s1">
              Tайлан илгээхийн тулд та доорх санал{'\n'} асуулгыг бөглөнө үү!
            </Text>
          </Layout>
          <Divider style={styles.dividerHeight} />
          <Layout style={styles.bodyContainer}>
            <Text category="h6" style={styles.title}>
              Зураг оруулна уу(дээд тал нь 10-н зураг)
            </Text>
            <Button
              style={styles.button}
              size="small"
              status="primary"
              accessoryLeft={CameraIcon}
              onPress={handleGallery}>
              Зураг сонгох
            </Button>
            {images && <RenderImage images={images} />}
            <CustomCounter title="Хэдэн хүнтэй уулзсан бэ?" />
            <CustomCounter title="Хэдэн материал тараасан бэ?" />

            <CustomTextArea
              label="TЭMДЭГЛЭЛ"
              placeholder="Аа"
              multiline={true}
            />
          </Layout>
        </ScrollView>
        <Button onPress={handleSubmit} style={styles.button}>
          TАЙЛАН ИЛГЭЭХ
        </Button>
      </View>
    </Modal>
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
    padding: 20,
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
  title: {
    marginBottom: 20,
  },
});

export default ReportComponent;
