const ClientCards = ({clientInfo, title}) => {

  return (
    <div style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} className="w-[300px] max-w-md bg-white border border-gray-200 rounded-lg shadow my-4 p-6 hover:cursor-pointer">
      <p className="text-lg font-bold text-green-500 hover:scale-105">{title}</p>
      <ul className="my-4 space-y-3">
       { clientInfo.map((distributor, index) => (
          <li key={index} className="text-gray-500 hover:text-green-600 hover:underline">
            {distributor}
          </li>
        ))
       }
      
      </ul>
    </div>
  );
}
export default ClientCards;
