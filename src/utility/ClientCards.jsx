const ClientCards = ({ clientInfo, title }) => {
  return (
    <div
      className="
      hover:border-green-400 border border-transparent
        w-full sm:w-[300px]
        bg-white
        rounded-xl
        p-6
        shadow-md
        hover:shadow-xl
        hover:-translate-y-1
        transition-all duration-300 ease-in-out
        cursor-pointer
      "
    >
      <h3 className="text-xl font-semibold text-green-700 mb-4 text-center">
        {title}
      </h3>

      <ul className="space-y-3">
        {clientInfo.map((client, index) => (
          <li
            key={index}
            className="
              text-gray-600
              text-[16px]
              flex items-center gap-2
              
              transition-colors
              
            "
          >
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            {client}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientCards;
