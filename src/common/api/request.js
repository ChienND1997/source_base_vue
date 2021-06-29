export default {
  /**
   * @param {String} path request url
   * @param {Object} body request body
   */
  create (path, body) {
    return Object.assign({}, {
      path: path,
      body: body
    })
  }
}