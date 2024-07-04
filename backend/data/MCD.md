USERS: id, firstname, lastname, email, password
BELONG, 0N ORDERS, 1N USERS
ORDERS: id, order_date, order_status, total_amount, user_id
COMPOSE, 1N ORDERS, 0N ORDER_ITEMS
ORDER_ITEMS: id, order_items_quantity, unit_price, order_id, product_id
INCLUDE, 0N ORDER_ITEMS, 1N PRODUCTS
PRODUCTS: id, product_name, product_description, product_price, product_size, stock_quantity

#Relations : 

-Un utilisateur peut passer plusieurs commandes.
-Une commande est passée par un seul utilisateur.

-Une commande peut contenir plusieurs articles.
Chaque article de commande est lié à une seule commande.

-Plusieurs articles de commande peuvent correspondre à un même produit.
-Chaque article de commande concerne un seul produit.