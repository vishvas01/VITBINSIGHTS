import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    })
    //  await mongoose.connect("mongodb+srv://vishvas:vishvas262002@vitb-insights.wdgr1sq.mongodb.net/?retryWrites=true&w=majority&appName=VITB-INSIGHTS", { 
    //   useNewUrlParser: true, 
    //   useUnifiedTopology: true 
    // })
    console.log(`Connected to MongoDB successfully`.bgGreen.white)
  } catch (error) {
    console.log(`MongoDB Error: ${error}`.bgRed.white)
  }
}
export default connectDB