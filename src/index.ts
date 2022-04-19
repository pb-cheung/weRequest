import WeRequest from "./module/core/WeRequest";
import defaultConfig from "./store/config";
import getInstance from "./api/getInstance";

const weRequest = getInstance(defaultConfig);

// @ts-ignore
weRequest.WeRequest = WeRequest;

// @ts-ignore
weRequest.create = getInstance

export default weRequest;
