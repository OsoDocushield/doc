export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"
export const PAYPAL_CLIENTID = process.env.PAYPAL_CLIENTID || "AQ8mcdGvYmu2BjSCPT2NdRfDE6L3Hwl2aDkfxqKPc6Z6ZHUzzxi7s3KkdlxWl5QkBnHO91xk4VlUijv2"
export const fromImageToUrl = (image) => {
    if (image.indexOf("/") === 0) {
        return `${API_URL}${image}`;
    }
    return image.url;
};

console.log(process.env.NODE_ENV)