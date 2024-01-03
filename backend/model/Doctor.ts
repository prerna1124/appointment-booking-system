import mongoose, { Schema, InferSchemaType } from "mongoose";

export interface Doctor {
    name: string;
    speciality: string;
    hospital: string;
    avgRating?: number;
    totalRating?: number;
    totalPatients?: number;
    photo?: string;
}

const doctorSchema = new Schema({
    name : {
        type : String,
        required: true
    },
    speciality : {
        type : String,
        required: true
    },
    avgRating : {
        type : Number,
        default : 5
    },
    totalRating : {
        type : Number,
        default : 5
    },
    photo : {
        type : String
    }, 
    totalPatients : {
        type : Number,
        default : 0
    }, 
    hospital : {
        type : String,
        required: true
    }
}, {collection:"doctor"});

const DoctorModel = mongoose.model<Doctor>('doctor', doctorSchema);
export default DoctorModel;