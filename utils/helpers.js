import _ from 'lodash';
import {Linking, Platform, Dimensions} from 'react-native';
import ShortId from './shortId';


const {height, width} = Dimensions.get('window');

const helpers = {
  /**
   * Generate a new guid
   * @return {string}
   */


  generateShortId() {
    const uid = new ShortId();
    return uid.randomUUID(8);
  },
  generateUniqueId(length) {
    const uid = new ShortId();
    return uid.randomUUID(length || 32);
  },
  
  stringIsEmpty(str) {
    return !str || /^\s*$/.test(str);
  },
  /**
   * Check object if null or empty
   * @param obj
   * @return {boolean}
   */
  isNullOrEmpty(obj) {
    return !!(_.isNull(obj) || _.isEmpty(obj) || _.isUndefined(obj));
  },
  /**
   * Check object if null or undefined
   * @param obj
   * @return {boolean}
   */
  isNullOrUndefined(obj) {
    return !!(_.isNull(obj) || _.isUndefined(obj));
  },
  /**
   * Resize image
   * @param image_width
   * @param image_height
   * @param imageWidth
   * @return {{width: *, height: number}}
   */
  resizeImage(image_width, image_height, imageWidth) {
    const imageSize = {
      width: imageWidth,
      height: (imageWidth * image_height) / image_width,
    };
    return imageSize;
  },
  /**
   * Integer casting
   * @param input
   * @param output
   * @return {*}
   */
  convertToInt(input, output) {
    try {
      return parseInt(input);
    } catch (e) {
      return output;
    }
  },
  convertMinsToHrsMins(mins) {
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    h = h < 10 ? `0${h}` : h;
    m = m < 10 ? `0${m}` : m;
    return `${h}:${m}`;
  },

};

export default helpers;
