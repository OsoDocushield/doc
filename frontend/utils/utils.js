export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"
export const PAYPAL_CLIENTID = process.env.PAYPAL_CLIENTID || "Ae8X4KIgpq8G2zN6RrM6xS8Sk9COcB3Fr97OZg6kxcs6n-ia--bBRD1aGX26hu_clfOr5jINYp3P4TXJ"
export const fromImageToUrl = (image) => {
    if (image.indexOf("/") === 0) {
        return `${API_URL}${image}`;
    }
    return image.url;
};

console.log(process.env.NODE_ENV)