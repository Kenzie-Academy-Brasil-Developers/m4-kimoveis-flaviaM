import { Request, Response } from "express";
import { TCreateSchedule } from "../interfaces/schedules.interfaces";
import createSchedulesService from "../services/schedules/createSchedules.services";
import getSchedulesService from "../services/schedules/getSchedules.services";

const createSchedulesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const scheduleData: TCreateSchedule = req.body;
  const userId: number = req.user.id;
  const schedule = await createSchedulesService(scheduleData, userId);

  return res.status(201).json(schedule);
};

const getSchedulesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const estateId: number = parseInt(req.params.body);
  const schedules = await getSchedulesService(estateId);

  return res.json(schedules);
};
export { createSchedulesController, getSchedulesController };
