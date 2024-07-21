import { addKeyword, EVENTS } from "@builderbot/bot";
import { minaRamDisckMacFlow } from "./options/apple-1-mina-ramdisk-mac.flow";
import { iRemovalWindowsFlow } from "./options/apple-2-iremoval-windows.flow";
import { iRemovalProPremiumEditionXr14ProMaxFlow } from "./options/apple-3-iremoval-pro-premium-edition-xr-14-pro-max.flow";

const menuAppleFlows = {
    "1": minaRamDisckMacFlow,
    "2": iRemovalWindowsFlow,
    "3": iRemovalProPremiumEditionXr14ProMaxFlow
}

export const opcion6AppleMenuFlow = addKeyword(EVENTS.ACTION)
    .addAnswer(['selecione',
        '*1* bypass mac',
        '*2* bypass win',
        '*3* *IREMOVAL PRO EDITION XR 14 PRO MAX💚',
    ],
        { capture: true },
        async (ctx, { fallBack, gotoFlow, provider, endFlow }) => {

            await provider.vendor.readMessages([ctx.key]);

            const flow = menuAppleFlows[ctx.body.toLowerCase()];

            if (flow) return gotoFlow(flow);

            if (ctx.body.toLowerCase() === 'c') return endFlow();

            return fallBack('Escoge una de las opciones anteriores o escribe *c* para cancelar');
        }
    );
export const opcion6AppleMenuFLOWS = [
    opcion6AppleMenuFlow,
    minaRamDisckMacFlow,
    iRemovalWindowsFlow,
    iRemovalProPremiumEditionXr14ProMaxFlow
]