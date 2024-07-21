import { addKeyword, EVENTS } from "@builderbot/bot";
import { opcion1principalesServiciosFlow } from "./menu-bot-options/option-1-principales-servicios.flow";
import { opcion2medioDePagoFlow } from "./menu-bot-options/option-2-medio-pago.flow";
import { opcion3MotorolaMenuFlow, opcion3motorolaMenuFLOWS } from "./menu-bot-options/option-3-motorola/option-3-motorola-menu.flow";
import { opcion4nokiaHdmUsaFlow } from "./menu-bot-options/option-4-nokia-hdm-usa.flow";
import { opcion5xiaomiMenuFlow, opcion5xiaomiMenuFLOWS } from "./menu-bot-options/option-5-xiaomi-menu/option-5-xiaomi-menu.flow";
import { opcion6AppleMenuFlow, opcion6AppleMenuFLOWS } from "./menu-bot-options/option-6-apple/option-6-apple.flow";
import { opcion7rentaServerPrincipalesBoxFlow } from "./menu-bot-options/option-7-server-principales-box.flow";
import { opcion8FrpKeyServicioOnlineInstanteFlow } from "./menu-bot-options/option-8-frp-key-servicio-online-instante.flow";
import { opcion9samsungOnlineFlow, opcion9SamsungOnlineMenuFLOWS } from "./menu-bot-options/option-9-samsung-online/option-9-samsung-online.flow";
import { opcionAnoRegistrosCoFlow } from "./menu-bot-options/option-A-no-registros-🇨🇴.flow";

const menuBotFlows = {
    "1": opcion1principalesServiciosFlow,
    "2": opcion2medioDePagoFlow,
    "3": opcion3MotorolaMenuFlow,
    "4": opcion4nokiaHdmUsaFlow,
    "5": opcion5xiaomiMenuFlow,
    "6": opcion6AppleMenuFlow,
    "7": opcion7rentaServerPrincipalesBoxFlow,
    "8": opcion8FrpKeyServicioOnlineInstanteFlow,
    "9": opcion9samsungOnlineFlow,
    "A": opcionAnoRegistrosCoFlow
}

export const menuBotFlow = addKeyword(EVENTS.ACTION)
    .addAnswer([
        'En cualquier momento escriba *bot*💚',

        '*1* *principales servicios*',
        '*2* agregar credito a la web',
        '*3* motorola',
        '*4* nokia',
        '*5* xiaomi',
        '*6* aplee bypass 5s-14 pro max',
        '*7* renta box',
        '*8* *frp key / honor*',
        '*9* samsung',
        '*A* no registros 🇨🇴',
    ],
{ capture: true },
async (ctx, { fallBack, gotoFlow, provider, endFlow }) => {
    await provider.vendor.readMessages([ctx.key]);

    const flow = menuBotFlows[ctx.body.toLowerCase()];

    if (flow) return gotoFlow(flow);

    if (ctx.body.toLowerCase() === 'c') return endFlow();

    return fallBack('Escoge una de las opciones anteriores o escribe *c* para cancelar');
});

export const menuBotFLOWS = [
    menuBotFlow,
    opcion1principalesServiciosFlow,
    opcion2medioDePagoFlow,
    ...opcion3motorolaMenuFLOWS,
    opcion4nokiaHdmUsaFlow,
    ...opcion5xiaomiMenuFLOWS,
    ...opcion6AppleMenuFLOWS,
    opcion7rentaServerPrincipalesBoxFlow,
    opcion8FrpKeyServicioOnlineInstanteFlow,
    ...opcion9SamsungOnlineMenuFLOWS,
    opcionAnoRegistrosCoFlow
];