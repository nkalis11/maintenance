import React from 'react'

export default function Roles() {
  return (
    <div>
        <h1 className='text-3xl text-gray-800 font-bold py-2'>Roles</h1>
        <div className="overflow-x-auto relative border-2">
        <table className="table-auto w-full text-left text-gray-500">
            <thead className="bg-gray-50 text-gray-700 uppercase">
                <tr>
                    <th scope='col' className='py-3 px-6'>Title</th>
                    <th scope='col' className='py-3 px-6'>Permission Level</th>
                    <th scope='col' className='py-3 px-6'>Active Users</th>
                </tr>
            </thead>
            <tbody>
                <tr className='bg-white border-b'>
                    <td className='py-4 px-6'>Admin</td>
                    <td className='py-4 px-6'>1</td>
                    <td className='py-4 px-6'>
                    <button  type="button" className='bg-blue-500 text-white uppercase px-3 py-2 text-sm leading-snug shadow-sm hover:bg-blue-300'>
                            Open List
                        </button>
                    </td>
                </tr>
                <tr className='bg-white border-b'>
                    <td className='py-4 px-6'>Supervisor</td>
                    <td className='py-4 px-6'>2</td>
                    <td className='py-4 px-6'>
                    <button  type="button" className='bg-blue-500 text-white uppercase px-3 py-2 text-sm leading-snug shadow-sm hover:bg-blue-300'>
                            Open List
                        </button>
                    </td>
                </tr>
                <tr className='bg-white border-b'>
                    <td className='py-4 px-6'>Worker</td>
                    <td className='py-4 px-6'>3</td>
                    <td className='py-4 px-6'>
                    <button  type="button" className='bg-blue-500 text-white uppercase px-3 py-2 text-sm leading-snug shadow-sm hover:bg-blue-300'>
                            Open List
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
  );
}

