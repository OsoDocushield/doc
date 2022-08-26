export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"
export const fromImageToUrl = (image) => {
    if (image.indexOf("/") === 0) {
        return `${API_URL}${image}`;
    }
    return image.url;
};