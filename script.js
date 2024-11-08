// 整合的菜單項目
const menuItems = [
    {
        category: "主餐 - 蛋包飯（有桌邊畫盤）", items: [
            { name: "主餐 - 蛋包飯 - 紅酒燉牛肉", price: 280 },
            { name: "主餐 - 蛋包飯 - 咖哩燴雞肉", price: 280 },
            { name: "主餐 - 蛋包飯 - 法式海鮮", price: 280 }
        ]
    },
    {
        category: "主餐 - 燴烤飯", items: [
            { name: "主餐 - 燴烤飯 - 蘑菇里肌", price: 280 },
            { name: "主餐 - 燴烤飯 - 奶油菠菜鮭魚", price: 280 }
        ]
    },
    {
        category: "主餐 - 義大利麵", items: [
            { name: "主餐 - 義大利麵 - 火腿奶油燴雞", price: 280 },
            { name: "主餐 - 義大利麵 - 義式茄汁海鮮", price: 280 }
        ]
    },
    {
        category: "主餐 - 其他", items: [
            { name: "主餐 - 其他 - 義式無骨雞腿排餐", price: 300 },
            { name: "主餐 - 其他 - 夢見員工特餐（咔拉雞)", price: 200 },
            { name: "主餐 - 其他 - 夢見員工特餐（青花椒雞)", price: 200 }
        ]
    },
    {
        category: "主餐升級套餐", items: [
            { name: "+80 元升級成套餐，附紅/綠茶及蛋糕，可加價更換其他飲料", price: 80 },
        ]
    },
    {
        category: "輕食 - 炸物", items: [
            { name: "輕食 - 炸物 - 薯條", price: 150 },
            { name: "輕食 - 炸物 - 起司條", price: 150 },
            { name: "輕食 - 炸物 - 雞塊", price: 150 },
            { name: "輕食 - 炸物 - 雞柳條", price: 150 },
            { name: "輕食 - 炸物 - 炸物拼盤 (含薯條，起司條，雞塊，雞柳條)", price: 300 }
        ]
    },
    {
        category: "輕食 - 熱壓", items: [
            { name: "輕食 - 熱壓 - 培根花生醬三明治", price: 200 },
            { name: "輕食 - 熱壓 - 肉鬆芋泥三明治", price: 200 }
        ]
    },
    {
        category: "輕食 - 帕尼尼", items: [
            { name: "輕食 - 帕尼尼 - 辣菜脯里肌", price: 220 },
            { name: "輕食 - 帕尼尼 - 卡拉雞", price: 220 },
            { name: "輕食 - 帕尼尼 - 鯖魚", price: 220 },
            { name: "輕食 - 帕尼尼 - 奶酥棉花糖", price: 180 }
        ]
    },
    {
        category: "輕食 - 點心", items: [
            { name: "輕食 - 點心 - 女僕繪盤蛋糕（有桌邊畫盤）", price: 80 },
            { name: "輕食 - 點心 - 女僕手作聖代（有魔法）", price: 150 },
            { name: "輕食 - 點心 - 女僕現烤鬆餅（有桌邊畫盤）", price: 200 }
        ]
    },
    {
        category: "輕食 - 沙拉", items: [
            { name: "輕食 - 沙拉 - 舒肥雞胸肉", price: 230 },
            { name: "輕食 - 沙拉 - 烤雞腿肉", price: 230 },
            { name: "輕食 - 沙拉 - 煙燻鮭魚", price: 230 }
        ]
    },
    {
        category: "特調", items: [
            { name: "特調 - 我們的奇蹟（女僕特調，吧台隨機調製，有魔法）", price: 150 },
            { name: "特調 - 地獄特調（慎點！）", price: 150 },
            { name: "特調 - 魔界調色盤（葡萄）", price: 150 },
            { name: "特調 - 締結奇蹟（櫻花）", price: 150 },
            { name: "特調 - 傳說之龍 o7（水蜜桃）", price: 150 },
            { name: "特調 - 存錢買船中（草莓）", price: 150 },
            { name: "特調 - 法師的青蝶（白桃）", price: 150 },
            { name: "特調 - 從天而降的天使（荔枝）", price: 150 },
            { name: "特調 - 神聖彼岸（白葡萄）", price: 150 },
            { name: "特調 - 冥界夜想曲（薰衣草）", price: 150 }
        ]
    },
    {
        category: "飲料 - 茶", items: [
            { name: "飲料 - 茶 - 紅茶 Ice/Hot", price: 80 },
            { name: "飲料 - 茶 - 綠茶 Ice/Hot", price: 80 },
            { name: "飲料 - 茶 - 伯爵紅茶 Hot", price: 120 },
            { name: "飲料 - 茶 - 冰淇淋紅茶 Ice", price: 120 }
        ]
    },
    {
        category: "飲料 - 風味茶系列", items: [
            { name: "飲料 - 風味茶 - 檸檬紅/綠茶 Ice/Hot", price: 110 },
            { name: "飲料 - 風味茶 - 百香紅/綠茶 Ice/Hot", price: 110 },
            { name: "飲料 - 風味茶 - 蜂蜜紅/綠茶 Ice/Hot", price: 110 },
            { name: "飲料 - 風味茶 - 荔枝紅/綠茶 Ice/Hot", price: 110 }
        ]
    },
    {
        category: "飲料 - 鮮奶系列", items: [
            { name: "飲料 - 鮮奶系列 - 鮮奶茶 Ice/Hot", price: 120 },
            { name: "飲料 - 鮮奶系列 - 風味鮮奶茶 Ice/Hot", price: 150 },
            { name: "飲料 - 鮮奶系列 - 草莓歐蕾 Ice/Hot", price: 180 }
        ]
    },
    {
        category: "飲料 - 咖啡系列", items: [
            { name: "飲料 - 咖啡系列 - 手沖精品咖啡（黑靈魂，另有單品豆單可供選擇）Ice/Hot", price: 150 },
            { name: "飲料 - 咖啡系列 - 拿鐵咖啡 Ice/Hot", price: 150 },
            { name: "飲料 - 咖啡系列 - 摩卡咖啡 Ice/Hot", price: 170 },
            { name: "飲料 - 咖啡系列 - 焦糖瑪奇朵 Ice/Hot", price: 170 }
        ]
    },
    {
        category: "飲料 - 可爾必思系列", items: [
            { name: "飲料 - 可爾必思系列 - 可爾必思 Ice", price: 100 },
            { name: "飲料 - 可爾必思系列 - 隱藏風味可爾必思 Ice", price: 150 }
        ]
    },
    {
        category: "週邊", items: [
            { name: "週邊 - 正式女僕拍立得：單色簡易拍", price: 200 },
            { name: "週邊 - 多色豪華拍（追加一位女僕 +$150）", price: 250 },
            { name: "週邊 - 契約女僕拍立得（不限單色、多色）", price: 250 },
            { name: "週邊 - 手機拍", price: 150 },
            { name: "週邊 - 女僕表演演出", price: 250 },
            { name: "週邊 - 簽繪", price: 100 }
        ]
    }
];

