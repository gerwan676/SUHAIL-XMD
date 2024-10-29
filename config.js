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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923416278113";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923416278113,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_10_10_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3MixcbiAgICAgICAgMjUyLFxuICAgICAgICA5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDgsXG4gICAgICAgIDU4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA4NixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgODUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQyLFxuICAgICAgICA0OCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQxLFxuICAgICAgICA2MCxcbiAgICAgICAgODUsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDYxLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NixcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcxLFxuICAgICAgICA0MixcbiAgICAgICAgMTc4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg5LFxuICAgICAgICAxODksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDE2LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTksXG4gICAgICAgIDQ4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA3OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAzMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgODgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxODAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAyLFxuICAgICAgICA3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDksXG4gICAgICAgIDgwLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJNNnUzam8zVmlzNXBUc3M0UWszNGFaZFpEUndjb3FNRmhuNUh6M0o1akM4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwQThTeklLRVFweU5nbkhHT3huTzVRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjAzOTIwZWQ5LWUxYmEtNDExMy1iODhmLTgzYWNjNDY4MTU3YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDQsXG4gICAgICA3MCxcbiAgICAgIDIwMixcbiAgICAgIDE4MixcbiAgICAgIDI1MSxcbiAgICAgIDEzMCxcbiAgICAgIDk4LFxuICAgICAgMjIwLFxuICAgICAgMTQ0LFxuICAgICAgODYsXG4gICAgICAyMTcsXG4gICAgICAxOCxcbiAgICAgIDI0OSxcbiAgICAgIDE0MyxcbiAgICAgIDQzLFxuICAgICAgMTAyLFxuICAgICAgOTYsXG4gICAgICAyNDIsXG4gICAgICA0OCxcbiAgICAgIDEyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5LFxuICAgICAgMTkyLFxuICAgICAgMTgwLFxuICAgICAgMjIxLFxuICAgICAgMjUxLFxuICAgICAgMTc5LFxuICAgICAgMjMsXG4gICAgICAyMyxcbiAgICAgIDEyMyxcbiAgICAgIDE4NCxcbiAgICAgIDE0MixcbiAgICAgIDExNyxcbiAgICAgIDcsXG4gICAgICAxNjEsXG4gICAgICA5MCxcbiAgICAgIDY2LFxuICAgICAgNDYsXG4gICAgICAxNjgsXG4gICAgICA3MCxcbiAgICAgIDkwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllXWjUxQllHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MTYyNzgxMTM6NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4NDkwNDU0OTk0OTUwOjU3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0t5dHVwUUJFSU91aExrR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicHhYRStkSzRXWitUbHZ0RENjdEhTNFE0UmJranA3ejEzTlpuQmkrd2ZoOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxQXV6V1JpOSswbS9xL3JuZFQ3bnYxcDVzNm5Ia2s5a05XUVVaWjFiaitNUElMMmVyV3A3cUw5V0I0M1U0T3BSc0x2RDN6MnJVNk1sSUlzYjJkUWhDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqT3RMaEdLQ3g3UWp5c3psZ0lmci9aaTZuKzFhQWtoTlpZdVJBeVkyNlJuNENTNlJiQVo1MHFlSWNRTWJOQUJ5azgwNUlFOWFLRTRYY1BReWxISlVBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MTYyNzgxMTM6NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwMjIxODMwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTDQ3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMNDcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCc21mbE16bHVtM0dkVGFRbDVNVXlEN1piTjFWMVNhNXR6UWZ2ckJEMndrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMxMTMzNDU3MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI5Njk1NTE2NDg1XCJ9Igp9"  // PUT your SESSION_ID 


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
