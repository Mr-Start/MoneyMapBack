import { IJWTPayload } from './IJWTPayload'

export interface IJWTProvider {
  generate(secretToken: string, payload: IJWTPayload): string;
}