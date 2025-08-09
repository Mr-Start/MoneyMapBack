export interface ICryptoProvider {
  encrypt(payload: string): Promise<string>;
  decrypt(payload: string): Promise<string>;
}
