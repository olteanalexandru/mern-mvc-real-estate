export {};
var mongoose = require('mongoose')



const goalSchema = mongoose.Schema ({
    //linking to user
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },

    titlu: {
        type:String,
        required:[true,'Lipseste titlu'],
    },
    descriere: {
        type:String,
        required:[true,'Lipseste descrierea'],
    },
    text: {
        type:String,
        required:false,
    },
    image: {
        type:String,
        required:true,
    },
    programare: {
        type:String,
        required:false,
    },
    programareBy: {
        type: String,
        required: false,
        ref: 'User',
        
    }
},
 
{
    
    timestamps: true,
}
)

module.exports = mongoose.model('Goal',goalSchema)