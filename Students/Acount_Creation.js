const express=require("express");
const router=express.Router();

const OTP_model=require("../modeal/OTP_model")

router.post("/generate_otp",async (req,res)=>{

    try {
        const { mobno } = req.body;

        // Validate required fields
        if (!mobno) {
            return res.status(400).json({ error: 'Name, email, and age are required.' });
        }

        // Create a new User instance
        const user = new OTP_model({mobno: mobno,otp:2222});

        // Save the user to the database
        await user.save();

        // Send a success response
        res.status(201).json({
            message: 'OTP GENERAT SUCESS',
            user,
        });
    } catch (error) {
        // Handle errors (e.g., duplicate email, validation errors)
        res.status(500).json({ error: error.message });
    }
})

router.post("/create_account",(req,res)=>{
    res.send("Nothing Hear")
})
module.exports=router