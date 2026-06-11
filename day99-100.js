// 1. Connecting MongoDB with Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp')
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Connection error:", err));

// 2. Defining a Schema and Model
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  age: { type: Number, default: 18 },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// 3. Creating a Document
const newUser = new User({ name: "John Doe", email: "john@example.com" });
newUser.save().then(res => console.log(res));

// 4. Querying Documents
User.find({ age: { $gte: 18 } }).then(users => console.log(users));

// 5. Updating a User
User.updateOne({ name: "John Doe" }, { $set: { age: 22 } })
  .then(result => console.log(result));

// 6. Deleting a User
User.deleteOne({ name: "John Doe" }).then(result => console.log(result));