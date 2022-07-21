export function createCartStorage({ key, dataStore }) {
    let loaded = false;
    return {
        async saveCart(catalog) {
            if (!loaded)
                return;
            const store = {};
            for (const { product, quantity } of catalog) {
                store[product.id] = { quantity };
            }
            await dataStore.setItem(key, JSON.stringify(store));
        },
        async loadCart(catalog) {
            const raw = await dataStore.getItem(key);
            loaded = true;
            if (!raw)
                return;
            const store = JSON.parse(raw);
            for (const [uid, data] of Object.entries(store)) {
                const { quantity } = data;
                const item = catalog.find(item => item.product.id === uid);
                if (item)
                    item.quantity = quantity;
            }
        },
    };
}
//# sourceMappingURL=create-cart-storage.js.map