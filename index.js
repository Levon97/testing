const { google } = require('googleapis');
const { request } = require('gaxios');
const { clouddebugger } = require('googleapis/build/src/apis/clouddebugger');

// Each API may support multiple version. With this sample, we're getting
// v3 of the blogger API, and using an API key to authenticate.
const youtube = google.youtube({
    version: 'v3',
    auth: 'AIzaSyAmZvP-mB_82wcwS0PZ3Pn2gf8RZOOKLP4'
});

const params = {
    part: 'snippet',
    id: 'qflqUpxTZP4'
};
const paramsForList = {
    part: 'snippet',
    videoId: 'qflqUpxTZP4'
};

// get the blog details
// youtube.videos.list(params, (err, res) => {
//   if (err) {
//     console.error(err);
//     throw err;
//   }
//   console.log(res);
// });
// youtube.captions.list(paramsForList, (err, res) => {
//     if (err) {
//       console.error(err);
//       throw err;
//     }
//     console.log(res.data.items);
//   });

// async function getCaptionId() {
//     const res = await youtube.captions.list({
//         part: 'snippet',
//         videoId: 'qflqUpxTZP4'
//     });

//     const gago = res.data.items.filter(item => item.snippet.language === 'en');



//     return gago[0].id;

// };


async function captionDownload() {
    const res = await youtube.captions.download({
        id: 'rJZW4T1TCgvQIZzB2HzRN00aiaz6w8yxJzK729qni1c='
    })

    //  console.log(res)

}


// captionDownload();

// async function enIdes(items){
//    items.
// }

async function main() {
    const res = await request({
        url: 'https://www.googleapis.com/discovery/v1/apis/'

    });
    console.log(res)
}

main()