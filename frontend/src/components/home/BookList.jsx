import BookSingleCard from "./BookCard";

const BookList = ({ books }) => {
  return (
    <div className={`flex flex-wrap gap-4 mx-32`}>
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};

export default BookList;
