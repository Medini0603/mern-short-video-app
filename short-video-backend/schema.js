import mongoose from 'mongoose'
const shortvideoSchema=mongoose.Schema({
    url:String,
    channel:String,
    description:String,
    likes:String,
    shares:String,
    messages:String
})

export default mongoose.model('ShortVideos',shortvideoSchema)