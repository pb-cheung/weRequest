// import defaultConfig from '../store/config'
import { IInitOption } from '../interface'
import WeRequest from "./core/WeRequest";

function create (instanceConfig: IInitOption) {
    const instance = new WeRequest(instanceConfig)
    return instance
}

export {create}