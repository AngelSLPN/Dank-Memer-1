const { GenericVoiceCommand } = require('../../models/');

module.exports = new GenericVoiceCommand({
  triggers: ['airhorn', 'horn'],
  description: 'Who needs a bot just for airhorns when your meme bot does it all?',

  existingConn: 'I only have one airhorn, dude. Please wait until the current sound is done, you assbutt',
  dir: 'horns',
  reaction: '😃',
<<<<<<< Updated upstream:src/commands/soundCommands/airhorn.js
  ext: 'opus',
  ownerOnly: true
})
=======
  ext: 'opus'
});
>>>>>>> Stashed changes:scripts/soundCommands/airhorn.js
