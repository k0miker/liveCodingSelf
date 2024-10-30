const CardComponent = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src="https://th.bing.com/th/id/OIP.FL6r-StiKPIoGxDaylYHMwHaEb?rs=1&pid=ImgDetMain"
        alt="Beautiful scenery"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Beautiful Scenery
        </h2>
        <p className="text-gray-600 mt-2">
          This is a beautiful scenery that makes you feel relaxed and happy.
          Enjoy nature's beauty!
        </p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
