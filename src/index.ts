import type { API } from 'homebridge';
import TplinkSmarthomePlatform from './platform';

export = (api: API): void => {
  api.registerPlatform(
    'homebridge-tplink-smarthome',
    'TplinkSmarthomePlatform',
    TplinkSmarthomePlatform
	);
};
