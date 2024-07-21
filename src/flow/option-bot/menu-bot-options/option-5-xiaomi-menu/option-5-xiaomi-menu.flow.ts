import { addKeyword, EVENTS } from "@builderbot/bot";
import { xiaomiAuthOnFlow } from "./options/xiaomi1-auth-on.flow";
import { xiaomiFrpResetFlow } from "./options/xiaomi2-frp-reset.flow";
import { removerCuentaRaizFlow } from "./options/xiaomi3-remover-cuenta-raiz.flow";

const menuXiaomi = {
    "1": xiaomiAuthOnFlow,
    "2": xiaomiFrpResetFlow,
    "3": removerCuentaRaizFlow
}

export const opcion5xiaomiMenuFlow = addKeyword(EVENTS.ACTION)
    .addAnswer([
        '*1* auth',
        '*2* frp-reset sindeload',
        '*3* Mi Account Lock Remove',

    ], { capture: true },
        async (ctx, { fallBack, gotoFlow, provider, endFlow }) => {
            await provider.vendor.readMessages([ctx.key]);

            const flow = menuXiaomi[ctx.body.toLowerCase()];

            if (flow) return gotoFlow(flow);

            if (ctx.body.toLowerCase() === 'c') return endFlow();

            return fallBack('Escoge una de las opciones anteriores o escribe *c* para cancelar');

        });

export const opcion5xiaomiMenuFLOWS = [
    opcion5xiaomiMenuFlow,
    xiaomiAuthOnFlow,
    xiaomiFrpResetFlow,
    removerCuentaRaizFlow
]
