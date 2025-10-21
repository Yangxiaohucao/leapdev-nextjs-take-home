import Image from "next/image";
import { Book } from "@/types/book";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BookCardProps {
  book: Book;
  onEdit: (book: Book) => void;
  onDelete: (id: number) => void;
}

export default function BookCard({ book, onEdit, onDelete }: BookCardProps) {
  return (
    <Card className="overflow-hidden pt-0">
      <div className="relative h-[300px] w-full">
        <Image
          src={book.coverImage}
          alt={`Cover of ${book.title}`}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{book.title}</h3>
        <p className="text-gray-600">{book.author}</p>
        <p className="text-green-600 font-semibold mb-2">
          {book.currency} {book.price.toFixed(2)}
        </p>
        <p className="text-gray-700 text-sm line-clamp-3 mb-4">
          {book.description}
        </p>
         <CardFooter className="flex gap-2 p-0 pt-0">
          <Button
            onClick={() => onEdit(book)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Edit
          </Button>
          <Button
            onClick={() => onDelete(book.id)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
