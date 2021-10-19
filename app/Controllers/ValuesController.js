import { ProxyState } from "../AppState.js";
import { valuesService } from "../Services/ValuesService.js";


//Private
// function _draw() {
//   let values = ProxyState.values;
//   let cardsTemplate = ''
//   values.forEach(v => cardsTemplate += v.CardTemplate)
//   document.getElementById("app").innerHTML = /*html*/`
//   <div class="my-3">
//     <button class="btn btn-secondary text-white elevation-2" onclick="app.valuesController.addValue()">Add Value</button>  
//     <div class="values d-flex flex-wrap my-3">
//       ${cardsTemplate}
//     </div>
//   </div>
//   `
// }

//constructor(name, id, price, quantity) {
//  this.name = name
//  this.id = id
//  this.price = price
//  this.quantity = quantity
//}

//Public
export class ValuesController {
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
