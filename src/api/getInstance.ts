import {create} from "../module/createInstance";
import { IInitOption } from '../interface'

export default function (config: IInitOption) {
    return create(config)
}