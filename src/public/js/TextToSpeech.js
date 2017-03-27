class TextToSpeech {
    static get speaker() {
        var speaker = document.getElementById('speaker');
        if (!speaker) {
            speaker = document.createElement('audio');
            document.body.appendChild(speaker);
        }
        return speaker;
    }

    static speak(text) {
        var speaker = TextToSpeech.speaker;
        speaker.src = '/api/synthesize?' + $.param({ voice: 'en-US_MichaelVoice', text: text });
        speaker.pause();
        speaker.load();
        speaker.oncanplaythrough = () => { speaker.play(); };
    }
}
