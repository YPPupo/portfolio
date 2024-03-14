const ContactMe = () => {
  return (
    <div className="min-h-screen py-20 px-20 flex flex-col gap-10">
      <h2 className="font-poppins font-bold text-4xl underline">ContactMe</h2>
      <form className="flex flex-col gap-10 px-10 mx-auto">
        <div className="flex gap-5">
          <label className="w-32" htmlFor="">
            Your email
          </label>
          <input
            className="outline-none py-2 px-3 rounded-lg flex-1 max-w-md"
            type="text"
            placeholder="yperezpupo98@gmail.com"
          />
        </div>
        <div className="flex gap-5">
          <label className="w-32" htmlFor="">
            Your message
          </label>
          <textarea
            className="outline-none py-2 px-3 rounded-lg flex-1 max-w-md"
            cols={50}
            rows={10}
            placeholder="Hi..."
          ></textarea>
        </div>
        <div className="max-w-2xl flex justify-end">
          <button className="bg-blue-500 w-fit px-5 py-3 rounded-3xl text-white font-bold ml-auto">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
