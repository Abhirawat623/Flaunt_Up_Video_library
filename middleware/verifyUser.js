const jwt = require("jsonwebtoken");

const verifyUSer=(req,res,next)=>{

    try {
        const token = req.headers.authorization;
     console.log("1"+token)
        if (token) {
          // Verify the token using your secret key
          const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN);
          console.log("2"+decodedToken)
          req.user =decodedToken; // Attach user information to the request object
          next(); // Proceed to the next middleware or route handler
        } else {
          res.status(401).json({ message: "Token not provided" });
        }
      } catch (err) {
        if (err.code === "ERR_HTTP_HEADERS_SENT") {
          // Handle the error (e.g., log it or send an appropriate response)
          console.error("Error: Headers already sent");
          res.status(500).json({ message: "Internal server error" });
        } else {
          // Handle other errors (e.g., invalid token)
          res.status(403).json({ message: "Invalid token" });
        }
      }
    };

module.exports = verifyUSer;

