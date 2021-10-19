import { generateId } from "../Utils/generateId.js"

export class Value {
  constructor(name, id, price, quantity) {
    this.name = name
    this.id = id
    this.price = price
    this.quantity = quantity
  }
}
