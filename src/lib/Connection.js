import mongoose from 'mongoose'

const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log( " Mongo DB 연결됨")
  } catch (error) {
    throw new Error("Mongo DB연결 실패 : ", error)
  }
}

export default connectionDB;