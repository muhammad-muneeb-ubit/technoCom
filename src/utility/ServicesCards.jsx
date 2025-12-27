
const ServicesCards = ({ icon, name, desc }) => {
  return (
    <div
      className="
        w-full sm:w-1/2 lg:w-1/4
        bg-white
        rounded-xl
        p-6
        flex flex-col items-center text-center gap-4
        shadow-md
        hover:shadow-xl
        hover:-translate-y-1
        transition-all duration-300 ease-in-out
        cursor-pointer
        hover:border-green-400 border border-transparent
        
      "
    >
      <div className="w-20 h-20 flex items-center justify-center bg-green-50 rounded-full">
        <img
          src={icon}
          alt={name}
          className="w-12 h-12 object-contain"
        />
      </div>

      <h3 className="text-xl font-semibold text-green-700">
        {name}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
};

export default ServicesCards;
