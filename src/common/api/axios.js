import axios from 'axios'
import appConfig from '../../../config/app-config.json'

const HTTP_STATUS_UNAUTHORIZED = 401

const createInstance = (config) => {
  if (typeof config === 'string') {
    config = { baseURL: config }
  }
  const instance = axios.create(config)
  return instance
}

const onSuccess = (res) => {
  if (res.status == HTTP_STATUS_UNAUTHORIZED) {
    location.href = 'login'
  }
  return Promise.resolve(res)
}

const onError = (err) => {
  throw new Error(err)
}

export default {
  get: (url, params, config) => {
    if (!config) { config = appConfig.api.BaseUrl.default }
    const instance = createInstance(config)
    return instance.get(url, { params: params }).then(onSuccess).catch(onError)
  },
  post: (url, data, config) => {
    if (!config) { config = appConfig.api.BaseUrl.default }
    const instance = createInstance(config)
    return instance.post(url, data).then(onSuccess).catch(onError)
  },
  put: (url, data, config) => {
    if (!config) { config = appConfig.api.BaseUrl.default }
    const instance = createInstance(config)
    return instance.put(url, data).then(onSuccess).catch(onError)
  },
  patch: (url, data, config) => {
    if (!config) { config = appConfig.api.BaseUrl.default }
    const instance = createInstance(config)
    return instance.patch(url, data).then(onSuccess).catch(onError)
  },
  delete: (url, params, config) => {
    if (!config) { config = appConfig.api.BaseUrl.default }
    const instance = createInstance(config)
    return instance.delete(url, { params: params }).then(onSuccess).catch(onError)
  }
}