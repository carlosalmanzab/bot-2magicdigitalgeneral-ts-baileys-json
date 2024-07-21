import { addKeyword, EVENTS } from "@builderbot/bot";
import { motoFastBootLatamFlow } from "./option-tools/moto1-moto-fast-boot-latam.flow";
import { mtkMotoModeFlow } from "./option-tools/moto2-mtk-moto-mode.flow";
import { motoUSAOnlineFlow } from "./option-tools/moto3-moto-usa-online.flow";
import { motoFastSoloPinFlow } from "./option-tools/moto4-moto-fastboot-mdm-solo-pin-frp.flow";
import { conexionMtkModeFlow } from "./option-tools/moto5-conexion-mtk-mode.flow";

const menuFlows = {
    "1": motoFastBootLatamFlow,
    "2": mtkMotoModeFlow,
    "3": motoUSAOnlineFlow,
    "4": motoFastSoloPinFlow,
    "5": conexionMtkModeFlow
}

export const opcion3MotorolaMenuFlow = addKeyword(EVENTS.ACTION)
    .addAnswer([
        '*1* moto fastboob',
        '*2* moto mtk/spd/g22',
        '*3* moto usa 🇺🇸',
        '*4* moto e13-g13-g23',
        '*5* moto  mdm/frp'],
        { capture: true },
        async (ctx, { fallBack, gotoFlow, provider, endFlow }) => {
            await provider.vendor.readMessages([ctx.key]);

            const flow = menuFlows[ctx.body.toLowerCase()];

            if (flow) return gotoFlow(flow);

            if (ctx.body.toLowerCase() === 'c') return endFlow();

            return fallBack('Escoge una de las opciones anteriores o escribe *c* para cancelar');
        }
    );

export const opcion3motorolaMenuFLOWS = [
    opcion3MotorolaMenuFlow,
    motoFastBootLatamFlow,
    mtkMotoModeFlow,
    motoUSAOnlineFlow,
    motoFastSoloPinFlow,
    conexionMtkModeFlow]