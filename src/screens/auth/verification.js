import React, {useRef, useState} from 'react';
import {Button, View, Text} from 'react-native-ui-lib';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import {colors} from '../../config/styles';

const CELL_COUNT = 4;

const Verification = ({route, navigation}) => {
  const {phoneNumber} = route.params;
  const [code, setCode] = useState('');
  const [errors, setErrors] = useState([]);
  const ref = useBlurOnFulfill({code, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    code,
    setCode,
  });

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <View paddingH-30 paddingV-50>
      <View paddingT-30>
        <Text style={styles.titleTxt}>What&apos;s the verification code</Text>
        <Text style={styles.subText}>Code sent to +201000000000</Text>
        <TouchableOpacity>
          <Text style={styles.resendBtn}>Resend Button</Text>
        </TouchableOpacity>
      </View>
      <View paddingV-20 paddingH-75>
        <CodeField
          ref={ref}
          {...props}
          value={code}
          onChangeText={setCode}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <View key={index} onLayout={getCellOnLayoutHandler(index)}>
              <Text style={[styles.cell, isFocused && styles.focusCell]}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />
        {errors.code ? (
          <Text style={styles.error} color={colors.primaryColor} h6>
            {errors.code}
          </Text>
        ) : null}
      </View>
      <Button
        h4Reg
        marginT-40
        bg-primaryColor
        disabled={code ? false : true}
        label={'Verify'}
        style={[styles.sendBtn]}
        onPress={() => {
          console.log('verify');
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
  subText: {
    fontSize: 15,
    color: colors.gray,
  },
  resendBtn: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.cyan,
    marginTop: 5
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
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderBottomWidth: 2,
    borderBottomColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});

export default Verification;
