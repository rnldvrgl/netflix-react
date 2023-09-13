import { Magic } from 'magic-sdk';

const magicAPIKey = process.env.NEXT_PUBLIC_MAGIC_API_KEY;

const createMagic = () => {
    return typeof window !== "undefined" && new Magic(magicAPIKey);
};

export const magic = createMagic();   
