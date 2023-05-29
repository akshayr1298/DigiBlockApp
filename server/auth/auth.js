
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try { 
    console.log('cookies', req.cookies);
    const token = req.cookies.access_token;
    const refreshToken = req.cookies.refresh_token;
    console.log('token', token, 'refresh', refreshToken);
    if (!token) {
      return res.status(401).json({ message: "You are not authenticated" });
    }
    jwt.verify(token, process.env.jwt_secret, (err, user) => {
      if (err) {
        console.log('errname',err.name);
        if (err.name === "TokenExpiredError") {
          // Access token has expired, try to refresh it
          jwt.verify(refreshToken, process.env.jwt_secret, (err, user) => {
            if (err) {
              return res.status(403).json({ message: "Invalid refresh token" });
            }

            // Generate a new access token
            const newAccessToken = jwt.sign({ email: user.email}, process.env.jwt_secret, { expiresIn: "15m" });
            
            // Set the new access token in the response cookies
            res.cookie("access_token", newAccessToken, { maxAge: 600000, httpOnly: true });

            // Proceed to the next middleware
            req.user = user;
            next();
          });
        } else {
          return res.status(403).json({ message: "Invalid access token" });
        }
      } else {
        req.user = user;
        next();
      }
    });
  } catch (error) {
    next(error);
  }
};
