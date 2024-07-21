import { createFlow } from "@builderbot/bot";
import { welcomeFlow } from "./welcome.flow";
import { handlerFLOWS } from "./handlers/manejador-multimedia.flow";
import { metodosDePagoFLOWS } from "./medios de pago/metodo-pago.flow";
import { infoFLOWS } from "./info-soporte-servicios/info.flow";
import { menuBotFLOWS } from "./option-bot/menu-bot.flow";

export const adapterFlow = createFlow([
welcomeFlow,
...handlerFLOWS,
...metodosDePagoFLOWS,
...infoFLOWS,
...menuBotFLOWS
]);
