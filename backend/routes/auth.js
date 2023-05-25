const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const JWT_SECRET = "shub$amthiss!de";

//Route 1: SignUp the user
router.post(
  "/createUser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password should be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } 
      try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
          return res
            .status(400)
            .json({ error: "User with this email id already exists" });
        } 
      
          const salt = await bcrypt.genSalt(10);
          const secPass = await bcrypt.hash(req.body.password, salt);

          user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
          });
        

        //res.send(user);

        const data = {
          user: {
            id: user.id,
          },
        };

        //res.json(data);
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({success , authtoken});

      } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
      }
    
  }
);

//Route 2 : Login User with the credentials
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } 
    const { email , password } = req.body;
      try {
        let user = await User.findOne({ email });
        if (!user) {
          return res.status(400).json({ error: "Issue in fetching email id" });
        } else {
          const passwordCompare = await bcrypt.compare(
            password,
            user.password
          );
          if (!passwordCompare) {
            return res
              .status(400)
              .json({ error: "Please enter the correct credentials" });
          } 

            const payload = {
              user: {
                id: user.id,
              },
            };

            const authtoken = jwt.sign(payload, JWT_SECRET);
            success = true;
            res.json({success , authtoken});
            //res.send(payload);
          
        }
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
      }
    
  }
);

//Route 3 : Get loggedin user details

router.post("/getUser" , fetchuser , async(req , res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors : errors.array() })
  }

    try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
    }
    catch(error) {
      console.error(error.message);
      res.status(500).send("Some error occured")
    }
  
})

module.exports = router;
