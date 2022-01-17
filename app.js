#!/usr/bin/env node

// Hex string to be converted to base64
const hexString = "4a1b48d7322394a78326cd283f0834093e65421a7e98e90e5b452d160b5d07d8";

// Convert and print result
console.log(hexToBase64(hexString));

/**
 * Returns hex string converted to base64.
 *
 * @param {string} hexString The string to be converted from hex to base64.
 * @return {string} String converted to base64.
 */
 function hexToBase64(hexString) {
     // https://stackoverflow.com/a/27695236
    return Buffer.from(hexString, 'hex').toString('base64');
}