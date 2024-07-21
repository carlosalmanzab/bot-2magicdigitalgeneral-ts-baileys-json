import { addKeyword, EVENTS } from "@builderbot/bot";

export const despedidaFlow = addKeyword(EVENTS.WELCOME)
.addAction(async (ctx, {flowDynamic}) => {
    const wordsTrigger = ['chao', 'hasta luego', 'gracias'];

    if(!wordsTrigger.includes(ctx.text.toLowerCase())) return;

    await flowDynamic("Un gusto servirle, equipo *Dt-unlock*")
});