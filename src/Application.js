import { Form } from "react-router-dom";

function Application() {
  return (
    <Form action="/review" method="POST">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          name="name"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="password_confirmation"
        >
          Confirm Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password_confirmation"
          type="password"
          name="password_confirmation"
          placeholder="Enter your password"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Gender</label>
        <div>
          <label htmlFor="gender-male" className="mr-4">
            <input id="gender-male" type="radio" name="gender" value="male" />
            <span className="ml-2">Male</span>
          </label>
          <label htmlFor="gender-female" className="mr-4">
            <input
              id="gender-female"
              type="radio"
              name="gender"
              value="female"
            />
            <span className="ml-2">Female</span>
          </label>
        </div>
      </div>
      <div className="flex items-center justify-between mt-12">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Review
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="reset"
        >
          Reset
        </button>
      </div>
    </Form>
  );
}

export default Application;