// 檢查是否為不供應主餐的時間段（UTC+8 星期一到星期五的 12:00-17:00）
function isLunchRestrictionTime() {
    const now = new Date();
    const day = now.getDay(); // 0 是星期日，1 是星期一，..., 5 是星期五
    const hour = now.getHours(); // 當前小時（0-23）
    return day >= 1 && day <= 5 && hour >= 12 && hour < 17;
}

// 檢查是否超過廚房最終出餐時間（每天 20:30 - 23:59）
function isAfterServiceTime() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    return (hour === 20 && minute >= 30) && hour < 24;
}

// 檢查是否超過吧台最終出餐時間（每天 21:00 - 24:00）
function isAfterBarServiceTime() {
    const now = new Date();
    const hour = now.getHours();
    return hour >= 21 && hour < 24;
}

// 檢查是否超過週邊最後登記時間（每天 20:50 - 24:00）
function isAfterPeripheralServiceTime() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    return (hour > 20 || (hour === 20 && minute >= 50)) && hour < 24;
}

// 點選菜單項目後自動加入訂單
async function addOrder(item) {
    let note = "";

    // 檢查是否在不供應主餐的時間
    const restrictedCategories = ["主餐 - 蛋包飯（有桌邊畫盤）", "主餐 - 燴烤飯", "主餐 - 義大利麵", "主餐 - 其他"];
    if (restrictedCategories.includes(item.category) && isLunchRestrictionTime()) {
        alert("目前為不供應主餐的時間，請與廚房確認，確認後按確定");

        // 顯示確認視窗，詢問是否仍然要繼續點餐
        const proceed = confirm("是否仍然要繼續點餐？");
        if (!proceed) return; // 停止操作
    }

    // 檢查是否為 "主餐 - 燴烤飯" 類別，並提示等待時間
    if (item.category === "主餐 - 燴烤飯") {
        alert("該品項需要等待15-20分鐘，請先與主人/大小姐確認，確認後按確定");

        const proceed = confirm("是否仍然要繼續點餐？");
        if (!proceed) return; // 停止操作
    }

    // 檢查是否在廚房最終出餐時間後
    const afterServiceCategories = ["主餐 - 蛋包飯（有桌邊畫盤）", "主餐 - 燴烤飯", "主餐 - 義大利麵", "主餐 - 其他", "輕食 - 炸物", "輕食 - 熱壓", "輕食 - 帕尼尼", "輕食 - 點心", "輕食 - 沙拉"];
    if (afterServiceCategories.includes(item.category) && isAfterServiceTime()) {
        alert("超過廚房最終出餐時間，請與廚房確認，確認後按確定");

        const proceed = confirm("是否仍然要繼續點餐？");
        if (!proceed) return; // 停止操作
    }

    // 檢查是否在吧台最終出餐時間後
    const barServiceCategories = ["特調", "飲料 - 茶", "飲料 - 風味茶系列", "飲料 - 鮮奶系列", "飲料 - 咖啡系列", "飲料 - 可爾必思系列"];
    if (barServiceCategories.includes(item.category) && isAfterBarServiceTime()) {
        alert("超過吧台最終出餐時間，請與吧台確認，確認後按確定");

        const proceed = confirm("是否仍然要繼續點飲料？");
        if (!proceed) return; // 停止操作
    }

    // 檢查是否在週邊最後登記時間後
    if (item.category.includes("週邊") && isAfterPeripheralServiceTime()) {
        alert("超過周邊最後登記時間，請與管拍的女僕確認，確認後按確定");

        const proceed = confirm("是否仍然要繼續點周邊？");
        if (!proceed) return; // 停止操作
    }

    // 如果通過以上檢查，繼續顯示冰量選項和備註
    if (item.name.includes("伯爵紅茶")) {
        note = await getIceLevelOptionhotonly();
    } else if (item.name.includes("冰淇淋紅茶")) {
        note = await getIceLevelOptioniceonly();
    } else if (item.category.includes("飲料") && !item.category.includes("可爾必思")) {
        note = await getIceLevelOptiongeneral();
    } else if (item.category.includes("特調") || item.category.includes("可爾必思")) {
        note = await getIceLevelOptioniceonly();
    }

    const additionalNote = await getOrderNote();
    note += additionalNote ? `，${additionalNote}` : "";

    // 將訂單加入或更新現有訂單
    let orders = getOrders();
    const existingOrder = orders.find(order => order.name === item.name && order.note === note);
    if (existingOrder) {
        existingOrder.quantity += 1;
    } else {
        orders.push({ ...item, quantity: 1, note: note || "" });
    }
    saveOrders(orders);
    displayOrders();
}

