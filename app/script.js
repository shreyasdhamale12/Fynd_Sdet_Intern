// <!--  ---------------------------- Note: This written by  gpt--------------------------------- -->
// ==========================================
// 1. PRODUCT DATA
// ==========================================

const products = [

    {
        id: 1,
        name: "Coffee Mug",
        price: 250
    },

    {
        id: 2,
        name: "Notebook",
        price: 150
    }

];


// ==========================================
// 2. CART DATA
// ==========================================

let cart = [];

let orderPlaced = false;


// ==========================================
// 3. GET HTML ELEMENTS
// ==========================================

// Cart Elements

const cartItems = document.getElementById("cart-items");

const orderTotal = document.getElementById("order-total");

const totalProducts = document.getElementById("total-products");

const totalItems = document.getElementById("total-items");


// Customer Elements

const customerName = document.getElementById("customer-name");

const validationMessage = document.getElementById("validation-message");


// Order Elements

const placeOrderButton = document.getElementById("place-order");

const confirmationSection = document.getElementById("confirmation-section");

const confirmationMessage = document.getElementById("confirmation-message");

const orderReference = document.getElementById("order-reference");


// Other Buttons

const resetCartButton = document.getElementById("reset-cart");

const addMugButton = document.getElementById("add-mug");

const addNotebookButton = document.getElementById("add-notebook");


// ==========================================
// 4. ADD PRODUCT TO CART
// ==========================================

function addToCart(productId) {

    // Prevent modification after order placement

    if (orderPlaced) return;


    // Find selected product

    const product = products.find(p => p.id === productId);


    // Check whether product already exists in cart

    const existingItem = cart.find(item => item.id === productId);


    if (existingItem) {

        // Increase existing product quantity

        existingItem.quantity++;

    } else {

        // Add new product to cart

        cart.push({

            ...product,

            quantity: 1

        });

    }


    // Update cart display

    renderCart();

}


// ==========================================
// 5. INCREASE QUANTITY
// ==========================================

function increaseQuantity(productId) {

    if (orderPlaced) return;


    const item = cart.find(item => item.id === productId);


    if (item) {

        item.quantity++;

    }


    renderCart();

}


// ==========================================
// 6. DECREASE QUANTITY
// ==========================================

function decreaseQuantity(productId) {

    if (orderPlaced) return;


    const item = cart.find(item => item.id === productId);


    if (item) {

        item.quantity--;


        // Remove product when quantity reaches zero

        if (item.quantity <= 0) {

            removeItem(productId);

            return;

        }

    }


    renderCart();

}


// ==========================================
// 7. REMOVE PRODUCT FROM CART
// ==========================================

function removeItem(productId) {

    if (orderPlaced) return;


    cart = cart.filter(item => item.id !== productId);


    renderCart();

}


// ==========================================
// 8. CALCULATE ORDER TOTAL
// ==========================================

function calculateTotal() {

    return cart.reduce((total, item) => {

        return total + (item.price * item.quantity);

    }, 0);

}


// ==========================================
// 9. CALCULATE TOTAL ITEMS
// ==========================================

function calculateTotalItems() {

    return cart.reduce((total, item) => {

        return total + item.quantity;

    }, 0);

}


// ==========================================
// 10. DISPLAY CART
// ==========================================

