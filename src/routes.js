/**
 * Contains all application endpoints
 */

import TestController from './controllers/TestController';
import PersonalityInsightsConstroller from './controllers/PersonalityInsightsConstroller';
import TextToSpeechController from './controllers/TextToSpeechController';

export default {
  '/test': {
    get: {
      method: TestController.testMethod,
      public: true,
    },
  },
  '/profile': {
    get: {
      method: PersonalityInsightsConstroller.getProfile,
      public: true
    }
  },
  '/voices': {
    get: {
      method: TextToSpeechController.voices,
      public: true
    }
  },
  '/synthesize': {
    get: {
      method: TextToSpeechController.synthesize,
      public: true
    }
  }
};
