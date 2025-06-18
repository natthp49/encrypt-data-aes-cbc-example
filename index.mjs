import CryptoJS from "crypto-js";

const text = "Hello, this is a secret message!";
const keyString = "1234123456789878"; // 16 chars = 128-bit
const ivString = "1234567898765432"; // 16 chars = 128-bit

function encryptWithCryptoJS(text, keyString, ivString) {
  const key = CryptoJS.enc.Utf8.parse(keyString);
  const iv = CryptoJS.enc.Utf8.parse(ivString);

  const encrypted = CryptoJS.AES.encrypt(text, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  console.log("Encrypted:", encrypted.toString()); // base64
  return encrypted.toString();
}

const encryptedBase64 = encryptWithCryptoJS(text, keyString, ivString);

function decryptWithCryptoJS(encryptedBase64, keyString, ivString) {
  const key = CryptoJS.enc.Utf8.parse(keyString);
  const iv = CryptoJS.enc.Utf8.parse(ivString);

  const decrypted = CryptoJS.AES.decrypt(encryptedBase64, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  const originalText = decrypted.toString(CryptoJS.enc.Utf8);
  console.log("Decrypted:", originalText);
  return originalText;
}

decryptWithCryptoJS(encryptedBase64, keyString, ivString);
