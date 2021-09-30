export const DBConfig = {
    name: "ToDoListDB",
    version: 1,
    objectStoresMeta: [
        {
            store: "Categories",
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: 'name', keypath: 'name', options: { unique: true } },
                { name: 'description', keypath: 'description', options: { unique: false } }
            ]
        },
        {
            store: "Items",
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: 'name', keypath: 'name', options: { unique: true } },
                { name: 'description', keypath: 'description', options: { unique: false } },
                { name: 'categoryId', keypath: 'categoryId', options: { unique: false } }
            ]
        }
    ]
};