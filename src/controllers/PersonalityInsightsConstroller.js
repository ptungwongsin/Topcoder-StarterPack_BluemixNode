import PersonalityInsightsService from '../services/PersonalityInsightsService';
import TwitterService from '../services/TwitterService';

export default {
    getProfile
};

async function getProfile(req, res) {
    try {
        var tweets = await TwitterService.getTweets(req.query['u']);
        var contentItems = [];
        tweets.forEach((message) => {
            contentItems.push({
                content: message
            });
        });

        var result = await PersonalityInsightsService.getProfile({ content_items: contentItems });
        res.json(result);
    } catch (error) {
        res.json(error);
    }
}
