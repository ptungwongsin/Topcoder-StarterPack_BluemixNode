function TextToSpeech() {}

TextToSpeech.getSpeaker = function () {
    var speaker = document.getElementById('speaker');
    if (!speaker) {
        speaker = document.createElement('audio');
        speaker.setAttribute('id', 'speaker');
        document.body.appendChild(speaker);
    }
    return speaker;
};

TextToSpeech.speak = function (text) {
    var speaker = TextToSpeech.getSpeaker();
    speaker.src = '/api/synthesize?' + $.param({ voice: 'en-US_MichaelVoice', text: text });
    speaker.pause();
    speaker.load();
    speaker.oncanplaythrough = function () { speaker.play(); };
};
