import { Magic } from 'magic-sdk';

const magicAPIKey = process.env.NEXT_PUBLIC_MAGIC_API_KEY;

export const magic = new Magic(magicAPIKey);

