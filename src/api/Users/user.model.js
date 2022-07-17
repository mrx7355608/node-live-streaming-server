const mongoose = require("mongoose");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: String,
    streamKey: String,
    email: String,
    password: String,
});

// ##### PRE SAVE MIDDLEWARES #####
// Hash Password
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
});
// Generate STREAM_KEY
userSchema.pre("save", async function (next) {
    if (!this.isModified("streamKey")) return next();
    const streamKey = crypto.randomBytes(16);
    this.streamKey = streamKey;
    next();
});

// ##### SCHEMA CUSTOM METHODS #####
// Check Password
userSchema.methods.comparePassword = async function (inputPassword) {
    return await bcrypt.compare(inputPassword, this.password);
};
