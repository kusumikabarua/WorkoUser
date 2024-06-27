const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
   {
        name:{
            type:String,
            required:true
        },      
        password:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        age:{
            type:Number,
            required:true,     
        },
        city:{
            type:String,
            required:true,    
        },
        zipCode:{
            type:Number,
            required:true,     
        },
        deleteFlag:{
            type:Boolean,
            required:true,  
            default:false   
        }
    },{
        timestamps: true,
    }

)
userSchema.methods.comparePassword = async function(enteredPassword){
   //console.log("existing password"+ this.password);
    return await bcrypt.compare(enteredPassword,this.password);
}
const User = mongoose.model("User",userSchema);
module.exports= User;