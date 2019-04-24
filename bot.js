const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})

//recieve commands
client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }
    
    if (receivedMessage.content.startsWith("$$")) {
        processCommand(receivedMessage)
    }
})

//command args
function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(2) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0].toLowerCase() // The first word directly after the exclamation is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
	
    //console.log("Command received: " + primaryCommand)
    //console.log("Arguments: " + arguments) // There may not be any arguments
	
    if (primaryCommand == "donate") {
        receivedMessage.channel.send("https://patreon.com/boiledcurry \nhttps://ko-fi.com/boiledcurry")
    } else if (primaryCommand == "social") {
        receivedMessage.channel.send("https://instagram.com/boiledcurry \nhttps://www.facebook.com/boiledcurry/ \nhttps://twitter.com/boiledcurry \nhttps://www.twitch.tv/BoiledCurryOwO")
    } else if (primaryCommand == "patreon") {
        receivedMessage.channel.send("https://patreon.com/boiledcurry")
    } else if (primaryCommand == "ko-fi") {
        receivedMessage.channel.send("https://ko-fi.com/boiledcurry")
    } else if (primaryCommand == "kofi") {
        receivedMessage.channel.send("https://ko-fi.com/boiledcurry")
    } else if (primaryCommand == "kf") {
        receivedMessage.channel.send("https://ko-fi.com/boiledcurry")
    } else if (primaryCommand == "instagram") {
        receivedMessage.channel.send("https://instagram.com/boiledcurry")
    } else if (primaryCommand == "ig") {
        receivedMessage.channel.send("https://instagram.com/boiledcurry")
    } else if (primaryCommand == "facebook") {
        receivedMessage.channel.send("https://www.facebook.com/boiledcurry/")
    } else if (primaryCommand == "fb") {
        receivedMessage.channel.send("https://www.facebook.com/boiledcurry/")
    } else if (primaryCommand == "twitter") {
        receivedMessage.channel.send("https://twitter.com/boiledcurry")
    } else if (primaryCommand == "twitch") {
        receivedMessage.channel.send("https://www.twitch.tv/BoiledCurryOwO")
    } else if (primaryCommand == "dab") {
        dab(receivedMessage);
    } else if (primaryCommand == "commands") {
        receivedMessage.channel.send("**batch links**\n`$$donate` - donation links\n`$$social` - social media links\n\n**individual links**:\n`$$patreon` - share patreon link\n`$$ko-fi` or `$$kofi` or `$$kf` - share ko-fi link\n`$$instagram` or `$$ig` - share instagram link\n`$$facebook` or `$$fb` - share facebook link\n`$$twitter` - share twitter link\n`$$twitch` - share twitch link\n\n**other:**\n`$$dab` - react or post a dab")
    } // else {receivedMessage.channel.send("I don't understand the command. Try `$help` (actually zync will add $help and $commands later)")}
	
}

//vegetal
client.on('message', (receivedMessage) => {
	if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }
	
	if (receivedMessage.content.toLowerCase().includes("vegetal")) {
		const ban = client.emojis.get("567589999441346560");
		switch(Math.floor(Math.random() * 3)) {
			case 0:
				receivedMessage.react(ban)
			break;
			case 1:
				receivedMessage.channel.send("<:ban:567589999441346560>")
			break;
			case 2:
				const localFileAttachment = new Discord.Attachment('blobban.png')
				receivedMessage.channel.send(localFileAttachment)
			break;
		}
	}
 //   if (receivedMessage.content.includes("vegetal")) {
 //       const localFileAttachment = new Discord.Attachment('blobban.png')
//		receivedMessage.channel.send(localFileAttachment)
 //   }
})

//owo
client.on('message', (receivedMessage) => {
	if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }
	
    if (receivedMessage.content.toLowerCase().includes("owo")) {
		switch(Math.floor(Math.random() * 3)) {
			case 0:
				receivedMessage.channel.send("uwu")
			break;
			case 1:
				receivedMessage.channel.send("UwU")
			break;
			case 2:
				receivedMessage.channel.send("UWU")
			break;
		}
    }
})

//uwu
client.on('message', (receivedMessage) => {
	if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }
	
    if (receivedMessage.content.toLowerCase().includes("uwu")) {
		switch(Math.floor(Math.random() * 3)) {
			case 0:
				receivedMessage.channel.send("owo")
			break;
			case 1:
				receivedMessage.channel.send("OwO")
			break;
			case 2:
				receivedMessage.channel.send("OWO")
			break;
		}
    }
})

//dab function
function dab(receivedMessage){
	const dab = client.emojis.get("567305894233112596");
	switch(Math.floor(Math.random() * 3)) {
		case 0:
			receivedMessage.react(dab)
		break;
		case 1:
			receivedMessage.channel.send("<:karen_dab:567305894233112596>")
		break;
		case 2:
			const localFileAttachment = new Discord.Attachment('karen_dab.png')
			receivedMessage.channel.send(localFileAttachment)
		break;
	}
}

client.login("discord app token goes here")