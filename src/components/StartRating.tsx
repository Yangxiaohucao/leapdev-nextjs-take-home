import { Star } from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Book } from "@/types/book";


export function StarRating({
  book,
  handleUpdateRating
}: {
  book: Book;
  handleUpdateRating: (bookId: number, newRating: number) => void;
}) {
  return (
     <div className="flex items-center ">
          {[1, 2, 3, 4, 5].map((star) => (
            <Button key={star} size="icon" variant="ghost" className="h-8 w-8" onClick={() => handleUpdateRating(book.id, star)}>
              <Star className={`h-4 w-4 ${star <= book.rating ?"fill-current text-yellow-500":"fill-none"}`}/>
            </Button>
          ))}
           <Label
            className="block text-sm font-medium text-gray-700 pl-2"
          >
            {book.rating} / 5
          </Label>
        </div>
  );
}
