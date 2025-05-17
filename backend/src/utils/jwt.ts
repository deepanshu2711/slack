import jwt from "jsonwebtoken";

export interface JWTPayload {
  id: string;
  email: string;
}

export const generateToken = (payload: JWTPayload) => {
  const secret = process.env.JWT_SECRET as string;
  return jwt.sign(payload, secret, { expiresIn: "1h" });
};
