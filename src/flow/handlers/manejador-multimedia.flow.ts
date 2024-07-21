import { addKeyword, EVENTS } from "@builderbot/bot";


const mensajeMultimediaNoSoportada = ' * por favor, pedimos disculpas.\n No enviar audios, videos o realizar llamadas ❌*';

export const manejadorDocumentoFlow = addKeyword(EVENTS.DOCUMENT).addAnswer('gracias verificando');
export const manejadorVideoFlow = addKeyword(EVENTS.MEDIA).addAnswer(mensajeMultimediaNoSoportada);
export const manejadorAudioFlow = addKeyword(EVENTS.VOICE_NOTE).addAnswer(mensajeMultimediaNoSoportada);


export const handlerFLOWS = [manejadorDocumentoFlow, manejadorVideoFlow, manejadorAudioFlow];