import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className=" rounded-3xl overflow-hidden w-80 h-auto bg-[#858584] text-white">
      <div className="">
        <img className="w-full h-full" src={book.imgurl} />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{book.title}</h3>
        <div className="flex items-center gap-2 pt-2">
          <div className="w-6 h-6 justify-center items-center flex">
            <img
              className="w-6 h-6 rounded-[100px]"
              src="https://via.placeholder.com/24x24"
            />
          </div>
          <h4>{book.author}</h4>
        </div>
        <div className="flex justify-between pt-4">
          <div>
            <h6>Price</h6>
            <span>{book.price}</span>
          </div>
          <div>
            <h6>Highest Bid</h6>
            <span>0.33 wETH</span>
          </div>
        </div>
      </div>

      {/* <div className="self-stretch h-[173px] px-[30px] pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] flex">
      <div className="self-stretch h-[60px] flex-col justify-start items-start gap-[5px] flex">
        <div className="self-stretch text-white text-[22px] font-semibold font-['Work Sans'] capitalize leading-[30.80px]">{book.title}</div>
        <div className="self-stretch justify-start items-start gap-3 inline-flex">
          <div className="justify-start items-start gap-2.5 flex">
            <div className="w-6 h-6 justify-center items-center flex">
              <img className="w-6 h-6 rounded-[100px]" src="https://via.placeholder.com/24x24" />
            </div>
          </div>
          <div className="grow shrink basis-0 text-white text-base font-normal font-['Space Mono'] leading-snug">{book.author}</div>
        </div>
      </div>
      <div className="self-stretch justify-start items-start inline-flex">
        <div className="grow shrink basis-0 pr-[21px] flex-col justify-start items-start gap-2 inline-flex">
          <div className="self-stretch text-zinc-500 text-xs font-normal font-['Space Mono'] leading-[13.20px]">Price</div>
          <div className="self-stretch text-white text-base font-normal font-['Space Mono'] leading-snug">{book.price} ETH</div>
        </div>
        <div className="grow shrink basis-0 flex-col justify-center items-end gap-2 inline-flex">
          <div className="self-stretch text-right text-zinc-500 text-xs font-normal font-['Space Mono'] leading-[13.20px]">Highest Bid</div>
          <div className="self-stretch text-right text-white text-base font-normal font-['Space Mono'] leading-snug">0.33 wETH</div>
        </div>
      </div>
    </div> */}
    </div>
  );
};

export default BookSingleCard;
