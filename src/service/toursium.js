import axios from 'axios';
import jsSHA from 'jssha';

const GetAuthorizationHeader = () => {
  const GMTString = new Date().toGMTString();
  const ShaObj = new jsSHA('SHA-224', 'TEXT');
  // eslint-disable-next-line no-undef
  ShaObj.setHMACKey(process.env.REACT_APP_API_KEY, 'TEXT');
  ShaObj.update('x-date: ' + GMTString);
  const HMAC = ShaObj.getHMAC('B64');
  const Authorization =
    'hmac username="' +
    // eslint-disable-next-line no-undef
    process.env.REACT_APP_API_ID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"';

  return { Authorization: Authorization, 'X-Date': GMTString };
};

export const getSightInfo = ({ latitude, longitude }) =>
  axios({
    method: 'get',
    url: `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Tainan?$top=1&$spatialFilter=nearby(${latitude},${longitude},100)&$format=JSON`,
    headers: GetAuthorizationHeader(),
    dataType: 'json',
  }).then((resp) => resp.data?.[0] || []);
