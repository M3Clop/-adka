const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("Tu bot senpai esta listo para funcionar Clopsito");
 
  client.user.setGame(prefix+'Comando |Bot Programado por M3Clop');

});
var prefix = config.prefix;

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;
 
  if (message.content.startsWith(prefix + "Eh Vedah")) {
    message.channel.send("Eh Vedah y NUNCA Eh Mentira");
  } else
  if (message.content.startsWith(prefix + "Vaia...")) {
    message.channel.send("Vaia, Vaia");
  } else
  if (message.content.startsWith(prefix +"Bienvenid@")){
    message.channel.send({embed: {
      color: 3447003,
      author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
      },
      title: "Bienvenido!",
      url: "",
      description: "Hola!, bienvenido a **League Of Toxic**!.",
      fields: [{
          name: "¿Quieres Crear Una Sala Para Ti y Tus Amigos?",
          value: "Mandale un mensaje a @M3Clop rellenando la siguiente.Nombre dentro del servidor:                  Nombre De La Sala:                   Rol De Sala:"
        },
        {
          name: "¿Quieres ser configurador?",
          value: "Facil,ve a #comandos y usa +getrole UserConfig.Verás una nueva categoria abajo"
        },
        {
          name: "¿Cómo pongo Música?",
          value: "Puedes usar diversos prefix:' + amy! . ;; _"
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "M3Clop"
      }
    }
 });
  }else
  if (message.content.startsWith(prefix +"Música")){
  message.channel.send({embed: {
    color: 3447003,
    author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
    },
    title: "Música Prefix",
    url: "",
    description: "Estos son todos los bots y sus prefijos de música.",
    fields: [{
        name: "Vexera",
        value: "-play -skip -stop -pause"
      },
      {
        name: "AmyBot",
        value: "amy!queue amy!play amy!stop amy!skip"
      },
      {
        name: "FreadBoat",
        value: ";;play ;;stop ;;pause ;;skip"
      },
      {
        name: "ErisBot",
        value: ".music play   .music skip  .music stop"
      },
      {
        name: "Gnar",
        value: "_play _skip _stop"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "M3Clop"
    }
  }
 });
  }else
  if (message.content.startsWith(prefix +"NSFW")){
    message.channel.send({embed: {
      color: 3447003,
      author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
      },
      title: "NSFW",
      url: "",
      description: "Hay muchos tipos de NSFW,pido que se respeten als categorias.",
    fields: [{
        name: "Hentai",
        value: "!!yande ."
      },
      {
        name: "NSFW-Real",
        value: "bbphgif bbcumsluts  bbboobs bbdick bbyiff bbass  bbpussy  bbwomen ."        }  
    ], 
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "M3Clop"
      }
    }
});
}else
  if (message.content.startsWith(prefix +"Comandos")){
  message.channel.send({embed: {
    color: 3447003,
    author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
    },
    title: "Comandos de Ayuda",
    url: "",
    description: "Con los siguientes comandos podrás ver las caracteristicas de categorias.",
    fields: [{
        name: "Música",
        value: "¿Quieres saber los comandos sobre Música? Usa &Música"
      },
      {
        name: "NSFW",
        value: "¿Quieres saber los comandos de NSFW? Eh pillin. Usa &NSFW"
      },
      {
        name: "¿As llegado nuevo?",
        value: "Dejame que te diga que si eres nuevo,usa el comando &Bienvenid@"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "M3Clop"
    }
  }
});
}
});
client.login(config.token);