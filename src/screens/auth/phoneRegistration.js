import React, {useRef, useState} from 'react';
import {Button, View, Text} from 'react-native-ui-lib';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import PhoneInput from 'react-native-phone-input';

import {colors} from '../../config/styles';

const PhoneRegistration = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+20');
  const [focus, setFocus] = useState(false);
  const [errors, setErrors] = useState([]);
  const phoneRef = useRef(undefined);

  const phoneStyle = focus
    ? styles.focusBorderStyle
    : errors.phone
    ? styles.errBorderStyle
    : styles.bottomBorderStyle;

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <View paddingH-30 paddingV-20>
      <View paddingT-30>
        <Text style={styles.titleTxt}> What&apos;s your phone number?</Text>
      </View>
      <View paddingV-20>
        <PhoneInput
          ref={phoneRef}
          flagStyle={styles.flagStyle}
          style={{...styles.phoneInput, ...phoneStyle}}
          value={countryCode}
          offset={12}
          initialCountry="eg"
          pickerButtonTextStyle={{fontSize: 20, paddingVertical: 10}}
          onChangePhoneNumber={(value) => {
            setPhoneNumber(value);
          }}
          onSelectCountry={() =>
            setCountryCode(`+${phoneRef.current.getCountryCode()}`)
          }
        />
        {errors.phone ? (
          <Text style={styles.error} color={colors.primaryColor} h6>
            {errors.phone}
          </Text>
        ) : null}
      </View>
      <Button
        h4Reg
        marginT-40
        bg-primaryColor
        disabled={phoneNumber ? false : true}
        label={'Send Code'}
        style={[styles.sendBtn]}
        onPress={() => {
          navigation.navigate('Verification', {
            phoneNumber: phoneNumber,
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    textDecorationLine: 'underline',
  },
  titleTxt: {
    fontWeight: 'bold',
    fontSize: 25,
    color: colors.black,
    paddingBottom: 10,
  },
  sendBtn: {
    width: '100%',
    // padding: 50,
    height: 55,
    borderRadius: 30,
  },
  focusBorderStyle: {
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: colors.primaryColor,
  },
  errBorderStyle: {
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: 'red',
  },
  bottomBorderStyle: {
    borderStyle: 'solid',
    borderBottomWidth: 0.5,
    borderColor: 'blue',
  },
  phoneTxtInput: {
    flex: 1,
    borderWidth: 0,
    borderColor: 'white',
  },
});

export default PhoneRegistration;
