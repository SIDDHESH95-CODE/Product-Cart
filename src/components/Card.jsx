function Card({ card }) {
  const { name, image, code, colors, summary, price } = card;
//   console.log(colors);
  return (
    <div className="main w-58 bg-gray-300 rounded-xl overflow-hidden shadow-2xl">
      <div className="img w-full h-42">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt=""
        />
      </div>
      <div className="content px-4 py-2 rounded-3xl">
        <h3 className="font-semibold">{name}</h3>
        <div className="category text-[10px] mt-2 uppercase">
          <span className="border-[1px] border-gray-500 text-gray-800 mr-3 px-1 py-0.5 rounded">
            {code}
          </span>
          <span className="border-[1px] border-gray-500 text-gray-800 mr-3 px-1 py-0.5 rounded">
            {colors}
          </span>
        </div>
        <p className="details text-xs py-3 text-gray-600">
          {summary}
        </p>
        <div className="bottom-section flex justify-between items-center mt-2">
          <div className="price flex flex-col">
            <span className="uppercase text-[10px] text-gray-900 font-semibold">
              price
            </span>
            <span className="text-gray-900 font-semibold text-sm">${price}</span>
          </div>
          <button className="cursor-pointer bg-blue-800 text-white text-[10px] rounded-md px-10 py-2 font-semibold">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
