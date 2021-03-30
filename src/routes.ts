import { Request, Response } from 'express';
import CreateCoursesService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {

  CreateCoursesService.execute({
    name: "Node.js",
    duration: 10,
    educator: "Dani"
  });
  CreateCoursesService.execute({
    name: "React",
    educator: "Diego"
  });
  return response.send();
}