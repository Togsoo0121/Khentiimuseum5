const Navigation = ({ activeIndex, onNavigate }) => {
  const menu = ['Танилцуулга', 'Соёлын өв', 'Ажлууд', 'Удирдлага'];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-4">
      {menu.map((label, index) => (
        <button
          key={index}
          onClick={() => onNavigate(index)}
          className={`px-3 py-1 rounded ${
            activeIndex === index ? 'bg-blue-500 text-white' : 'bg-gray-100'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Navigation;