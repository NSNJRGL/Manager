import React, {useState, createRef} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Button, Layout, Divider, Icon} from '@ui-kitten/components';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-picker';

import CustomTopNavigation from '../components/CustomTopNavigation';
import CustomCounter from '../components/CustomCounter';
import CustomTextArea from '../components/CustomTextArea';
import RenderImage from '../components/RenderImage';

const CameraIcon = (props) => <Icon {...props} name="camera-outline" />;

const ReportComponent = ({visible, navigation, onHandleModal}) => {
  const [scrollOffset, setScrollOffset] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [filePath, setFilePath] = useState(null);
  const [fileData, setFileData] = useState(null);
  const [fileUri, setFileUri] = useState(null);
  const scrollViewRef = createRef();

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
    onHandleModal(false);
  };

  const handleGallery = () => {
    let options = {
      title: 'Зургаа сонгоно уу',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setFilePath(response);
        setFileData(response.data);
        setFileUri(response.uri);
      }
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
            <Button
              style={styles.button}
              status="primary"
              accessoryLeft={CameraIcon}
              onPress={handleGallery}>
              Зураг сонгох
            </Button>
            {fileData && <RenderImage fileData={fileData} />}
            <CustomCounter title="Хэдэн хүнтэй уулзсан бэ?" />
            <CustomCounter title="Хэдэн материал тараасан бэ?" />

            <CustomTextArea
              label="TЭMДЭГЛЭЛ"
              placeholder="Аа"
              multiline={true}
            />
          </Layout>
        </ScrollView>
        <Button onPress={handleLeftMenu}>TАйЛАН ИЛГЭЭХ</Button>
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
    paddingTop: 20,
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
});

export default ReportComponent;
