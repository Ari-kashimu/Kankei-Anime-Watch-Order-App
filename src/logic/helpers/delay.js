//* Delay Function to aviod Api Limits

export function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
