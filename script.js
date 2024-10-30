// 整合的菜單項目
const menuItems = [
    { category: "主餐 - 蛋包飯", items: [
        { name: "紅酒燉牛肉", price: 280 },
        { name: "咖哩燴雞肉", price: 280 },
        { name: "法式海鮮", price: 280 }
    ]},
    { category: "主餐 - 燴烤飯", items: [
        { name: "蘑菇里肌", price: 280 },
        { name: "奶油菠菜鮭魚", price: 280 }
    ]},
    { category: "主餐 - 義大利麵", items: [
        { name: "火腿奶油燴雞", price: 280 },
        { name: "義式茄汁海鮮", price: 280 }
    ]},
    { category: "其他", items: [
        { name: "義式無骨雞腿排餐", price: 300 },
        { name: "夢見員工特餐", price: 200 }
    ]},
    { category: "特調", items: [
        { name: "我們的奇蹟（女僕特調）", price: 150 },
        { name: "地獄特調（慎點！）", price: 150 },
        { name: "魔界調色盤（葡萄）", price: 150 },
        { name: "締結奇蹟（櫻花）", price: 150 },
        { name: "傳說之龍07（水蜜桃）", price: 150 },
        { name: "存錢買船中（草莓）", price: 150 },
        { name: "法師的青蝶（白桃）", price: 150 },
        { name: "從天而降的天使（荔枝）", price: 150 },
        { name: "神聖彼岸（白葡萄）", price: 150 },
        { name: "晦界夜想曲（藍莓）", price: 150 }
    ]},
    { category: "飲料 - 茶", items: [
        { name: "紅茶 Ice/Hot", price: 80 },
        { name: "綠茶 Ice/Hot", price: 80 },
        { name: "伯爵紅茶 Hot", price: 120 },
        { name: "冰淇淋紅茶 Ice", price: 120 }
    ]},
    { category: "飲料 - 風味茶系列", items: [
        { name: "檸檬紅/綠茶", price: 110 },
        { name: "百香紅/綠茶", price: 110 },
        { name: "蜂蜜紅/綠茶", price: 110 },
        { name: "荔枝紅/綠茶", price: 110 }
    ]},
    { category: "飲料 - 鮮奶系列", items: [
        { name: "鮮奶茶", price: 120 },
        { name: "風味鮮奶茶", price: 150 },
        { name: "甜香 / 蜂蜜 / 巧克力 / 抹茶歐蕾", price: 150 },
        { name: "草莓歐蕾", price: 180 }
    ]},
    { category: "飲料 - 咖啡系列", items: [
        { name: "手沖精品咖啡（黑墨魂）", price: 150 },
        { name: "拿鐵咖啡", price: 150 },
        { name: "摩卡咖啡", price: 170 },
        { name: "焦糖瑪奇朵", price: 170 }
    ]},
    { category: "飲料 - 可爾必思系列", items: [
        { name: "可爾必思 Ice", price: 100 },
        { name: "隱藏風味可爾必思 Ice", price: 150 }
    ]},
    { category: "週邊", items: [
        { name: "正式女僕拍立得：單色簡易拍", price: 200 },
        { name: "多色豪華拍（追加一位女僕 +$150）", price: 250 },
        { name: "簽約女僕拍立得（不限單色、多色）", price: 250 },
        { name: "手機拍", price: 150 },
        { name: "女僕表演演出", price: 250 },
        { name: "簽繪", price: 100 }
    ]}
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
            li.addEventListener('click', () => addOrder(item));
            menuList.appendChild(li);
        });
    });
}

// 點選菜單項目後自動加入訂單
function addOrder(item) {
    let orders = getOrders();
    const existingOrder = orders.find(order => order.name === item.name);
    if (existingOrder) {
        existingOrder.quantity += 1;
    } else {
        orders.push({ ...item, quantity: 1 });
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
        orderList.appendChild(li);
    });
}

// 清除點餐紀錄
document.getElementById('clearOrders').addEventListener('click', function() {
    document.cookie = 'orders=; path=/; max-age=0';
    displayOrders();
});

// 頁面加載時顯示菜單與點餐紀錄
document.addEventListener('DOMContentLoaded', () => {
    displayMenu();
    displayOrders();
});
