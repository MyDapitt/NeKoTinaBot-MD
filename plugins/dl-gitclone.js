/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import e from"node-fetch";let handler=async(t,{conn:a,args:i,command:r})=>{let o=/(?:https?|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;if(!i[0])return t.reply(`*✳️ Por favor use una URL de github*\n\n*📌 ejemplo:*\n
${Prefijo+r} https://github.com/OdinTm/INFINIXBOT-MD`);if(!o.test(i[0]))return t.reply("📌 La url es inv\xe1lido");let n=await a.getName(t.sender),h=t.reply(MultiNK.Proces(n));await h;let[,l,s]=i[0].match(o)||[],c=`https://api.github.com/repos/${l}/${s=s.replace(/.git$/,"")}/zipball`,d=await e(c,{method:"head"});if(200!==d.status)throw d.statusText;let m;await a.sendMessage(t.chat,{document:{url:c},fileName:d.headers.get("content-disposition").match(/attachment; filename=(.*)/)[1],mimetype:d.headers.get("content-type")},{quoted:t}).catch(e=>{t.reply(MultiNK.Error0())})};handler.help=["gitclone <Link>"],handler.tags=["servicio"],handler.command=/^(gitclone)$/i;export default handler;
