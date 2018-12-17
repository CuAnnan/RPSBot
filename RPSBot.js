let DiscordBot = require('./DiscordBot');

class RPSBot extends DiscordBot
{
    async hoist(client)
    {
        let settings = super.hoist(client);
        return settings;
    }

    attachCommands()
    {
        super.attachCommands();
        this.attachCommand('throw', this.throwRPS);
    }

    throwRPS(commandParts, message)
    {
        let rps = ['Rock', 'Paper', 'Scissors'];
        if(commandParts.indexOf('ls') >= 0)
        {
            rps.push('Lizard', 'Spock');
        }
        let result = rps[Math.floor(Math.random() * rps.length)];
        return message.reply(result);
    }
}

module.exports = RPSBot;