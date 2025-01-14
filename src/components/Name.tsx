const Name = () => {
  return (
    <div className="max-w-[450px] w-full flex flex-col gap-2">
      <label htmlFor="nameInput" className="label">
        Full Name
      </label>
      <input
        type="text"
        className="h-[50px] p-2 rounded-xl bg-neutral-300 bg-opacity-30 border border-neutral-200 focus:outline-none text-neutral-100 focus:ring focus:ring-neutral-300"
      />
    </div>
  );
};

export default Name;
