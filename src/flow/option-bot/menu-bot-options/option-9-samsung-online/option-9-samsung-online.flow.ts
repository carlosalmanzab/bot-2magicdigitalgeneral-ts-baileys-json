import { addKeyword, EVENTS } from "@builderbot/bot";
import { cpidSamsungOnlineF4UnlockFlow } from "./options/samsung-1-cpid-samsung-online-f4-unlock.flow";
import { samsungFrpOnlineFlow } from "./options/samsung-2-samsung-frp-online.flow";
import { samsungFrpOnlineDosFlow } from "./options/samsung-4-samsung-frp-online.flow";
import { byPassFullKgSamsung } from "./options/samsung-3-bypass-full-kg-samsung.flow";

const menuSamsungFlows = {
    '1': cpidSamsungOnlineF4UnlockFlow,
    '2': samsungFrpOnlineFlow,
    '3': byPassFullKgSamsung,
    '4': samsungFrpOnlineDosFlow,
};

export const opcion9samsungOnlineFlow = addKeyword(EVENTS.ACTION)
    .addAnswer([
        '*SAMSUNG ONLINE* 💚💚💚',
        '*1* samsung cpid unlock/repair',
        '*2* sam frp s1',
        '*3* kg bypass full',
        '*4* sam frp *s2*',
    ],
        { capture: true },
        async (ctx, { fallBack, gotoFlow, provider, endFlow }) => {

            await provider.vendor.readMessages([ctx.key]);

            const flow = menuSamsungFlows[ctx.body.toLowerCase()];

            if (flow) return gotoFlow(flow);

            if (ctx.body.toLowerCase() === 'c') return endFlow();

            return fallBack('Escoge una de las opciones anteriores o escribe *c* para cancelar');
        }
    );

export const opcion9SamsungOnlineMenuFLOWS = [
    opcion9samsungOnlineFlow,
    cpidSamsungOnlineF4UnlockFlow,
    samsungFrpOnlineFlow,
    byPassFullKgSamsung,
    samsungFrpOnlineDosFlow
]