import { Router } from 'express'
import { createCategoryController } from '../modules/cars/useCases/createCategory'

const categoriesRoutes = Router()


categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res)
})

categoriesRoutes.get("/", (req, res) => {

})
export { categoriesRoutes }