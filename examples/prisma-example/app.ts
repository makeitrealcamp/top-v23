import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.get("/ping", (req: Request, res: Response) => {
  res.json({ message: "pong" });
});

// app.get("/products", async (req: Request, res: Response) => {
//   const products = await prisma.product.findMany({
//     where: {
//       price: {
//         gt: 2000,
//         lt: 5000,
//       },
//     },
//   });
//   res.json(products);
// });

app.get("/products", async (req: Request, res: Response) => {
  const products = await prisma.product.findMany({
    select: {
      name: true,
      reviews: {
        select: {
          text: true,
          rating: true,
        },
        where: {
          rating: {
            gt: 3,
          },
        },
      },
    },
  });
  res.json(products);
});

app.post("/products", async (req: Request, res: Response) => {
  const data = req.body;
  console.log("🚀 ~ file: app.ts ~ line 26 ~ app.post ~ data", data);

  const product = await prisma.product.create({
    data: {
      name: data.name,
      price: data.price,
      description: data.description,
    },
  });

  res.json(product);
});

app.post("/reviews", async (req: Request, res: Response) => {
  const data = req.body;

  const review = await prisma.review.create({
    data: {
      text: data.text,
      rating: data.rating,
      Product: {
        connect: {
          id: data.productId,
        },
      },
    },
  });

  res.json(review);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
