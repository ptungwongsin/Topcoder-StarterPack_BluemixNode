/**
 * Contains all application endpoints
 */

import TestController from './controllers/TestController';
import PersonalityInsightsConstroller from './controllers/PersonalityInsightsConstroller.js';

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
      public:true
    }
  }
};
