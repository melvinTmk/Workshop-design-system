import React from 'react'


const Login = () => {


    return (
        <section id='signIn'>
            <div className='container'>
                <div className='container-inside'>
                    <div className='titre'>
                        <h1>Sign In</h1>
                        <p>You don’t have an account yet ?</p>
                    </div>

                    <form class="bg-white  rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2 label-form" for="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    </div>
    <div class="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2 label-form" for="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
    <div className="flex items-center justify-center">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      
    </div>
  </form>
                   
                </div> 
            </div>
        </section>
    )
}

export default Login