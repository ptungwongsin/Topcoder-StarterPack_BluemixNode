import TextToSpeechService from '../services/TextToSpeechService';

export default {
    voices,
    synthesize
};

async function voices(req, res) {
    var voices = await TextToSpeechService.getVoices();
    res.json(voices);
}

function synthesize(req, res, next) {
    const transcript = TextToSpeechService.synthesize(req.query);
    transcript.on('response', (response) => {
        if (req.query.download) {
            if (req.query.accept && req.query.accept === 'audio/wav') {
                response.headers['content-disposition'] = 'attachment; filename=transcript.wav';
            } else {
                response.headers['content-disposition'] = 'attachment; filename=transcript.ogg';
            }
        }
    });
    transcript.on('error', next);
    transcript.pipe(res);
}
