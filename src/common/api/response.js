export default {
  /**
   * @param {Object} res response object of Express
   * @param {Number} expectedStatus expected status
   */
  create (res, expectedStatus) {
    const success = res.status === expectedStatus
    return Object.assign({}, {
      success: success,
      body: res.data
    })
  }
}

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
}