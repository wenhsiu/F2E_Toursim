import axios from 'axios';
import jsSHA from 'jssha';

const GetAuthorizationHeader = () => {
  const AppID = '3b3a0c46f62548598dbc0d505f03cc0a';
  const AppKey = 'yylcrlrrmCFayh4ugsPC8yG7aSk';

  const GMTString = new Date().toGMTString();
  const ShaObj = new jsSHA('SHA-1', 'TEXT');
  ShaObj.setHMACKey(AppKey, 'TEXT');
  ShaObj.update('x-date: ' + GMTString);
  const HMAC = ShaObj.getHMAC('B64');
  const Authorization =
    'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"';

  return { Authorization: Authorization, 'X-Date': GMTString, 'Accept-Encoding': 'gzip' };
};

export const getSightInfo = ({ latitude, longitude }) =>
  axios({
    method: 'get',
    url: `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Tainan?$top=1&$spatialFilter=nearby(${latitude},${longitude},100)&$format=JSON`,
    header: GetAuthorizationHeader(),
    dataType: 'json',
  }).then((resp) => resp.data?.[0] || []);
