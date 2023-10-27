import BookCard from "./BookCard";
import Layout from "./Layout";
const BookList = ({ books }) => {
  return (
    <Layout>
      <div className={`flex flex-wrap gap-4`}>
        {books.map((item) => (
          <BookCard key={item._id} book={item} />
        ))}
      </div>
    </Layout>
  );
};

export default BookList;