function renderCart() {

    // Clear previous cart display

    cartItems.innerHTML = "";


    // Display empty cart message

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <p id="empty-cart-message">

                Your cart is empty.

            </p>

        `;

    }


    // Display each cart product

    cart.forEach(item => {

        const lineTotal = item.price * item.quantity;


        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";

        cartItem.setAttribute(
            "data-testid",
            `cart-item-${item.id}`
        );


        cartItem.innerHTML = `

            <div>

                <h3>${item.name}</h3>

                <p>
                    Price: ₹${item.price}
                </p>

                <p data-testid="line-total-${item.id}">

                    Line Total: ₹${lineTotal.toFixed(2)}

                </p>

            </div>


            <div class="quantity-controls">


                <button
                    type="button"
                    data-testid="decrease-${item.id}"
                    aria-label="Decrease ${item.name} quantity"
                    ${orderPlaced ? "disabled" : ""}>

                    -

                </button>


                <span data-testid="quantity-${item.id}">

                    ${item.quantity}

                </span>


                <button
                    type="button"
                    data-testid="increase-${item.id}"
                    aria-label="Increase ${item.name} quantity"
                    ${orderPlaced ? "disabled" : ""}>

                    +

                </button>


                <button
                    type="button"
                    class="remove-button"
                    data-testid="remove-${item.id}"
                    ${orderPlaced ? "disabled" : ""}>

                    Remove

                </button>


            </div>

        `;


        cartItems.appendChild(cartItem);

    });


    // Attach event listeners to quantity buttons

    cart.forEach(item => {


        const increaseButton = document.querySelector(
            `[data-testid="increase-${item.id}"]`
        );


        const decreaseButton = document.querySelector(
            `[data-testid="decrease-${item.id}"]`
        );


        const removeButton = document.querySelector(
            `[data-testid="remove-${item.id}"]`
        );


        increaseButton.addEventListener("click", () => {

            increaseQuantity(item.id);

        });


        decreaseButton.addEventListener("click", () => {

            decreaseQuantity(item.id);

        });


        removeButton.addEventListener("click", () => {

            removeItem(item.id);

        });

    });


    // Update order total

    orderTotal.textContent =
        `₹${calculateTotal().toFixed(2)}`;


    // Update distinct product count

    totalProducts.textContent = cart.length;


    // Update combined quantity count

    totalItems.textContent = calculateTotalItems();

    // Disable Reset Cart when cart is empty

    resetCartButton.disabled = cart.length === 0;

}


// ==========================================
// 11. PLACE ORDER
// ==========================================

function placeOrder() {


    // Prevent duplicate order submission

    if (orderPlaced) return;


    // Clear previous validation message

    validationMessage.textContent = "";


    // Validate empty cart

    if (cart.length === 0) {

        validationMessage.textContent =
            "Your cart is empty. Please add a product.";

        return;

    }


    // Validate customer name

    if (customerName.value.trim() === "") {

        validationMessage.textContent =
            "Please enter your name to place the order.";

        return;

    }


    // Mark order as placed

    orderPlaced = true;


    // Disable order button

    placeOrderButton.disabled = true;

    placeOrderButton.textContent = "Order Placed";


    // Disable product buttons

    addMugButton.disabled = true;

    addNotebookButton.disabled = true;


    // Generate unique order reference

    const reference = "ORD-" +

        Math.random()
            .toString(36)
            .substring(2, 8)
            .toUpperCase();


    // Display confirmation message

    confirmationMessage.textContent =

        `Thank you, ${customerName.value.trim()}. Your order has been confirmed.`;


    // Display order reference

    orderReference.textContent = reference;


    // Show confirmation section

    confirmationSection.hidden = false;


    // Refresh cart to disable quantity controls

    renderCart();

}


// ==========================================
// 12. RESET CART
// ==========================================

function resetCart() {


    // Clear cart products

    cart = [];


    // Allow a new order

    orderPlaced = false;


    // Clear customer name

    customerName.value = "";


    // Clear validation message

    validationMessage.textContent = "";


    // Hide confirmation section

    confirmationSection.hidden = true;


    // Clear confirmation details

    confirmationMessage.textContent = "";

    orderReference.textContent = "";


    // Enable Place Order button

    placeOrderButton.disabled = false;

    placeOrderButton.textContent = "Place Order";


    // Enable product buttons

    addMugButton.disabled = false;

    addNotebookButton.disabled = false;


    // Refresh cart display

    renderCart();

}


// ==========================================
// 13. PRODUCT BUTTON EVENT LISTENERS
// ==========================================

addMugButton.addEventListener("click", () => {

    addToCart(1);

});


addNotebookButton.addEventListener("click", () => {

    addToCart(2);

});


// ==========================================
// 14. PLACE ORDER EVENT LISTENER
// ==========================================

placeOrderButton.addEventListener("click", placeOrder);


// ==========================================
// 15. RESET CART EVENT LISTENER
// ==========================================

resetCartButton.addEventListener("click", resetCart);


// ==========================================
// 16. INITIAL CART DISPLAY
// ==========================================

renderCart();
