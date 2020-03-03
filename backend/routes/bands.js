const axios = require("axios")

module.exports = ({ bandsRouter }) => {
  // getting the home route
  bandsRouter.get('/bands/umphreys.json', async (ctx, next) => {
    console.log('umphreys route hit')
    await axios.get('https://api.setlist.fm/rest/1.0/search/setlists?artistMbid=3826a6e0-9ea5-4007-941c-25b9dd943981&p=1', {
      headers: {
        'x-api-key': process.env.SETLISTFM_KEY,
        'User-Agent':'Setlistr.io',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Host': 'api.setlist.fm',
        'Connection': 'keep-alive'
      }
    })
      .then(res => {
        // console.log(res.data, typeof(res.data))
        ctx.body = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  });
};