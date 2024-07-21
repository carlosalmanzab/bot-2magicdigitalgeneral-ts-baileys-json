import { addKeyword, EVENTS } from "@builderbot/bot";

export const infoServiciosFlow = addKeyword(EVENTS.ACTION)
    .addAnswer([
        'PRINCIPALES SERVICIOS',
        '24/7 RAPIDOS Y FUERIOSOS',
        '',

        'creditos activaciones',
        'Todos los paises',
        '',

        'Remotos online',
        '[remover cuentas mi]',
        '[cuentas Google]  [unlock]',
        '[Desbrick] [repair] [bypass]',
        'Aplee Samsung Xiaomi nokia',
        'De las Principales marcas',
        'Recuperación de señal',
        'Y Mucho más',

        '',

        'Saludos Equipo DT-unlock',
        '',
        'Web dtodito-gsm.com',
        'canal tele https://t.me/DTodito_gsm',
        'Whatsapp https://wa.me/573208127538',
    ]);


export const infoSoporteFlow = addKeyword(EVENTS.ACTION)
    .addAnswer([
        '*¡Hola, un gusto saludarte!*',
        '',
        'En breves te atenderé, pero',
        'puedes ir diciéndome en qué',
        'estás interesado/a.',

        '*ɴᴏ ᴏʟᴠɪᴅᴇs ᴀɢᴇɴᴅᴀʀᴍᴇ*',
        '💚 ᴳʳᵃᶜⁱᵃˢ ᵖᵒʳ ᶜᵒⁿᵗᵃᶜᵗᵃʳᵐᵉ 💚',
        '*•━━━━━━━━━━━━━━•*',
    ]);
    
export const infoFLOWS = [infoServiciosFlow, infoSoporteFlow];