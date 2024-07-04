-- Création de la table USERS
CREATE TABLE "USERS" (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

-- Création de la table PRODUCTS
CREATE TABLE "PRODUCTS" (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    product_name TEXT NOT NULL,
    product_description TEXT,
    product_price NUMERIC(10, 2) NOT NULL,
    product_size VARCHAR(10),
    stock_quantity INT NOT NULL
);

-- Création de la table ORDERS
CREATE TABLE "ORDERS" (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    order_date DATE NOT NULL,
    order_status VARCHAR(50) NOT NULL,
    total_amount NUMERIC(10, 2) NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES "USERS"(id)
);

-- Création de la table ORDER_ITEMS
CREATE TABLE "ORDER_ITEMS" (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    order_items_quantity INT NOT NULL,
    unit_price NUMERIC(10, 2) NOT NULL,
    order_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    FOREIGN KEY (order_id) REFERENCES "ORDERS"(id),
    FOREIGN KEY (product_id) REFERENCES "PRODUCTS"(id)
);
