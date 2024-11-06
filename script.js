// 整合的菜單項目
const menuItems = [
    { category: "主餐 - 蛋包飯（有桌邊畫盤）", items: [
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
    { category: "主餐 - 其他", items: [
        { name: "義式無骨雞腿排餐", price: 300 },
        { name: "夢見員工特餐（咔拉雞)", price: 200 },
        { name: "夢見員工特餐（唐揚雞)", price: 200 }
    ]},
    { category: "輕食 - 炸物", items: [
        { name: "薯條", price: 150 },
        { name: "起司條", price: 150 },
        { name: "雞塊", price: 150 },
        { name: "雞柳條", price: 150 },
        { name: "炸物拼盤(含薯條，起司條，雞塊，雞柳條)", price: 300 }
    ]},
    { category: "輕食 - 熱壓", items: [
        { name: "培根花生醬三明治", price: 200 },
        { name: "肉鬆芋泥三明治", price: 200 }
    ]},
    { category: "輕食 - 帕尼尼", items: [
        { name: "辣菜脯里肌", price: 220 },
        { name: "卡拉雞", price: 220 },
        { name: "鯖魚", price: 220 },
        { name: "奶酥棉花糖", price: 180 }
    ]},
    { category: "輕食 - 點心", items: [
        { name: "女僕綜盤蛋糕（有桌邊畫盤）", price: 80 },
        { name: "女僕手作聖代（有魔法）", price: 150 },
        { name: "女僕現烤鬆餅（有桌邊畫盤）（口味選擇：巧克力、草莓、蜂蜜、煉乳）", price: 200 }
    ]},
    { category: "輕食 - 沙拉", items: [
        { name: "舒肥雞胸肉", price: 230 },
        { name: "烤雞腿肉", price: 230 },
        { name: "煙燻鮭魚", price: 230 }
    ]},
    { category: "特調", items: [
        { name: "我們的奇蹟（女僕特調，吧台隨機調製，有魔法）", price: 150 },
        { name: "地獄特調（慎點！）", price: 150 },
        { name: "魔界調色盤（葡萄）", price: 150 },
        { name: "締結奇蹟（櫻花）", price: 150 },
        { name: "傳說之龍o7（水蜜桃）", price: 150 },
        { name: "存錢買船中（草莓）", price: 150 },
        { name: "法師的青蝶（白桃）", price: 150 },
        { name: "從天而降的天使（荔枝）", price: 150 },
        { name: "神聖彼岸（白葡萄）", price: 150 },
        { name: "冥界夜想曲（薰衣草）", price: 150 }
    ]},
    { category: "飲料 - 茶", items: [
        { name: "紅茶 Ice/Hot", price: 80 },
        { name: "綠茶 Ice/Hot", price: 80 },
        { name: "伯爵紅茶 Hot", price: 120 },
        { name: "冰淇淋紅茶 Ice", price: 120 }
    ]},
    { category: "飲料 - 風味茶系列", items: [
        { name: "檸檬紅/綠茶 Ice/Hot", price: 110 },
        { name: "百香紅/綠茶 Ice/Hot", price: 110 },
        { name: "蜂蜜紅/綠茶 Ice/Hot", price: 110 },
        { name: "荔枝紅/綠茶 Ice/Hot", price: 110 }
    ]},
    { category: "飲料 - 鮮奶系列", items: [
        { name: "鮮奶茶 Ice/Hot", price: 120 },
        { name: "風味鮮奶茶 Ice/Hot （口味選擇：焦糖、蜂蜜、巧克力、抹茶）", price: 150 },
        { name: "草莓歐蕾 Ice/Hot", price: 180 }
    ]},
    { category: "飲料 - 咖啡系列", items: [
        { name: "手沖精品咖啡（黑靈魂，另有單品豆單可供選擇）Ice/Hot", price: 150 },
        { name: "拿鐵咖啡 Ice/Hot", price: 150 },
        { name: "摩卡咖啡 Ice/Hot", price: 170 },
        { name: "焦糖瑪奇朵 Ice/Hot", price: 170 }
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

// 檢查是否為 UTC+8 的星期一到星期五中午 12:00 至下午 5:00
function checkIfLunchTime() {
    const now = new Date();
    const utc8Offset = 8 * 60 * 60 * 1000; // UTC+8 偏移量
    const localTime = new Date(now.getTime() + utc8Offset);
    const day = localTime.getUTCDay(); // 0 是星期天，1-5 是星期一到星期五
    const hour = localTime.getUTCHours(); // 0-23 小時制

    // 檢查是否為星期一到星期五的中午12點到下午5點
    return (day >= 1 && day <= 5) && (hour >= 12 && hour < 17);
}

// 提示選擇冰量/溫度
function promptForIceLevel() {
    const options = ["冰正常", "少冰", "去冰", "熱"];
    let choice = prompt(`請選擇冰量/溫度：\n1. 冰正常\n2. 少冰\n3. 去冰\n4. 熱`);
    const choiceIndex = parseInt(choice) - 1;
    if (choiceIndex >= 0 && choiceIndex < options.length) {
        return options[choiceIndex];
    }
    return "冰正常"; // 默認為冰正常
}

// 提示選擇鬆餅口味
function promptForPancakeFlavor() {
    const flavors = ["巧克力", "草莓", "蜂蜜", "煉乳"];
    let choice = prompt(`請選擇鬆餅口味：\n1. 巧克力\n2. 草莓\n3. 蜂蜜\n4. 煉乳`);
    const choiceIndex = parseInt(choice) - 1;
    if (choiceIndex >= 0 && choiceIndex < flavors.length) {
        return flavors[choiceIndex];
    }
    return "巧克力"; // 默認為巧克力
}

// 提示選擇風味鮮奶茶口味
function promptForFlavorChoice() {
    const flavors = ["焦糖", "蜂蜜", "巧克力", "抹茶"];
    let choice = prompt(`請選擇風味鮮奶茶口味：\n1. 焦糖\n2. 蜂蜜\n3. 巧克力\n4. 抹茶`);
    const choiceIndex = parseInt(choice) - 1;
    if (choiceIndex >= 0 && choiceIndex < flavors.length) {
        return flavors[choiceIndex];
    }
    return "焦糖"; // 默認為焦糖
}

// 點選菜單項目後彈出備註框並加入訂單
function promptForItemNoteAndAddOrder(item, category) {
    // 如果是主餐並且在不供應的時間，彈出提示
    if ((category.includes("主餐")) && checkIfLunchTime()) {
        alert("目前為不供應主餐的時間，請與廚房確認");
    }

    let note = "";

    // 若為飲料，先選擇冰量/溫度
    if (category.includes("飲料")) {
        note = promptForIceLevel();
    }
    
    // 若為女僕現烤鬆餅，提示選擇口味
    if (item.name === "女僕現烤鬆餅") {
        note = promptForPancakeFlavor();
    }

    // 若為風味鮮奶茶，提示選擇鮮奶茶口味
    if (item.name === "風味鮮奶茶 Ice/Hot") {
        note = promptForFlavorChoice();
    }

    // 添加額外備註
    const additionalNote = prompt(`為 ${item.name} 添加備註：`, "");
    note += additionalNote ? `，${additionalNote}` : "";

    addOrder(item, note);
}

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
            li.addEventListener('click', () => promptForItemNoteAndAddOrder(item, category.category));
            menuList.appendChild(li);
        });
    });
}

