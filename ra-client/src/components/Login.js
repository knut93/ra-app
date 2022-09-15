import React from "react"

const Login = () => {
    return (
        <>
            <div className='mt-4 shadow-sm border-2 border-black-600-p-1 flex-col space-y-6 w-auto max-w-min mx-auto text-center rounded text-2x1 min-w-[25%]'>
                <div className='font-bold p-2 bg-gray-200 '>
                    <h2>Login</h2>
                </div>
                <div className='space-y-6'>
                    <form className='space-y-3 max-w-[75%] w-auto mx-auto'>
                        <div className='text-left flex flex-col'>
                            <label>Username </label>
                            <input className='border-2 rounded border-gray-600-p-1' name="username" type="text" required></input>
                        </div>
                        <div className='text-left flex flex-col'>
                            <label>Password </label>
                            <input className='border-2 rounded border-gray-600-p-1' name="password" type="password" required></input>
                        </div>
                        <div className='pb-3 space-y-6 space-x-6'>
                            <button className='py-1 px-2 bg-blue-500 text-white rounded' type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;