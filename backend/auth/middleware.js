import jwt from 'jsonwebtoken';

export const authMiddleware = (req) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return {};

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return { id: decoded.id, role: decoded.role };
  } catch {
    return {};
  }
};
