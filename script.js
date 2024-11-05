// 整合的菜單項目
const menuItems = [
    { category: "主餐 - 蛋包飯", items: [
        { name: "紅酒燉牛肉", price: 280 },
        { name: "咖哩燴雞肉", price: 280 },
        { name: "法式海鮮", price: 280 }
    ]},
    // ... 其他菜單分類
];

// 動態生成菜單
function displayMenu() {
    const menuList = document.getElementById('menuList');
    menuList.innerHTML = '';
    menuItems.forEach(category => {
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category.category;
        menuList.appendChild(categoryTitle);

        category.items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price}`;
            li.addEventListener('click', () => promptForItemNoteAndAddOrder(item));
            menuList.appendChild(li);
        });
    });
}

// 點選菜單項目後彈出備註框並加入訂單
function promptForItemNoteAndAddOrder(item) {
    const note = prompt(`為 ${item.name} 添加備註：`, "");
    addOrder(item, note);
}

function addOrder(item, note) {
    let orders = getOrders();
    const existingOrder = orders.find(order => order.name === item.name);
    if (existingOrder) {
        existingOrder.quantity += 1;
        if (note) existingOrder.note = note; // 更新備註
    } else {
        orders.push({ ...item, quantity: 1, note: note || "" });
    }
    saveOrders(orders);
    displayOrders();
}

// 儲存點餐至 cookie
function saveOrders(orders) {
    document.cookie = `orders=${JSON.stringify(orders)}; path=/; max-age=${60 * 60 * 24 * 7}`;
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
    orders.forEach((order) => {
        const li = document.createElement('li');
        li.textContent = `${order.name} x ${order.quantity} - $${order.quantity * order.price}`;
        if (order.note) {
            const noteSpan = document.createElement('span');
            noteSpan.textContent = `（備註：${order.note}）`;
            li.appendChild(noteSpan);
        }
        orderList.appendChild(li);
    });
}

// 清除點餐紀錄
document.getElementById('clearOrders').addEventListener('click', function() {
    document.cookie = 'orders=; path=/; max-age=0';
    document.cookie = 'tableNumber=; path=/; max-age=0';
    document.cookie = 'note=; path=/; max-age=0';
    displayOrders();
    document.getElementById('tableNumber').value = '1'; // 重置桌號
    document.getElementById('note').value = '';
});

// 提交訂單時保存桌號和備註
document.getElementById('submitOrder').addEventListener('click', function() {
    const tableNumber = document.getElementById('tableNumber').value;
    const note = document.getElementById('note').value;

    document.cookie = `tableNumber=${tableNumber}; path=/; max-age=${60 * 60 * 24 * 7}`;
    document.cookie = `note=${note}; path=/; max-age=${60 * 60 * 24 * 7}`;
    
    alert("訂單已提交！");
});

// 頁面加載時顯示菜單、點餐紀錄、桌號和備註
document.addEventListener('DOMContentLoaded', () => {
    displayMenu();
    displayOrders();
    loadTableNumberAndNote();
});

// 載入桌號和備註
function loadTableNumberAndNote() {
    const tableNumber = getCookie('tableNumber');
    const note = getCookie('note');

    if (tableNumber) document.getElementById('tableNumber').value = tableNumber;
    if (note) document.getElementById('note').value = note;
}

// 取得特定的 cookie 值
function getCookie(name) {
    const cookieValue = document.cookie.split('; ').find(row => row.startsWith(`${name}=`));
    return cookieValue ? decodeURIComponent(cookieValue.split('=')[1]) : '';
}
