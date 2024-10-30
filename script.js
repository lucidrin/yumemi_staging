// 點餐表單處理
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const item = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;
    
    if (item && quantity > 0) {
        const order = { item, quantity };
        saveOrder(order);
        displayOrders();
        document.getElementById('orderForm').reset();
    }
});

// 儲存點餐至 cookie
function saveOrder(order) {
    let orders = getOrders();
    orders.push(order);
    document.cookie = `orders=${JSON.stringify(orders)}; path=/; max-age=${60 * 60 * 24 * 7}`; // 1週有效
}

// 取得 cookie 中的點餐紀錄
function getOrders() {
    const cookieValue = document.cookie.split('; ').find(row => row.startsWith('orders='));
    return cookieValue ? JSON.parse(cookieValue.split('=')[1]) : [];
}

// 顯示點餐紀錄
function displayOrders() {
    const orders = getOrders();
    const orderList = document.getElementById('orderList');
    orderList.innerHTML = '';
    orders.forEach((order, index) => {
        const li = document.createElement('li');
        li.textContent = `${order.item} x ${order.quantity}`;
        orderList.appendChild(li);
    });
}

// 清除點餐紀錄
document.getElementById('clearOrders').addEventListener('click', function() {
    document.cookie = 'orders=; path=/; max-age=0';
    displayOrders();
});

// 頁面加載時顯示點餐紀錄
document.addEventListener('DOMContentLoaded', displayOrders);
