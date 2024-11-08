// 整合的菜單項目
const menuItems = [
    { category: "主餐 - 蛋包飯（有桌邊畫盤）", items: [
        { name: "主餐-蛋包飯-紅酒燉牛肉", price: 280 },
        { name: "主餐-蛋包飯-咖哩燴雞肉", price: 280 },
        { name: "主餐-蛋包飯-法式海鮮", price: 280 }
    ]},
    { category: "主餐 - 燴烤飯", items: [
        { name: "主餐-燴烤飯-蘑菇里肌", price: 280 },
        { name: "主餐-燴烤飯-奶油菠菜鮭魚", price: 280 }
    ]},
    { category: "主餐 - 義大利麵", items: [
        { name: "主餐-義大利麵-火腿奶油燴雞", price: 280 },
        { name: "主餐-義大利麵-義式茄汁海鮮", price: 280 }
    ]},
    { category: "主餐 - 其他", items: [
        { name: "主餐-其他-義式無骨雞腿排餐", price: 300 },
        { name: "主餐-其他-夢見員工特餐（咔拉雞)", price: 200 },
        { name: "主餐-其他-夢見員工特餐（青花椒雞)", price: 200 }
    ]},
    { category: "輕食 - 炸物", items: [
        { name: "輕食-炸物-薯條", price: 150 },
        { name: "輕食-炸物-起司條", price: 150 },
        { name: "輕食-炸物-雞塊", price: 150 },
        { name: "輕食-炸物-雞柳條", price: 150 },
        { name: "輕食-炸物-炸物拼盤(含薯條，起司條，雞塊，雞柳條)", price: 300 }
    ]},
    { category: "輕食 - 熱壓", items: [
        { name: "輕食-熱壓-培根花生醬三明治", price: 200 },
        { name: "輕食-熱壓-肉鬆芋泥三明治", price: 200 }
    ]},
    { category: "輕食 - 帕尼尼", items: [
        { name: "輕食-帕尼尼-辣菜脯里肌", price: 220 },
        { name: "輕食-帕尼尼-卡拉雞", price: 220 },
        { name: "輕食-帕尼尼-鯖魚", price: 220 },
        { name: "輕食-帕尼尼-奶酥棉花糖", price: 180 }
    ]},
    { category: "輕食 - 點心", items: [
        { name: "輕食-點心-女僕繪盤蛋糕（有桌邊畫盤）", price: 80 },
        { name: "輕食-點心-女僕手作聖代（有魔法）", price: 150 },
        { name: "輕食-點心-女僕現烤鬆餅（有桌邊畫盤）", price: 200 }
    ]},
    { category: "輕食 - 沙拉", items: [
        { name: "輕食-沙拉-舒肥雞胸肉", price: 230 },
        { name: "輕食-沙拉-烤雞腿肉", price: 230 },
        { name: "輕食-沙拉-煙燻鮭魚", price: 230 }
    ]},
    { category: "特調", items: [
        { name: "特調-我們的奇蹟（女僕特調，吧台隨機調製，有魔法）", price: 150 },
        { name: "特調-地獄特調（慎點！）", price: 150 },
        { name: "特調-魔界調色盤（葡萄）", price: 150 },
        { name: "特調-締結奇蹟（櫻花）", price: 150 },
        { name: "特調-傳說之龍o7（水蜜桃）", price: 150 },
        { name: "特調-存錢買船中（草莓）", price: 150 },
        { name: "特調-法師的青蝶（白桃）", price: 150 },
        { name: "特調-從天而降的天使（荔枝）", price: 150 },
        { name: "特調-神聖彼岸（白葡萄）", price: 150 },
        { name: "特調-冥界夜想曲（薰衣草）", price: 150 }
    ]},
    { category: "飲料 - 茶", items: [
        { name: "飲料-茶-紅茶 Ice/Hot", price: 80 },
        { name: "飲料-茶-綠茶 Ice/Hot", price: 80 },
        { name: "飲料-茶-伯爵紅茶 Hot", price: 120 },
        { name: "飲料-茶-冰淇淋紅茶 Ice", price: 120 }
    ]},
    { category: "飲料 - 風味茶系列", items: [
        { name: "飲料-風味茶-檸檬紅/綠茶 Ice/Hot", price: 110 },
        { name: "飲料-風味茶-百香紅/綠茶 Ice/Hot", price: 110 },
        { name: "飲料-風味茶-蜂蜜紅/綠茶 Ice/Hot", price: 110 },
        { name: "飲料-風味茶-荔枝紅/綠茶 Ice/Hot", price: 110 }
    ]},
    { category: "飲料 - 鮮奶系列", items: [
        { name: "飲料-鮮奶系列-鮮奶茶 Ice/Hot", price: 120 },
        { name: "飲料-鮮奶系列-風味鮮奶茶 Ice/Hot", price: 150 },
        { name: "飲料-鮮奶系列-草莓歐蕾 Ice/Hot", price: 180 }
    ]},
    { category: "飲料 - 咖啡系列", items: [
        { name: "飲料-咖啡系列-手沖精品咖啡（黑靈魂，另有單品豆單可供選擇）Ice/Hot", price: 150 },
        { name: "飲料-咖啡系列-拿鐵咖啡 Ice/Hot", price: 150 },
        { name: "飲料-咖啡系列-摩卡咖啡 Ice/Hot", price: 170 },
        { name: "飲料-咖啡系列-焦糖瑪奇朵 Ice/Hot", price: 170 }
    ]},
    { category: "飲料 - 可爾必思系列", items: [
        { name: "飲料-可爾必思系列-可爾必思 Ice", price: 100 },
        { name: "飲料-可爾必思系列-隱藏風味可爾必思 Ice", price: 150 }
    ]},
    { category: "週邊", items: [
        { name: "週邊-正式女僕拍立得：單色簡易拍", price: 200 },
        { name: "週邊-多色豪華拍（追加一位女僕 +$150）", price: 250 },
        { name: "週邊-契約女僕拍立得（不限單色、多色）", price: 250 },
        { name: "週邊-手機拍", price: 150 },
        { name: "週邊-女僕表演演出", price: 250 },
        { name: "週邊-簽繪", price: 100 }
    ]}
];
  
  // 顯示冰量/溫度選擇模態對話框
  function getIceLevelOption(options, message) {
    return new Promise((resolve) => {
      // 創建遮罩背景
      const overlay = document.createElement('div');
      overlay.classList.add('modal-overlay');
      document.body.appendChild(overlay);
  
      // 創建模態視窗
      const modal = document.createElement('div');
      modal.classList.add('modal');
  
      modal.innerHTML = `
        <div class="modal-content">
          <label for="iceLevel">${message}</label>
          <select id="iceLevel">
            ${options.map(option => `<option value="${option}">${option}</option>`).join('')}
          </select>
          <button id="confirmIceLevel">確定</button>
        </div>
      `;
  
      document.body.appendChild(modal);
  
      document.getElementById("confirmIceLevel").addEventListener("click", () => {
        const iceLevel = document.getElementById("iceLevel").value;
        removeModalAndOverlay(modal, overlay);
        resolve(iceLevel);
      });
    });
  }
  
  // 移除模態視窗和遮罩背景
  function removeModalAndOverlay(modal, overlay) {
    document.body.removeChild(modal);
    document.body.removeChild(overlay);
  }
  
  // 點選菜單項目後自動加入訂單
  async function addOrder(item) {
    let note = "";
  
    if (process.env.NODE_ENV !== 'production') {
      console.log("選擇的品項:", item.name, "類別:", item.category); // 調試信息
    }
  
    // 檢查是否為不供應主餐的時間段（UTC+8 星期一到星期五的 12:00-17:00）
    if (isLunchRestrictionTime() && isCategoryRestricted(item.category, ["主餐 - 蛋包飯（有桌邊畫盤）", "主餐 - 燴烤飯", "主餐 - 義大利麵", "主餐 - 其他"])) {
      alertWithTime(`目前時間不供應主餐，請與廚房確認`);
      return;
    }
  
    // 檢查是否超過服務時間
    if ((isAfterServiceTime() && isCategoryRestricted(item.category, ["主餐", "輕食"])) ||
        (isAfterBarServiceTime() && isCategoryRestricted(item.category, ["特調", "飲料"])) ||
        (isAfterPeripheralServiceTime() && item.category.includes("週邊"))) {
      alertWithTime(`目前時間已超過服務時間，請與相關部門確認`);
      return;
    }
  
    // 獲取冰量/溫度選擇
    note = await getIceLevelForItem(item);
  
    // 顯示備註輸入模態視窗
    const additionalNote = await getOrderNote();
    note += additionalNote ? `，${additionalNote}` : "";
  
    let orders = getOrders();
    const existingOrder = orders.find(order => order.name === item.name && order.category === item.category);
    if (existingOrder) {
      existingOrder.quantity += 1;
      if (note) existingOrder.note = note; // 更新備註
    } else {
      orders.push({ ...item, quantity: 1, note: note || "" });
    }
    saveOrders(orders);
    displayOrders(); // 即時更新顯示
  }
  
  // 判斷是否為限制時間段的類別
  function isCategoryRestricted(category, restrictedCategories) {
    return restrictedCategories.some(restrictedCategory => category.includes(restrictedCategory));
  }
  
  // 提醒用戶目前時間
  function alertWithTime(message) {
    const now = new Date();
    const formattedTime = now.toLocaleString("zh-TW", {
      timeZone: "Asia/Taipei",
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    });
    alert(`${message}，目前時間為${formattedTime}`);
  }
  
  // 獲取冰量/溫度選擇邏輯
  async function getIceLevelForItem(item) {
    if (item.name.includes("伯爵紅茶")) {
      return await getIceLevelOption(["熱"], "這個只能做熱的");
    } else if (item.name.includes("冰淇淋紅茶")) {
      return await getIceLevelOption(["冰正常", "少冰", "去冰"], "請選擇冰量，這個只能做冰的");
    } else if (item.category.includes("飲料") && !item.category.includes("可爾必思")) {
      return await getIceLevelOption(["冰正常", "少冰", "去冰", "熱"], "請選擇冰量/溫度");
    } else if (item.category.includes("特調") || item.category.includes("可爾必思")) {
      return await getIceLevelOption(["冰正常", "少冰", "去冰"], "請選擇冰量，這個只能做冰的");
    }
    return "";
  }
  
  // 動態生成菜單
  function displayMenu() {
    const menuList = document.getElementById('menuList');
    menuList.innerHTML = '';
    const fragment = document.createDocumentFragment();
    menuItems.forEach(category => {
      const categoryTitle = document.createElement('h3');
      categoryTitle.textContent = category.category;
      fragment.appendChild(categoryTitle);
  
      category.items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        li.addEventListener('click', () => addOrder({ ...item, category: category.category }));
        fragment.appendChild(li);
      });
    });
    menuList.appendChild(fragment);
  }
  