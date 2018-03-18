const { GenericCommand } = require('../../models/')

module.exports = new GenericCommand(
  async ({Memer, msg}) => {
    let pls = await Memer.db.topUsers()
    let [a, b, c, d, e] = pls
    let numOne = await Memer.bot.users.get(a.id)
    let numTwo = await Memer.bot.users.get(b.id)
    let numThree = await Memer.bot.users.get(c.id)
    let numFour = await Memer.bot.users.get(d.id)
    let numFive = await Memer.bot.users.get(e.id)
    // console.log(numOne.name)
    // let top = pls.map(oof => `${Memer.ipc.fetchGuild(oof.id).name}: ${oof.pls} commands ran.`)
    return {
      title: 'Top 5 users (Commands Ran)',
      description: `🥇 ${a.pls} - ${numOne.username + '#' + numOne.discriminator}\n🥈 ${b.pls} - ${numTwo.username + '#' + numTwo.discriminator}\n🥉 ${c.pls} - ${numThree.username + '#' + numThree.discriminator}\n👏 ${d.pls} - ${numFour.username + '#' + numFour.discriminator}\n👏 ${e.pls} - ${numFive.username + '#' + numFive.discriminator}`
    }
  },
  {
    triggers: ['topusers', 'ulb'],
    description: 'this is in beta, pls no breaking it'
  }
)
