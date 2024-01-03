// DoctorService.ts
import {Doctor} from './../model/Doctor';
import DoctorRepository from './../repository/DoctorRepository'; // Import your repository
import {ObjectId, MongoClient} from "mongodb";

class DoctorService {
  private doctorRepository: DoctorRepository;

  constructor(client : MongoClient) {
    this.doctorRepository = new DoctorRepository(client);
  }

  async saveDoctor(doctorData: Doctor): Promise<ObjectId> {
    try {
      const newDoctorId = await this.doctorRepository.create(doctorData);
      return newDoctorId;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async findDoctor(id : string): Promise<Doctor | null> {
    try {
      // Additional business logic can be added here if needed
      const doctor : Doctor = await this.doctorRepository.findDoctor(id);
      return doctor;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async findAllDoctor(): Promise<Doctor[] | null> {
    try {
      // Additional business logic can be added here if needed
      const doctors : Doctor[] = await this.doctorRepository.findAllDoctor();
      return doctors;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default DoctorService;
