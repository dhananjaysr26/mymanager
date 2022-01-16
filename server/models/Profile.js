import mongoose from 'mongoose';

const profileSchema = mongoose.Schema({
    Name: String,
    StartDate: {
        type: Date,
        default: new Date()
    },
    CountDate: {
        type: Date
    },
    Rate: {
        type: Number,
        default: 100,
    },
    PaymentHistory: [
        {
            PaidAmount: {
                type: Number
            },
            PaidDate: {
                type: Date
            }
        }
    ]
})

const ProfileData = mongoose.model('ProfileData', profileSchema)
export default ProfileData;