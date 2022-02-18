
# JavaScript & TypeScript API Development Practice

node, express, mongodb, typescript rest api with C.R.U.D, Filter, Pagination, Sort, Search


## API Reference

#### Get All Products

```http
  GET /api/products
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `N/A` | `N/A` | N/A |

#### Get Single Product

```http
  GET /api/product/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item |

#### Create A Product

```http
  POST /api/products
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `N/A` | `N/A` | N/A |

#### Update A Product

```http
  PUT /api/products/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. id of item |

#### Delete A Product

```http
  DELETE /api/products/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. id of item |

## Deployment

To Run TypeScript

```bash
  npm run dev
```

To Run JavaScript

```bash
  npm run build
```
```bash
  npm start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URL`


## Authors

- [@sumantaGhosh24](https://www.github.com/sumantaGhosh24)


## Tech Stack

**Technology & NPM Package:** Node, Express, TypeScript, ts-node-dev, Cors, Dotenv, Mongoose, Morgan

**Database:** Mongodb Atlas