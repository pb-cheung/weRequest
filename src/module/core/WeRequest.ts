import init from "../../api/init"
import request from "../../api/request"
import uploadFile from "../../api/uploadFile"
import setSession from "../../api/setSession"
import login from "../../api/login"
import getSession from "../../api/getSession"
import getConfig from "../../api/getConfig"
import { IInitOption } from "../../interface"
import { version } from '../../version'

class WeRequest {
    // @ts-ignore
    constructor (config: IInitOption) {
    }
}
// @ts-ignore
WeRequest.prototype.init = init;
// @ts-ignore
WeRequest.prototype.request = request;
// @ts-ignore
WeRequest.prototype.uploadFile = uploadFile;
// @ts-ignore
WeRequest.prototype.setSession = setSession;
// @ts-ignore
WeRequest.prototype.login = login;
// @ts-ignore
WeRequest.prototype.getSession = getSession;
// @ts-ignore
WeRequest.prototype.getConfig = getConfig;
// @ts-ignore
WeRequest.prototype.version = version;

export default WeRequest;