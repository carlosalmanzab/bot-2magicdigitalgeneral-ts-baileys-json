import { addKeyword, EVENTS } from "@builderbot/bot";
import { infoServiciosFlow, infoSoporteFlow } from "./info-soporte-servicios/info.flow";
import { menuBotFlow } from "./option-bot/menu-bot.flow";

const menuWelcomeFlows = {
    "soporte": infoSoporteFlow,
    "bot": menuBotFlow,
    "servicios": infoServiciosFlow
}

export const welcomeFlow = addKeyword(EVENTS.WELCOME)
    .addAnswer([
        '*bienvenido a nuestra tienda online DT-UNLOCK',
        '',
        'web 24/7 *https://dtodito-gsm.com/*',
        '',
        'escriba *soporte👷🏼‍♂️*',
        'escriba *bot🥷🏻*',
        'escriba *servicios📲💻*'
    ])
    .addAnswer(['como podemos ayudarte!!!'], { capture: true },
        async (ctx, { fallBack, gotoFlow, provider, endFlow }) => {

            await provider.vendor.readMessages([ctx.key]);

            const flow = menuWelcomeFlows[ctx.body.toLowerCase()];

            if (flow) return gotoFlow(flow);

            if (ctx.body.toLowerCase() === 'c') return endFlow();

            return fallBack('Escoge una de las opciones anteriores o escribe *c* para cancelar');

        });
    