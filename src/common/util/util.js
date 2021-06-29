export default {
  /**
   * @param {Object} obj JSON Object
   */
  deepClone (obj) {
    return JSON.parse(JSON.stringify(obj))
  },
  // default language
  getBrowserLanguage () {
    return navigator.language === 'en-US' ? 'en-US' : navigator.language
  },
}