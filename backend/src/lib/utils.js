import jwt from 'jsonwebtoken';

export const generateToken = (userId, res) => {

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d", // Token will expire in 7 days
    });

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
        httpOnly: true, // Prevents client-side JavaScript from accessing the cookie and prevent XSS attacks
        sameSite: "strict", // Helps prevent CSRF attacks by ensuring the cookie is sent only with same-site requests
        secure: process.env.NODE_ENV !== "development", // Use secure cookies in production (HTTPS)
    });

    return token;
}