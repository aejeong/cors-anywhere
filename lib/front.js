const axios = require('axios');

module.exports = function _setAuthToken(KEYS) {
    return axios
      .create({
        baseURL: KEYS.BASE_URL,
        async: true,
        crossDomain: true,
        headers: {
          version: '1.0',
        },
      })
      .post('/auth/token/long-lived', {
        grant_type: 'authorization_code',
        client_id: KEYS.SYSTEM_KEY,
        redirect_uri: 'https://trumpetmall.com',
        code: KEYS.SYSTEM_CODE,
        client_secret: KEYS.SECRET_KEY,
      });
  };

//   https://nhn-trumpetmall.koyeb.app/