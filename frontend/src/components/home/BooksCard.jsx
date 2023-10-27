// import { Link } from 'react-router-dom';
// import { PiBookOpenTextLight } from 'react-icons/pi';
// import { BiUserCircle } from 'react-icons/bi';
// import { AiOutlineEdit } from 'react-icons/ai';
// import { BsInfoCircle } from 'react-icons/bs';
// import { MdOutlineDelete } from 'react-icons/md';
import BookSingleCard from "./BookSingleCard";

const BooksCard = ({ books }) => {
  return (
<<<<<<< HEAD
    <div className={`flex flex-wrap gap-6`}>
=======
    <div className={`flex flex-wrap gap-4 mx-32`}>
>>>>>>> upstream/master
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};

export default BooksCard;