// 顯示冰量/溫度選擇模態對話框（冰熱通用）
function getIceLevelOptiongeneral() {
    return new Promise((resolve) => {
        const overlay = document.createElement('div');
        overlay.classList.add('modal-overlay');
        document.body.appendChild(overlay);

        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <label for="iceLevel">請選擇冰量/溫度：</label>
                <select id="iceLevel">
                    <option value="冰正常">冰正常</option>
                    <option value="少冰">少冰</option>
                    <option value="去冰">去冰</option>
                    <option value="熱">熱</option>
                </select>
                <button id="confirmIceLevel">確定</button>
            </div>
        `;
        document.body.appendChild(modal);
        document.getElementById("confirmIceLevel").addEventListener("click", () => {
            const iceLevel = document.getElementById("iceLevel").value;
            document.body.removeChild(modal);
            document.body.removeChild(overlay);
            resolve(iceLevel);
        });
    });
}

// 顯示冰量選擇模態對話框（只限冰）
function getIceLevelOptioniceonly() {
    return new Promise((resolve) => {
        const overlay = document.createElement('div');
        overlay.classList.add('modal-overlay');
        document.body.appendChild(overlay);

        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <label for="iceLevel">請選擇冰量 (這個只能做冰的)：</label>
                <select id="iceLevel">
                    <option value="冰正常">冰正常</option>
                    <option value="少冰">少冰</option>
                    <option value="去冰">去冰</option>
                </select>
                <button id="confirmIceLevel">確定</button>
            </div>
        `;
        document.body.appendChild(modal);
        document.getElementById("confirmIceLevel").addEventListener("click", () => {
            const iceLevel = document.getElementById("iceLevel").value;
            document.body.removeChild(modal);
            document.body.removeChild(overlay);
            resolve(iceLevel);
        });
    });
}

