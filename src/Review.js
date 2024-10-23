import { useActionData } from "react-router-dom";

function Review() {
  const data = useActionData();

  return (
    <form>
      <div class="mb-4">
        <div class="block text-gray-700 font-bold mb-2" for="name">
          Name
        </div>
        <div class="text-xl text-slate-900">{data.name}</div>
      </div>
      <div class="mb-4">
        <div class="block text-gray-700 font-bold mb-2" for="email">
          Email
        </div>
        <div class="text-xl text-slate-900">{data.email}</div>
      </div>
      <div class="mb-4">
        <div class="block text-gray-700 font-bold mb-2">Gender</div>
        <div class="text-xl text-slate-900">{data.gender}</div>
      </div>
      <div class="flex items-center justify-between mt-12">
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
        <button
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="reset"
        >
          Back
        </button>
      </div>
    </form>
  );
}

export default Review;
