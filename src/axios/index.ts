import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const config: AxiosRequestConfig = {
    baseURL: 'asd'
}

export const axios: AxiosInstance = Axios.create(config)
    