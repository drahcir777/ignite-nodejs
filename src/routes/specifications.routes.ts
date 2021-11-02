import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationServices } from "../modules/cars/services/CreateSpecificationServices";

const specificationRoutes = Router()
const specificationsRepository = new SpecificationRepository()

specificationRoutes.post("/", (req, res) => {
  const { name, description } = req.body
  const createSpecificationServices = new CreateSpecificationServices(specificationsRepository)
  createSpecificationServices.execute({ name, description })

  return res.status(201).send()
})

export { specificationRoutes }