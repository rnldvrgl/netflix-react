import { verify } from 'jsonwebtoken';

export async function verifyToken(token) {
    const decodedToken = verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.issuer;

    return userId;
}