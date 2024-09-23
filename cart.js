let totalCartBought = 0;
let totalItemsInCart = 0;  
let cart = {};

let stock ={
    'Path of Exile': 10,
    'World of Warcraft': 10,
    'Warcraft': 10,
    'Last Epoch': 10,
    'Diablo IV': 10,
}


function buyItem(name, price) {
    if (stock[name] > 0) {
        stock[name]--;  

        document.getElementById(`stock-${name.replace(/\s+/g, '-')}`).innerText = stock[name];

        const itemsBoughtElement = document.querySelector('#cart #items');
        const newLiItem = document.createElement('li');
        newLiItem.innerHTML = `${name} with price: ${price}$`;
        itemsBoughtElement.append(newLiItem);

        totalCartBought += price;
        totalItemsInCart++;

        document.getElementById('cart-total').innerText = totalCartBought;
        document.getElementById('cart-quantity').innerText = totalItemsInCart;
        document.getElementById('total').innerText = `${totalItemsInCart} items`;
    } else {
        alert(`${name} is out of stock!`);
    }
}

document.querySelector('.add-comment-btn').addEventListener('click', () => {
    const commentInput = document.querySelector('.comment-input');
    const commentText = commentInput.value.trim();

    if (commentText) {
        const commentsList = document.querySelector('.comments-list');
        const newComment = document.createElement('li');
        newComment.textContent = commentText;

        commentsList.appendChild(newComment);

        commentInput.value = '';
    } else {
        alert("Enter your comments...");
    }
})