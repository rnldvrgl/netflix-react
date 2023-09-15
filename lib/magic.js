import { Magic } from "@magic-sdk/admin";

export const magicAdmin = new Magic(process.env.MAGIC_SERVER_KEY); //

export const mAdmin = await Magic.init(process.env.MAGIC_SERVER_KEY);