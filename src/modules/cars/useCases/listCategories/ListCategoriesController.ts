import { Request, Response } from "express";
import { container } from 'tsyringe';
import { ListCategoriesUseCase } from "../listCategories/ListCategoriesUseCase"

class ListCategoriesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listCategoriesUseCase = container.resolve(ListCategoriesUseCase)
        const all = await listCategoriesUseCase.execute();

        try {
            return response.json(all).send();
        } catch(error) {
            throw new Error(error)
        }
    }
}

export { ListCategoriesController };