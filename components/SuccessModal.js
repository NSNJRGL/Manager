import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Modal, Button, Layout, Icon} from '@ui-kitten/components';
import UI from '../constants/UI';

const SuccessModal = ({header, body, button, visible, handlemodal}) => {
  return (
    <Modal
      visible={visible}
      backdropStyle={styles.backdrop}
      onBackdropPress={handlemodal}>
      <Layout level="1" style={[styles.modalContainer, UI.dropShadow]}>
        <Icon width={70} height={70} fill="#FA434A" name="checkmark-outline" />
        <View style={styles.textContainer}>
          <Text style={styles.headerModalText}>{header}</Text>
        </View>
        <Button onPress={handlemodal}>{button}</Button>
      </Layout>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: UI.blackOpacity,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: UI.spacing * 2,
    margin: UI.spacing,
    borderRadius: UI.spacing / 4,
  },
  emojiModalText: {
    fontSize: UI.fontLarge * 2,
  },
  headerModalText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textContainer: {
    paddingVertical: 40,
  },
  instructionModalText: {
    fontSize: UI.fontSmall + UI.spacing / 4,
    fontFamily: UI.fontLight,
    textAlign: 'center',
    marginVertical: UI.spacing / 2,
  },
});

export default SuccessModal;
