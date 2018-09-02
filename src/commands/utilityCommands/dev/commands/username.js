module.exports = {
  help: 'change bot username',
  fn: async ({ Memer, msg, args }) => {
    const m = await msg.channel.createMessage(`confirm new name \`(${args.join(' ')})\`? \`y\`/\`n\``)

    const choice = await Memer.MessageCollector.awaitMessage(msg.channel.id, msg.author.id, 5e4)
    if (!choice || choice.content.toLowerCase() !== 'y') {
      return m.edit('whew, dodged a bullet')
    }

    await Memer.bot.editSelf({username: args.join(' ')})
    return `username was updated to **${args.join(' ')}**`
  }
}
