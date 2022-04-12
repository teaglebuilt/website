
const Subscribe: React.FC = () => {

  const subscribe = async (e) => {
    e.preventDefault();
  }
  return (
    <div className="bg-white text-gray-800 w-5/6 md:w-1/2 lg:w-1/3 rounded-lg shadow m-auto -brown-400 border border-t-8 border-b-8 border-black mt-20 flex flex-col">
        <div className="p-4 flex flex-col">
            <p className="my-4" id="whoobe-dvhrz">Get notified when I take a dump in the morning.</p>
            <div className="mt-4">Your Email</div>
            <input type="email" value="" className="p-1 w-full border-gray-200" name="email" placeholder="your email is required" required />
            <button type="button" value="button" className="hover:bg-green-400 bg-gray-800 text-white m-auto my-4 px-6 py-2 text-lg rounded shadow-px-4 border-0">Subscribe</button>
        </div>
    </div>
  );
};

export default Subscribe;
