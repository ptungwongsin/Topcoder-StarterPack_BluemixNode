const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');

const personalityInsights = new PersonalityInsightsV3({
    // If unspecified here, the PERSONALITY_INSIGHTS_USERNAME and
    // PERSONALITY_INSIGHTS_PASSWORD env properties will be checked
    // After that, the SDK will fall back to the bluemix-provided
    // VCAP_SERVICES environment property
    // username: '<username>',
    // password: '<password>',
    version_date: '2016-10-19',
});

module.exports = {
    getProfile: (params) => {
        return new Promise((resolve, reject) => {
            if (params.language) {
                params.headers = {
                    'Content-Language': params.language,
                };
            }
            personalityInsights.profile(params, (err, profile) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(profile);
                }
            });
        });
    }
};
