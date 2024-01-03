// DoctorRepository.ts
import DoctorModel, { Doctor } from './../model/Doctor';
import { Collection, Db, MongoClient, ObjectId } from "mongodb";

class DoctorRepository {
    private doctorCollection: Collection<Doctor>;
    private db: Db;

    constructor(client : MongoClient) {
        this.db = client.db(process.env.DB_NAME)
        this.doctorCollection = this.db.collection<Doctor>('doctor');
    }

  async create(doctorData: Doctor): Promise<ObjectId> {
    try {
        const data = new DoctorModel(doctorData);
        const savedDoctor = await this.doctorCollection.insertOne(data);
        return savedDoctor.insertedId;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async findDoctor(id: string): Promise<Doctor | null> {
    try {
        const doctor = await this.doctorCollection.findOne({_id : new ObjectId(id)});
        return doctor;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async findAllDoctor(): Promise<Doctor[] | null> {
    try {
        const doctors : Doctor[] = await this.doctorCollection.find().toArray();
        return doctors;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default DoctorRepository;
