import CryptoJS from "crypto-js";

export class EncryptDecrypt {
  private secretKey: string;

  constructor() {
    this.secretKey = process.env.SECRET_KEY
      ? process.env.SECRET_KEY
      : "Please enter valid key";
  }

  encryptData(data: string) {
    const encryptedData = CryptoJS.AES.encrypt(data, this.secretKey).toString();
    return encryptedData;
  }

  decryptData(encData: string) {
    const decryptedData = CryptoJS.AES.decrypt(
      encData,
      this.secretKey
    ).toString(CryptoJS.enc.Utf8);
    return decryptedData;
  }
}
export default EncryptDecrypt;
