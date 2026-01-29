import CryptoJS from "crypto-js";

export class EncryptDecrypt {
  private secretKey: string;

  constructor() {
    this.secretKey = process.env.SECRET_KEY || "";

    if (!this.secretKey) {
      throw new Error("SECRET_KEY environment variable is not set");
    }
  }

  encryptData(data: string) {
    const encryptedData = CryptoJS.AES.encrypt(data, this.secretKey).toString();
    return encryptedData;
  }

  decryptData(encData: string) {
    const decryptedData = CryptoJS.AES.decrypt(
      encData,
      this.secretKey,
    ).toString(CryptoJS.enc.Utf8);
    return decryptedData;
  }
}
export default EncryptDecrypt;
