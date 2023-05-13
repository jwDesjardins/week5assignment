class MenuItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  describe() {
    return `${this.name}: $${this.price.toFixed(2)}`;
  }
}

class Menu {
  constructor(items) {
    this.items = [];
  }

  addItem(item) {
    if (item instanceof item) {
      this.items.push(item);
    } else {
      throw new Error(`You can only add an instance of Item.
      argument is not a item: ${item}`);
    }
  }
  describe() {
    return `${this.name} has ${this.players.length} players.`;
    }

  removeItem(index) {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
    } else {
      throw new Error("Invalid index.");
    }
  }

  displayItems() {
    if (this.items.length === 0) {
      console.log("The menu is empty.");
    } else {
      console.log("Menu Items:");
      this.items.forEach((item, index) => {
        console.log(`${index}) ${item.describe()}`);
      });
    }
  }
}

class RestaurantMenu {
  constructor() {
    this.menus = [];
    this.selectedMenu = null;
  }

  showMainMenuOptions() {
    return prompt(`
      KENKEN RESTAURANT
      0) Exit
      1) Faire une commande
      2) View a menu
      3) Delete a items
      4) Add item to the menu
      5) Remove item from the menu
      6) Display all items
    `);
  }

  start() {
    let selection = -1;
    while (selection !== 0) {
      selection = parseInt(this.showMainMenuOptions());
      switch (selection) {
        case 1:
          this.createMenu();
          break;
        case 2:
          this.viewMenu();
          break;
        case 3:
          this.deleteMenu();
          break;
        case 4:
          this.addItemToMenu();
          break;
        case 5:
          this.removeItemFromMenu();

          break;
        case 6:
          this.displayMenus();
          break;
        case 0:
          prompt("Goodbye!");
          break;
        default:
          prompt("Invalid choice. Please try again.");
      }
    }
  }

  createMenu() {
    const menuName = prompt("Enter the name for the new menu:");
    const menu = new Menu();
    menu.name = menuName.trim;
    this.menus.push(menu);
    prompt(`Menu "${menuName}" created successfully.`);
  }

  viewMenu() {
    const index = parseInt(prompt("Enter the index of the menu to view:"));
    if (index >= 0 && index < this.menus.length) {
      this.selectedMenu = this.menus[index];
      prompt(`Menu: ${this.selectedMenu.name}`);
      this.selectedMenu.displayItems();
    } else {
      prompt("Invalid menu index.");
    }
  }

  deleteMenu() {
    const index = parseInt(prompt("Enter the index of the menu to delete:"));
    if (index >= 0 && index < this.menus.length) {
      const menuName = this.menus[index].name;
      this.menus.splice(index, 1);
      prompt(`Menu "${menuName}" deleted successfully.`);
    } else {
      prompt("Invalid menu index.");
    }
  }

  addItemToMenu() {
    const index = parseInt(prompt("Enter the index of the menu to add item:"));
    if (index >= 0 && index < this.menus.length) {
      const itemName = prompt("Enter the name of the item");
    }}}
      const restaurantMenu = new RestaurantMenu();
restaurantMenu.start();
    