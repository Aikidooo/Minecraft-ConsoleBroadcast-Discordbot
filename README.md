# Minecraft-ConsoleBroadcast-Discordbot
A Discord bot which will broadcast your Minecraft serverconsole to a discord server
## Usage
Clone the repository to a Folder in your Minecraft server files and create a config.json in the directory.
Open a terminal, move to the directory and type `npm init` to initialize the directory, if you don't have Node installed, get it from [here](https://nodejs.org/en/).
Skip through the configuration process and change what you want. 

After that type `npm install discord.js` to install the discord-bot module for node.

Now go back to your config.json and open it. Write 

> {
>  
>   "token": "yourToken",
>
>   "channel": "yourChannelId"
>
> }

to it.

Start your minecraft server via `screen -L -S sessionName` where -S is for the session's name and -L for enabling logs.

In the new Session start your Server and detatch from that screen via `Ctrl+a and d`

Now there should be a `screenlog.0`-file, if the extension is something else than 0, just rename it.

Start the script in the seperate folder with node, `node main.js`, if you don't have Node installed, get it from [here](https://nodejs.org/en/).

The bot should now start sending the contents of `screenlog.0` into the specified channel.