import React from "react";
import { TimeSplit } from "./types/globals";

const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOUR = 60 * SECONDS_IN_MINUTE;
const SECONDS_IN_DAY = 24 * SECONDS_IN_HOUR;
const ONE_SECOND_IN_MILLIS = 1000;

/**
 * @author Alessandro Miranda
 * @description Calcula a diferença, em milisegundos, entre a data atual e data alvo
 * e faz o dispatch do setState, após 1 segundo, para atualizar o componente
 * @param targetDate Data final
 * @param dispatchFn Função para atualizar o componente
*/
function countdown(
    targetDate: string,
    dispatchFn: React.Dispatch<React.SetStateAction<TimeSplit>> | ((timeRemaining: TimeSplit) => void)
)
{
    const now = new Date();
    const target = new Date(targetDate);
    const secondsLeft = (target.getTime() - now.getTime()) / ONE_SECOND_IN_MILLIS;

    if(secondsLeft <= 0)
    {
        dispatchFn({
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00',
            hasFinished: true
        });
    }

    setTimeout(() => {
        dispatchFn(parseTimeRemaining(secondsLeft));
    }, ONE_SECOND_IN_MILLIS);
}

/**
 * @author Alessandro Miranda
 * @description Faz o calculo do dia, hora, minutos e segundos com base nos segundos passados como argumento
 * @param totalSeconds Diferença em segundos da data atual até a final
 * @returns Objeto contendo a diferença de dias restantes estatus do contador
 */
function parseTimeRemaining(totalSeconds: number): TimeSplit
{
    const days = Math.floor(totalSeconds / SECONDS_IN_DAY);
    const hours = Math.floor((totalSeconds % SECONDS_IN_DAY) / SECONDS_IN_HOUR);
    const minutes = Math.floor((totalSeconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE)
    const seconds = Math.floor((totalSeconds % SECONDS_IN_MINUTE));

    return {
        days: fillWithZero(2, days), 
        hours: fillWithZero(2, hours),
        minutes: fillWithZero(2, minutes),
        seconds: fillWithZero(2, seconds),
        hasFinished: false
    }
}

/**
 * @author Alessandro Miranda
 * @description Insere zeros à esquerda do valor para deixar a data formatada com dois digitos
 * @param digits Quantidade de digitos para preenchimento da string
 * @param value valor a ser inserido os digitos complementares
 * @returns Sring preenchida com zeros à esquerda
 */
 const fillWithZero = (digits: number, value: number) => {
    return String(value).padStart(digits, '0');
}

export { countdown };

