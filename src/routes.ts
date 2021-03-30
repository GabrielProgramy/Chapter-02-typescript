import { Request, Response } from 'express';
import CreateCoursesService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {

  CreateCoursesService.execute({
    name: "Node.js",
    duration: 10,
    educator: "Dani"
  });
  return response.send();
}