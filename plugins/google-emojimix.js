import{sticker as e}from"../lib/sticker.js";import t from"node-fetch";let handler=async(r,{conn:a,text:i,command:l})=>{let n=await a.getName(r.sender),[o,m]=i.split`+`;if(!o||!m)return r.reply(`*📌 Ejemplo de uso:*\n${Prefijo+l} 🥺+🥵`);let s=r.reply(MultiNK.Proces(n));await s;try{let c=await e(!1,(await (await t(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(o)}_${encodeURIComponent(m)}`)).json()).results[0].media_formats.png_transparent.url,"",`
- ${NombreDelBot} -`);a.sendFile(r.chat,c,null,{asSticker:!0},r)}catch(p){r.reply(MultiNK.Error0())}};handler.help=["emojimix"],handler.tags=["conversor"],handler.command=/^(emojimix)$/i,handler.limit=!0;export default handler;
