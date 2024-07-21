import { addKeyword } from "@builderbot/bot"

export const pagoNequiFlow = addKeyword(['nequi', 'bancolombia', 'daviplata'])
    .addAnswer([
        '*🇨🇴PAGO COLOMBIA🇨🇴*',

        '👇TASA PARA LOS QUE PAGAN EN USD👇',
        'https://www.larepublica.co/indicadores-economicos/mercado-cambiario/dolar',

        'USAR *PRINCIPAL* SI NOS DA ❌❌ERROR USAR CUENTA SEGUNDARIA o 💳QR PORFAVOR',
        '',
        'ESCRIBIR 👉🏻👉🏻   *PAGOQR*',
        '',
        '*3115164835*  davi plata',
        '',
        'principal 🙂*nequi* 320 812 7538 EDIL*** CAS**',
        '',
        'principal *03112843955* bancolombia ahorros',

        'segundario *45346520781* bancolombia ahorros',
        '',
        'ADJUNTAR COMPROBANTE DE PAGO CLARO Y VISIBLE',
        '',
        '*cuenta personales no terceros*',
        '',
        '🚫importante sin comcepto pago🚫',
    ]);

export const pagoPeruFlow = addKeyword(['yape', 'bcp']).addAnswer([
    '*peru*',
    '*yape 915149938*',
    'plin 970113975',
    'juan flores',
    'bcp',
    '*37503450530041*',
    'JUAN DANIEL FLORES ALVINO',

    '*cuenta personales no terceros*',
    '🚫importante sin comcepto pago🚫',
])

export const pagoBrasilFlow = addKeyword('pix')
    .addAnswer([
        '*🇧🇷PAGOS BRASIL🇧🇷*',
        '',
        '*PESOS DOLAR GOOGLE*',
        'Pix Banco Nubank',
        '*6ae05c4b-2d17-4b16-b288-f93a35dccefc*',
        '👆🏻Llave aleatoria👆🏻',

        'no poner nada notas de pago',

        '',
        '🚫importante sin comcepto pago🚫',

    ])

export const pagoVenezuelaFlow = addKeyword(['Bs', 'bs', 'pago movil', 'Pago movil'])
    .addAnswer([
        '*DOLAR PARALELO*',
        '',
        '*🇻🇪-venezuela🇻🇪*',
        '01020330970000599388',
        'C.i  9559322',
        'Silverio arrieche',
        'Tlf *04120490039*',
        '',
        '*cuenta personales no terceros*',
        '',
        '*enviar comprobante monto total*',

        '🚫importante sin comcepto pago🚫',
    ])

export const pagoEcuadorFlow = addKeyword('pichincha')
    .addAnswer([
        '*MONEDA USD*',
        '',
        '*🇪🇨 ecuador pichincha 🇪🇨*',
        'Banco Pichincha',
        'cuenta de ahorros *2205689645*',
        'Wellington Sanchez *C.I 1805265657*',
        '*cuenta personales no terceros*',

        '🚫importante sin comcepto pago🚫',
    ])

export const pagoBoliviaFlow = addKeyword(['tigo money', 'bnb']).addAnswer([
    '🇧🇴- *PAGO BOLIVIA YAPE*',
    'DOLAR 8.40',
    'NO PONER NADA ES DESCRICION',
    'NO SE VALIDARA EL PAGO',
])
    .addAnswer("yape bolivia",
        {
            media: "https://i.ibb.co/CVnHfPZ/Whats-App-Image-2024-01-25-at-8-18-19-PM.jpg",
        }
    )

export const pagoargentinaFlow = addKeyword('uala')
    .addAnswer([
        '🇦🇷-argentina',
        '*PAGOS ARGENTINA*',
        '',
        'Alias: ALANZ20.UALA',
        'Cvu: *0000007900204160360055*',
        'uala',
        'rápi pago o pago fácil tiene que',
        'mandar este documento: 41.603.600',
        'Nombre: alan zapata',
        '1430001713006390410018 brubank',
        '*Dolar blue* + 8% DE INPUESTO',
        '*cuenta personales no terceros*',
        '🚫importante sin comcepto pago🚫',

    ]);

export const pagomexicoFlow = addKeyword(['bancomer', 'oxxo', 'bbva'])
    .addAnswer([
        '*🇲🇽PAGO MEXICO🇲🇽*',
        '',
        '*4152 3141 1811 0298*',
        'jorge romero',
        'BBVA  17.5= 1 usd',
        '*cuenta personales no terceros*',

        '*enviar comprobante monto total*',
    ])
    .addAnswer(['*4152 3141 3394 2337*',
        'Rosaura Barbosa S.',
        'bamcomer 17.5= 1 usd',
        '*montos superiores a 100 usd*',
        '*cuenta personales no terceros*',

        '*enviar comprobante monto total*',

        '🚫importante sin comcepto pago🚫',
    ])

export const pagoChileFlow = addKeyword('falabella')
    .addAnswer([
        '🇨🇱- chile',
        '',
        'BANCO ESTADO',
        'Cuenta RUT 17.040.696-6',
        'Saúl Rojas Tapia',
        '',
        'DOLAR GOOGLE + 8% DE INPUESTO',
        '',
        '*solo pagos menores a 100 usd cuenta personales no terceros*',
        '',
        '*enviar comprobante y monto total*',
        '🚫importante sin comcepto pago🚫',

        'PAGA BINANCE SIN COMICIONES',
    ]);

export const binancepayFlow = addKeyword(['binance pay', 'binance']).addAnswer([
    '*Binance pay*',
    'Pay ID *89264608*',
    'Correo 1 yupifff@gmail.com',
    'Correo 2',
    'bilitcastillo@hotmail.com',
    '*TRC20* TZ51435P3oXj2xzTuVUe6Sy7Tw4NJ4HFT9',
]);

export const pagoQRFlow = addKeyword('PAGOQR')
    .addAnswer("QR",
        {
            media: "https://i.ibb.co/KXDDnsH/Screenshot-2023-07-25-235845-copia.png",
        }
    );


export const metodosDePagoFLOWS = [
 pagoNequiFlow,
 pagoPeruFlow,
 pagoBrasilFlow,
 pagoVenezuelaFlow,
 pagoEcuadorFlow,
 pagoBoliviaFlow,
 pagoargentinaFlow,
 pagomexicoFlow,
 pagoChileFlow,
 binancepayFlow,
 pagoQRFlow
]