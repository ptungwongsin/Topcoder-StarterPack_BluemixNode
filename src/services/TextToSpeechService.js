import TextToSpeechV1 from 'watson-developer-cloud/text-to-speech/v1';

var textToSpeech = new TextToSpeechV1();

export default {
    getVoices,
    synthesize
};

function getVoices() {
    return new Promise((resolve, reject) => {
        textToSpeech.voices(null, function(error, voices) {
        if (error) {
            reject(error);
        } else
            resolve(voices);
        });
    });
}

function synthesize(params) {
    return textToSpeech.synthesize(params);
}
