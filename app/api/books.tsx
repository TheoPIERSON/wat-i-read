// pages/api/books.ts
import type { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../lib/mongodb";
import Book from "@/models/books";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case "POST":
      try {
        const book = await Book.create(req.body);
        res.status(201).json({ success: true, data: book });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
