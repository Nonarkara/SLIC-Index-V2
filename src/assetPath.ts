export const assetBase = import.meta.env.BASE_URL;
export const asset = (path: string) => `${assetBase}${path}`;
