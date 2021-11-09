import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory"
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"


let createCategory: CreateCategoryUseCase
let categoriesRespositoryInMemory: CategoriesRepositoryInMemory

describe("Create Category", () => {
  beforeEach(() => {
    categoriesRespositoryInMemory = new CategoriesRepositoryInMemory()
    createCategory = new CreateCategoryUseCase(categoriesRespositoryInMemory)

  })
  it("shold be able to create a new category", () => {

  })
})