// 顯示熱選項模態對話框
function getIceLevelOptionhotonly() {
    return new Promise((resolve) => {
        const overlay = document.createElement('div');
        overlay.classList.add('modal-overlay');
        document.body.appendChild(overlay);

        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <label for="iceLevel">這個只能做熱的：</label>
                <select id="iceLevel">
                    <option value="熱">熱</option>
                </select>
                <button id="confirmIceLevel">確定</button>
            </div>
        `;
        document.body.appendChild(modal);
        document.getElementById("confirmIceLevel").addEventListener("click", () => {
            const iceLevel = document.getElementById("iceLevel").value;
            document.body.removeChild(modal);
            document.body.removeChild(overlay);
            resolve(iceLevel);
        });
    });
}

// 顯示備註輸入模態對話框
function getOrderNote() {
    return new Promise((resolve) => {
        const overlay = document.createElement('div');
        overlay.classList.add('modal-overlay');
        document.body.appendChild(overlay);

        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <label for="orderNote">請輸入備註，如飲料糖量、周邊的女僕名等，沒有需要備註請直接按確定繼續：</label>
                <input type="text" id="orderNote" placeholder="備註">
                <button id="confirmNote">確定</button>
            </div>
        `;
        document.body.appendChild(modal);
        document.getElementById("confirmNote").addEventListener("click", () => {
            const note = document.getElementById("orderNote").value;
            document.body.removeChild(modal);
            document.body.removeChild(overlay);
            resolve(note);
        });
    });
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
            li.addEventListener('click', () => addOrder({ ...item, category: category.category }));
            menuList.appendChild(li);
        });
    });
}


// 新增的單個刪除功能：根據索引從訂單紀錄中刪除
function removeOrder(index) {
    let orders = getOrders();
    orders.splice(index, 1);  // 刪除指定索引的項目
    saveOrders(orders);
    displayOrders();  // 更新訂單顯示
}

