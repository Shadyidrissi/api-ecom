const mongoose =require("mongoose")
const connectionDB = async () => {
  mongoose
    .connect("mongodb+srv://SHADY:vwi0DV5138iPRKqV@cluster0.ftldo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .catch((error) => handleError(error));
  try {
    await mongoose.connect("mongodb+srv://SHADY:vwi0DV5138iPRKqV@cluster0.ftldo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("database is running");
  } catch (error) {
    handleError(error);
  }
};
module.exports=connectionDB 