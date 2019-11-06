var budgetController = (function() {
  function Expense(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }

  function Income(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  };
})();

var UIController = (function() {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn"
  };
  return {
    getinput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },
    getDOMstrings: function() {
      return DOMstrings;
    }
  };
})();

var controller = (function(budgetCtrl, UICtrl) {
  function setupEventListener() {
    document.querySelector(UIController.getDOMstrings().addBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13) {
        ctrlAddItem();
      }
    });
  }

  function ctrlAddItem() {
    var input = UIController.getinput();
    console.log(input);
  }
  return {
    init: function() {
      console.log("Application has started!");
      setupEventListener();
    }
  };
})(budgetController, UIController);

controller.init();
