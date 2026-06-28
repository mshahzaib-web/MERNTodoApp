

export default function MyTaskCom() {
  return (
    <>
      <div className="flex justify-center">
        <div>
          <div className="py-7">
            <h3 className="font-bold text-2xl text-white">Name</h3>
          </div>
          <div className="">
            <h3 className="font-bold text-xl text-white">My Task:</h3>
          </div>
        </div>
      </div>
      <div className="border border-amber-50 container mx-auto">
        <ul>
          <div className="flex justify-around py-3">
            <div>
              <li className="text-lg font-bold text-white">anme one</li>
            </div>
            <div className="flex ">
              <button className="mr-3  bg-amber-200 px-2 cursor-pointer rounded hover:font-bold hover:text-white">
                Update
              </button>
              <button className="bg-red-400 px-2  cursor-pointer rounded hover:font-bold hover:text-white">
                Delete
              </button>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}
