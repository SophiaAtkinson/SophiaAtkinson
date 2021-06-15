        if (message.content.startsWith(`${prefix}kick`)) {
            if (!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) { return message.channel.send('You do not have permission to kick users!'); }
        
        if (!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) { return message.channel.send('I don\'t have the permission for kick users!'); }
        
        if (message.mentions.users.size === 0) { return message.channel.send('You need to mention a user!'); }
        let kickMember = message.guild.member(message.mentions.users.first());
        if (!kickMember) { return message.channel.send('User not found!'); }
        
                kickMember.kick().then((member) => {
                    message.channel.send(member.displayName + " has been successfully kicked from the server.");
                })
            }