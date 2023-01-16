import { Indicator } from '../models/indicator.m';

export async function getIndicators(): Promise<Indicator[]> {
    const response = await fetch('https://mindicador.cl/api');
    return await response.json();
}