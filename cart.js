const cart_items = JSON.parse(localStorage.getItem("cart-items"));
const cartItems_el = document.querySelector(".food-list");

cart_items.forEach((item) => {
    const divEl = document.createElement("div");
    divEl.classList.add("cart-item");

    const innerHTML = `
    <div class="image">
                        <img src="./images/food-1.png" alt="">
                    </div>
                    <div class="text">
                        <h2>Cusline Pizza</h2>
                    </div>
                    <div class="amount">
                        <h2>7,000</h2>
                    </div>
                    <div class="amount-plus">
                        <i class="fas fa-minus"></i>
                        <h3>1</h3>
                        <i class="fas fa-plus"></i>
                    </div>
                    <i class="fas fa-xmark"></i>`
  
    divEl.innerHTML = innerHTML;
    const incrementBtn = divEl.querySelector('.add');
    const decrementBtn = divEl.querySelector(".subtract");
    const deleteBtn = divEl.querySelector("#deleteBtn");

    incrementBtn.addEventListener("click", () => handleIncrement(item));
    decrementBtn.addEventListener("click", () => handleDecrement(item));
    deleteBtn.addEventListener("click", () => handleDelete(item));
    cartItems_el.append(divEl);
});

// Delete item
function handleDelete(item) {
    const cart_items = getItems();
    const newCartitems = cart_items.filter(
        (cart_item) => cart_item.id !== item.id
    );
}

function renderitems() {
    const cart_items = getItems();
    const cartItems_el = document.querySelector(".cart-iems");

    // Clear DOM
    cartItems_el.innerHTML = "";

    cart_items.forEach((item) => {
    });
}


// Item increment
function handleIncrement(item){
    const cart_items = getItems();
    const newCartItems = cart_items.map((cart_item) => {
        if (cart_item.id == item.id && cart_item.quantity > 1) {
            return {...cart_item, quantity: cart_item.quantity - 1};
        } else {
            return cart_item;
        }
    });
    localStorage.setItem("cart-items", JSON.stringify("newCartitems")); 
    renderitems();   
}


// Gets items from localStorage
function getItems() {
    const cart_items = JSON.parse(localStorage.getItem("cart-items"));
    return cart_items;
}

function getTotal(items) {
    items.reduce((total, item) => {
        const newTotal = total + (item.quantity * item.price);
        console.log(newTotal);       
    }, 0);
}



