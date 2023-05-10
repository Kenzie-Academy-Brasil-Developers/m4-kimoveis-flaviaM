import { Request, Response } from "express";
import createSchedulesService from "../services/schedules/createSchedules.services";
import getSchedulesService from "../services/schedules/getSchedules.services";

const createSchedulesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = res.locals.user.id;
  const schedule = await createSchedulesService(req.body, userId);

  return res.status(201).json(schedule);
};

const getSchedulesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const estateId: number = parseInt(req.params.id);
  const schedules = await getSchedulesService(estateId);

  return res.json(schedules);
};
export { createSchedulesController, getSchedulesController };
