const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "994404737944";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "994404737944,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_34_10_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDk4LFxuICAgICAgICA5MyxcbiAgICAgICAgODEsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMxLFxuICAgICAgICA5LFxuICAgICAgICA3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDM3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDkyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxODksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxODYsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA3MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ5LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDMyLFxuICAgICAgICA4NixcbiAgICAgICAgMTUzLFxuICAgICAgICAzOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICA4NixcbiAgICAgICAgMTE1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDk5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA3MixcbiAgICAgICAgMTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NixcbiAgICAgICAgNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNixcbiAgICAgICAgMTg0LFxuICAgICAgICA1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNixcbiAgICAgICAgODgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxODEsXG4gICAgICAgIDM0LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDY0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjU1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTR1ZZUmJaK0FaMmMyLzgyVnJmZUdXY0lyUVdKcFl2UFNsMXgvaDkybjVRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk5NDQwNDczNzk0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjQ1OTE4NDRCNzUwQ0NDNDZGNzI1Mzc2QjAwMkQ2QTZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5NzMzNjQ0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk9yYXRTQUNJUzFXQWUzQXpyV1piTUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmVhOTIzZWEtNmU2Yi00YjUxLWI0MmItNzhiNjA0ZGZmMDFjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ4LFxuICAgICAgNjYsXG4gICAgICA0NixcbiAgICAgIDkxLFxuICAgICAgMTU4LFxuICAgICAgMTgyLFxuICAgICAgMjEyLFxuICAgICAgMTI1LFxuICAgICAgMTA3LFxuICAgICAgMjI5LFxuICAgICAgMTUyLFxuICAgICAgMTcxLFxuICAgICAgMTA4LFxuICAgICAgNjgsXG4gICAgICA3MixcbiAgICAgIDEyNyxcbiAgICAgIDQ4LFxuICAgICAgMTIwLFxuICAgICAgMyxcbiAgICAgIDIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMSxcbiAgICAgIDI2LFxuICAgICAgMTUwLFxuICAgICAgMjUwLFxuICAgICAgOTYsXG4gICAgICA5NixcbiAgICAgIDE3OSxcbiAgICAgIDIzMyxcbiAgICAgIDM0LFxuICAgICAgOTUsXG4gICAgICAxOTcsXG4gICAgICAxNDIsXG4gICAgICAxNDcsXG4gICAgICA3MixcbiAgICAgIDE2OCxcbiAgICAgIDIzNSxcbiAgICAgIDExNSxcbiAgICAgIDUsXG4gICAgICA3LFxuICAgICAgMjAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJOQ0tRUzc0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5OTQ0MDQ3Mzc5NDQ6NjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU1MzQ5NjQ2MjMzNzMzOjYyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09hOXlmNENFSVBJNXJnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUjZJMndtdHNZRE1XVFJ2QzF6TERDUG5ETUJnZ1FJWVUwQkpxTXJoOU9SOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJON2ZvaTlMcTR3dUIwZGZPY2s5RTBWdjY4ME8ra1FlTkNLM3RiNlErekxsVVdSdXpFeEhOWnFOUFpUK1lZbHdJTnViY3llbTlHL2F2Q2V1eGEwWVBBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJnWnVEU0hEVVpqcDV1SHVSRXBUZVgwN2pHU3F6aER4cDVobkVENiswRmFHNnlnQ2diRS9OaXFPUlY2c0x5ZGFlRGtma21UVXBTOTh6QmpQam9Hb2NBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5OTQ0MDQ3Mzc5NDQ6NjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTczMzY0MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtPeVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS095Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTURVYlVHR2JadUM0cjFqRnVINUxLOUFubmpSSXRTLzM5MWhYblFPOWl6TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MDIzMTYwMDYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTczMzY0MTY4NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "࿐🇲ᴀͥʟᷧᴀᷟɴɢ◂⁰⁰⁰³▸࿐",
  packname: process.env.PACK_NAME || "࿐🇲ᴀͥʟᷧᴀᷟɴɢ◂⁰⁰⁰³▸࿐",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
