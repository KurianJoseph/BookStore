const BookCard = ({ book }) => {
  return (
    <div className=" rounded-3xl overflow-hidden w-80 h-auto bg-[#2B2B2B] text-white hover:shadow hover:shadow-white/10 font-mono hover:-translate-y-2 transition ease-in">
      <div className="w-full h-72">
        <img className="w-full h-full object-cover" src={book.imgurl} />
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-bold">{book.title}</h3>
        <div className="flex items-center gap-2 pt-2">
          <div className="w-6 h-6 flex justify-center items-center rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://via.placeholder.com/24x24"
            />
          </div>
          <h4>{book.author}</h4>
        </div>
        <div className="flex justify-between pt-4">
          <div>
            <h6 className="text-zinc-500">Price</h6>
            <span>{book.price}</span>
          </div>
          <div>
            <h6 className="text-zinc-500">Highest Bid</h6>
            <span>0.33 wETH</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
