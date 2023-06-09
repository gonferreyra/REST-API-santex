import { where } from 'sequelize';
import Book from '../models/Book.js';
import Libraries from '../models/Library.js';

export const getAll = async () => {
  const bookList = await Book.findAll();

  if (!bookList) {
    throw new Error('There are no books on the Database.');
  }

  return bookList;
};

export const bookById = async (id) => {
  const book = await Book.findByPk(id);

  if (!book) {
    throw new Error(`There is no book with the id: ${id} on the Database`);
  }

  return book;
};

export const newBook = async (isbn, title, author, year, libraryId) => {
  // Validate if the library exists
  const checkLibrary = await Libraries.findByPk(libraryId);
  if (!checkLibrary) {
    throw new Error(`There is no Library with the id ${libraryId}.`);
  }

  const book = await Book.create({ isbn, title, author, year, libraryId });

  return book;
};

export const newBookWithoutLibrary = async (isbn, title, author, year) => {
  const book = await Book.create({ isbn, title, author, year });

  return book;
};

export const updateBookService = async (id, body) => {
  const { isbn, title, author, year, libraryId } = body;

  // Check is Library exist
  const checkLibrary = await Libraries.findOne({
    where: {
      id: libraryId,
      isActive: true,
    },
  });

  if (libraryId !== null) {
    if (!checkLibrary) {
      throw new Error(`There's no active Library with the libraryId provided.`);
    }
  }

  // Check if Book exist
  const bookToUpdate = await Book.findByPk(id);

  if (!bookToUpdate) {
    throw new Error(`There is no book on the Database with the id ${id}`);
  }

  // Update Fields
  if (bookToUpdate) {
    if (isbn) {
      bookToUpdate.isbn = isbn;
    } else if (title) {
      bookToUpdate.title = title;
    } else if (author) {
      bookToUpdate.author = author;
    } else if (year) {
      bookToUpdate.year = year;
    }

    await bookToUpdate.save();
  }

  // Set libraryId to null to remove book from a library
  if (libraryId === null) {
    await bookToUpdate.update({
      libraryId: null,
    });
  }
  if (libraryId !== null) {
    await bookToUpdate.update({
      libraryId: libraryId,
    });
  }

  return bookToUpdate;
};

export const deactivateBook = async (id) => {
  const deleteBook = await Book.update(
    {
      isActive: false,
    },
    {
      where: {
        idLibraries: id,
      },
    }
  );

  if (!deleteBook) {
    throw new Error(
      `Error. The book with the id ${id} wasn't found on the Database.`
    );
  }

  return deleteBook;
};