// 新增備註至訂單
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
    displayOrders();
});

// 提交訂單
document.getElementById('submitOrder').addEventListener('click', function() {
    const tableNumber = document.getElementById('tableNumber').value;
    const tablePosition = document.getElementById('tablePosition').value;
    const orders = getOrders();
    if (orders.length === 0) {
        alert("您尚未添加任何訂單！");
        return;
    }

    // 計算總金額和服務費
    let subtotal = 0;
    let serviceCharge = 0;
    orders.forEach(order => {
        const category = menuItems.find(cat => cat.items.some(i => i.name === order.name)).category;
        const orderTotal = order.quantity * order.price;
        subtotal += orderTotal;

        // 排除週邊商品的服務費
        if (category !== "週邊") {
            serviceCharge += Math.round(orderTotal * 0.1);
        }
    });

    const total = subtotal + serviceCharge;

    const orderDetails = orders.map(order => `${order.name} x ${order.quantity} - $${order.quantity * order.price}${order.note ? '（備註：' + order.note + '）' : ''}`).join('\n');
    alert(`訂單已提交！\n桌號：${tableNumber}\n位置：${tablePosition}\n訂單明細：\n${orderDetails}\n服務費：$${serviceCharge}\n總金額：$${total}`);
    
    // 清除訂單
    document.cookie = 'orders=; path=/; max-age=0';
    displayOrders();
});

// 頁面加載時顯示菜單與點餐紀錄
document.addEventListener('DOMContentLoaded', () => {
    displayMenu();
    displayOrders();
});