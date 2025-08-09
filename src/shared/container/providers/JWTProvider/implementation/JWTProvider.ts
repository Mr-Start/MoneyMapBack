import { sign } from 'jsonwebtoken'
import { IJWTProvider } from '../models/IJWTProvider'
import { IJWTPayload } from '../models/IJWTPayload'

export class JWTProvider implements IJWTProvider {
	generate(secretToken: string, payload: IJWTPayload): string {
		const token = sign({ id: payload.subject, email: payload.email }, secretToken, { expiresIn: payload.expiresIn })
		return token
	}
  
}