function displayOrders() {
    const orders = getOrders();
    const orderList = document.getElementById('orderList');
    orderList.innerHTML = '';
    
    let hasUpgradeSet = false;
    let hasDrinkOrSpecial = false;
    let subtotal = 0;
    let serviceCharge = 0;

    // 設定飲料和特調的類別，以便於檢查
    const drinkCategories = ["飲料 - 茶", "飲料 - 風味茶系列", "飲料 - 鮮奶系列", "飲料 - 咖啡系列", "飲料 - 可爾必思系列", "特調"];

    orders.forEach((order, index) => {
        const li = document.createElement('li');
        li.textContent = `${order.name} x ${order.quantity} - $${order.quantity * order.price}`;

        // 檢查是否有備註
        if (order.note) {
            const noteSpan = document.createElement('span');
            noteSpan.textContent = `（備註：${order.note}）`;
            li.appendChild(noteSpan);
        }

        // 檢查是否包含升級套餐和飲料/特調
        if (order.name.includes("升級成套餐")) {
            hasUpgradeSet = true;
        } else if (drinkCategories.includes(order.category)) {
            hasDrinkOrSpecial = true;
        }

        // 計算餐點金額
        subtotal += order.quantity * order.price;

        // 增加刪除按鈕
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "刪除";
        deleteButton.style.marginLeft = "10px";
        deleteButton.onclick = () => removeOrder(index);
        li.appendChild(deleteButton);

        orderList.appendChild(li);
    });

    // 計算服務費（排除周邊商品）
    orders.forEach(order => {
        const category = menuItems.find(cat => cat.items.some(i => i.name === order.name)).category;
        const orderTotal = order.quantity * order.price;
        if (category !== "週邊") {
            serviceCharge += Math.round(orderTotal * 0.1);
        }
    });

    // 檢查是否符合折扣條件並應用折扣
    if (hasUpgradeSet && hasDrinkOrSpecial) {
        subtotal -= 80;  // 扣除 80 元
    }

    // 分開顯示餐點金額、服務費和總金額
    document.getElementById("subtotalDisplay").textContent = `餐點金額：$${subtotal}`;
    document.getElementById("serviceChargeDisplay").textContent = `服務費：$${serviceCharge}`;
    document.getElementById("totalAmountDisplay").textContent = `總金額：$${subtotal + serviceCharge}`;
}

// 清除點餐紀錄
document.getElementById('clearOrders').addEventListener('click', function () {
    document.cookie = 'orders=; path=/; max-age=0';
    displayOrders();

    // 清空訂單紀錄表格
    const orderHistoryTable = document.getElementById("orderHistoryTable").getElementsByTagName("tbody")[0];
    orderHistoryTable.innerHTML = '';
});

// 提交訂單後將紀錄保存到表格中
document.getElementById("submitOrder").addEventListener("click", function () {
    const orders = getOrders();
    if (orders.length === 0) {
        alert("您尚未添加任何訂單！");
        return;
    }

    const tableNumber = document.getElementById("tableNumber").value;
    const tablePosition = document.getElementById("tablePosition").value;

    // 獲取當前時間並格式化為時間戳
    const now = new Date();
    const timestamp = now.toLocaleString("zh-TW", { timeZone: "Asia/Taipei" }); // 設定為台灣時區 (UTC+8)

    // 將每個訂單項目獨立分行顯示
    let orderDetails = orders.map((order, index) =>
        `<div>${index + 1}. ${order.name} x ${order.quantity} - $${order.quantity * order.price}${order.note ? '（備註：' + order.note + '）' : ''}</div>`
    ).join('');

    const serviceCharge = parseFloat(document.getElementById("serviceChargeDisplay").textContent.replace("服務費：$", ""));
    const totalAmount = parseFloat(document.getElementById("totalAmountDisplay").textContent.replace("總金額：$", ""));

    // 將訂單紀錄加入表格，包含時間戳
    const orderHistoryTable = document.getElementById("orderHistoryTable").getElementsByTagName("tbody")[0];
    const newRow = orderHistoryTable.insertRow();
    newRow.innerHTML = `
        <td>${tableNumber}</td>
        <td>${tablePosition}</td>
        <td>${orderDetails}</td>
        <td>$${serviceCharge}</td>
        <td>$${totalAmount}</td>
        <td>${timestamp}</td> <!-- 加入時間戳 -->
    `;

    // 清除訂單紀錄
    document.cookie = 'orders=; path=/; max-age=0';
    displayOrders();
});

// 頁面加載時顯示菜單與點餐紀錄
document.addEventListener('DOMContentLoaded', () => {
    displayMenu();
    displayOrders();
});