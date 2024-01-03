import { Router, Request, Response } from "express";
import DoctorService from "../service/DoctorService";
import DoctorModel from "../model/Doctor";
import { connectToDb } from "./../utils/Database";

const usersRouter = Router();

const client = connectToDb();
const doctorService = new DoctorService(client);

usersRouter.post("/doctors", async (request : Request, response: Response)=> {
    try {
        const docData = new DoctorModel(request.body);
        const newDoctor = await doctorService.saveDoctor(docData);
        if (newDoctor) {
            return response.status(201).json(newDoctor);
        } else {
            return response.status(500).json({ error: 'Failed to create doctor' });
        }
    } catch (error) {
      console.error('Error creating doctor:', error);
      return response.status(500).json({ error: 'Internal Server Error' });
    }
});

usersRouter.get("/doctors/:id", async (request : Request, response: Response)=> {
    try {
        const docId = request.params.id;
        const doctor = await doctorService.findDoctor(docId);
        if (doctor) {
            return response.status(201).json(doctor);
        } else {
            return response.status(500).json({ error: 'Doctor does not exist.' });
        }
    } catch (error) {
      console.error('Error finding doctor:', error);
      return response.status(500).json({ error: 'Internal Server Error' });
    }
});

usersRouter.get("/doctors", async (request : Request, response: Response)=> {
    try {
        const doctors = await doctorService.findAllDoctor();
        if (doctors) {
            return response.status(201).json(doctors);
        } else {
            return response.status(500).json({ error: 'Doctor does not exist.' });
        }
    } catch (error) {
      console.error('Error finding doctor:', error);
      return response.status(500).json({ error: 'Internal Server Error' });
    }
});

export default usersRouter;