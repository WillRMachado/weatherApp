import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {measures} from '../../styles/index';
import {useTheme} from '@react-navigation/native';
import PrimaryButton from '../button/PrimaryButton';
import TranslateText from '../translate/TranslateText';
import {themeColorsTypes} from '../../styles/themes/themesType';

const CustomModal = () => {
  const {colors}: themeColorsTypes = useTheme();
  const styles = dynamicStyles(colors);

  return (
    <Modal
      isVisible={true}
      onBackdropPress={() => {
        console.log('aaa');
      }}
      style={styles.modalContainer}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={styles.modalTitle}>
          <TranslateText string={'aseasease'} style={styles.modalTitleText} />
        </View>
        <View style={styles.modalContent}>
          <TranslateText string={'aseasease'} style={styles.modalContentText} />

          <PrimaryButton
            text={'texto'}
            onPress={() => {
              console.log('btn');
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const dynamicStyles = (colors: themeColorsTypes) =>
  StyleSheet.create({
    modalContainer: {margin: measures.standardPadding},
    modalTitle: {
      backgroundColor: colors.primary,
      borderTopEndRadius: measures.border.borderRadiusStandard,
      borderTopStartRadius: measures.border.borderRadiusStandard,
      alignContent: 'center',
      alignItems: 'center',
      borderWidth: measures.border.borderWidthStandard,
      borderColor: colors.secondary,
    },
    modalTitleText: {
      textAlign: 'center',
      color: colors.secondary,
      fontSize: measures.fontSize.L,
      paddingTop: measures.standardPadding / 2,
      paddingBottom: measures.standardPadding / 2,
    },
    modalContent: {
      backgroundColor: colors.secondary,
      alignItems: 'center',
      borderBottomRightRadius: measures.border.borderRadiusDetail,
      borderBottomLeftRadius: measures.border.borderRadiusDetail,
    },
    modalContentText: {
      textAlign: 'center',
      color: colors.primary,
      fontSize: measures.fontSize.M,
      paddingTop: measures.standardPadding / 2,
      paddingBottom: measures.standardPadding / 2,
    },
  });
