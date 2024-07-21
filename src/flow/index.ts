import { createFlow } from "@builderbot/bot";
import { menuWelcomeFlow } from "./menuWelcome.flow";
import { handlerFLOWS } from "./handlers/manejador-multimedia.flow";
import { metodosDePagoFLOWS } from "./medios de pago/metodo-pago.flow";
import { infoFLOWS } from "./info-soporte-servicios/info.flow";
import { menuBotFLOWS } from "./option-bot/menu-bot.flow";
import { flowWelcome } from "./welcome/welcome";
import { flowNoRegisteredClients, registerStepsFlow } from "./clientNotRegister/NotRegistered";
import { flowRegisteredClients } from "./ClientRegister/registered";

export const adapterFlow = createFlow([
    menuWelcomeFlow,
    ...handlerFLOWS,
    ...metodosDePagoFLOWS,
    ...infoFLOWS,
    ...menuBotFLOWS,
    flowWelcome,
    flowNoRegisteredClients,
    registerStepsFlow,
    flowRegisteredClients,
]);
