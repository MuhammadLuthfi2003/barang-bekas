# Barang Bekas Restful API docs 

## GET all Product
```
/api/products.php
```
## GET specific Product
```
/api/products.php?id={id}
```
## GET Products with same category
```
/api/products?category_id={category_id}
```
## GET Product and Paging the Response
```
/api/products?limit=20
```
```
/api/products?category_id={category_id}&limit=20
```
## GET Product and sort
mode = date, name, price
```
/api/products?sort={mode}
```
## Search Product name
```
/api/product?search={query}
```