import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_toke;
  if (!token) {
    res.send("need to login");
  }
  jwt.verify(token, "armaankhan", (er, user) => {
    if (er) {
      res.send("token is not valid");
    }
    req.user = user;
    next();
  });
};
