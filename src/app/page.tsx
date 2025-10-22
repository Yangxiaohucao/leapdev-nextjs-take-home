"use client";

import { useState } from "react";
import data from "../../public/data.json";
import BookCard from "@/components/BookCard";
import Modal from "@/components/Modal";
import BookForm from "@/components/BookForm";
import { Book } from "@/types/book";
import { Button } from "@/components/ui/button"
import DeleteConfirmDialog from "@/components/DeleteConfirmDialog";
import { ThemeSwitch } from "@/components/ThemeSwitch";

export default function Page() {
  const [books, setBooks] = useState<Book[]>(data as Book[]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | undefined>(undefined);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const handleAddBook = (newBook: Partial<Book>) => {
    const book: Book = {
      ...(newBook as Book),
      id: Math.max(...books.map((b) => b.id)) + 1,
    };
    setBooks([...books, book]);
    setIsModalOpen(false);
  };

  const handleUpdateBook = (updatedBook: Partial<Book>) => {
    setBooks(
      books.map((book) =>
        book.id === selectedBook?.id ? { ...book, ...updatedBook } : book
      )
    );
    setIsModalOpen(false);
    setSelectedBook(undefined);
  };

    const handleDeleteBook = (id: number) => {
       setDeleteId(id);
  };

    const confirmDelete = () => {
    if (deleteId !== null) {
      setBooks(books.filter((book) => book.id !== deleteId));
      setDeleteId(null);
    }
  };

    const handleEdit = (book: Book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

   const handleUpdateRating = (bookId: number, newRating: number) => {
    setBooks(
      books.map((book) =>
        book.id === bookId ? { ...book, rating: newRating } : book
      )
    );
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Book Gallery</h1>
        <div className="flex items-center gap-4">
        <ThemeSwitch />
        <Button
          onClick={() => {
            setSelectedBook(undefined);
            setIsModalOpen(true);
          }}
        >
          Add New Book
        </Button>
        </div>
   
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onEdit={handleEdit}
            onDelete={handleDeleteBook}
            handleUpdateRating={handleUpdateRating}
          />
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedBook(undefined);
        }}
        title={selectedBook ? "Edit Book" : "Add New Book"}
      >
        <BookForm
          book={selectedBook}
          onSubmit={selectedBook ? handleUpdateBook : handleAddBook}
          onCancel={() => {
            setIsModalOpen(false);
            setSelectedBook(undefined);
          }}
        />
      </Modal>
      <DeleteConfirmDialog
        isOpen={deleteId !== null}
        onClose={() => setDeleteId(null)}
        onConfirm={confirmDelete}
      />
    </main>
  );
}
