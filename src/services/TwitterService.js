import Twitter from 'twitter';

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

export default {
    getTweets
}

function getTweets(user) {
    return new Promise((resolve, reject) => {
        client.get('search/tweets', { q: 'from:' + user }, function(error, tweet, response) {
            if (error) {
                reject(error);
            } else {
                var statusMessages = [];
                tweet.statuses.forEach((status) => {
                    statusMessages.push(status.text);
                });
                resolve(statusMessages);
            }
        });
    });
}
