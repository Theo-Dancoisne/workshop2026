'use client'

import { ChangeEvent } from "react";

export function showElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.remove('hidden');
        element.classList.add('fade-in');
    }
}

export function hideElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.add('hidden');
        element.classList.remove('fade-in');
    }
}

export const selctTxt = (htmlElement: ChangeEvent<HTMLInputElement>) => {
    htmlElement.target.select();
}

export const routeExceptions = ["settings", "info"];        // type
export const scoreExceptions = ["settings", "info"];        // type
export const hasIconAsIcon = ["Parcoursup", "ChatGPT", "À Propos"];        // name
