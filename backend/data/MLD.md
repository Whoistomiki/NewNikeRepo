USERS:
user_id (PK)
firstname
lastname
email (unique, not null)
user_password

ORDERS :
order_id (PK)
order_date
order_status
total_amount
user_id (FK vers USERS)

ORDER_ITEMS :
order_item_id (PK)
quantity
unit_price
order_id (FK vers ORDERS)
product_id (FK vers PRODUCTS)

PRODUCTS :
product_id (PK)
product_name
product_description
product_price
product_size
stock_quantity