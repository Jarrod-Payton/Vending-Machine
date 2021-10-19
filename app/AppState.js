import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

export class SnackItems {
  Items = {
    Item1: new Item('Item1', '#100', 2.00, 20),
    Item2: new Item('Item2', '#101', 2.00, 20),
    Item3: new Item('Item3', '#102', 1.00, 20),
    Item4: new Item('Item4', '#103', 3.00, 20),
    Item5: new Item('Item5', '#104', 2.00, 20),
    Item6: new Item('Item6', '#105', 2.50, 20),
    Item7: new Item('Item7', '#106', 2.25, 20),
    Item8: new Item('Item8', '#107', 4.00, 20),
    Item9: new Item('Item9', '#108', 2.00, 20),
    Item10: new Item('Item10', '#109', 1.00, 20),
    Item11: new Item('Item11', '#110', 3.00, 20),
    Item12: new Item('Item12', '#111', 2.50, 20),
    Item13: new Item('Item13', '#112', 2.75, 20),
  }

}