import React from "react";
import { TimeSplit } from "./types/globals";
/**
 * @author Alessandro Miranda
 * @description Calcula a diferença, em milisegundos, entre a data atual e data alvo
 * e faz o dispatch do setState, após 1 segundo, para atualizar o componente
 * @param targetDate Data final
 * @param dispatchFn Função para atualizar o componente
 * @param actualDate Data atual
*/
declare function countdown(targetDate: string, dispatchFn: React.Dispatch<React.SetStateAction<TimeSplit>> | ((timeRemaining: TimeSplit) => void)): void;
export { countdown };
