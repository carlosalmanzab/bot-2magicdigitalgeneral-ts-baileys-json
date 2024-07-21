import { addKeyword, EVENTS } from "@builderbot/bot";
import { getData } from "../../database/repository/user.repository";
import { UserModel } from "../../database/model/UserModelDb";
import { IProvider } from "../../provider";
import { BaileysProvider } from "@builderbot/provider-baileys";
import { WHATSAPP_CHAT_GROUP_ID } from "../../config/environment";
import { menuWelcomeFlow } from "../menuWelcome.flow";

export const flowRegisteredClients = addKeyword<BaileysProvider>(
EVENTS.ACTION
).addAction(async (ctx, { flowDynamic, gotoFlow, provider }) => {
  const data = await getData({ number: ctx.from }, UserModel);
  if (data && data.name !== undefined && data.name !== null)
    await flowDynamic(`Hola *${data.name}*, Es un placer tenerte de vuelta`);

  const message = `[BOTmagicDigUNLOCK] *${data.name}*  - *${ctx.from}* \nesta en una conversación con el bot`;

  try {
    await provider.sendText(WHATSAPP_CHAT_GROUP_ID, message);
  } catch (error) {
    console.error("Error enviando mensaje:", error);

  }
  return gotoFlow(menuWelcomeFlow);
});

// export const flowNewUserWelcome = addKeyword(
//   EVENTS.ACTION
// ).addAction(async (ctx, { flowDynamic }) => {
//   const data = await getData({ number: ctx.from }, UserModel);

//   if (data && data.name !== undefined && data.name !== null) 
//     await flowDynamic(`Hola *${data.name}*, ¡bienvenid@!`);
  
// });
