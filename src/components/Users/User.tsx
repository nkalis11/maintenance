import React from 'react'

export default function User() {
  return (
    <div>
        <h1 className='text-3xl text-gray-800 font-bold py-2'>Users</h1>
        <div className="overflow-x-auto relative border-2">
        <table className="table-auto w-full text-left text-gray-500">
            <thead className="bg-gray-50 text-gray-700 uppercase">
                <tr>
                    <th scope='col' className='py-3 px-6'>Name</th>
                    <th scope='col' className='py-3 px-6'>Role</th>
                    <th scope='col' className='py-3 px-6'>Workcenter</th>
                </tr>
            </thead>
            <tbody>
                <tr className='bg-white border-b'>
                    <td className='py-4 px-6'>Nicholas Kalis</td>
                    <td className='py-4 px-6'>Admin</td>
                    <td className='py-4 px-6'>All</td>
                </tr>
                <tr className='bg-white border-b'>
                    <td className='py-4 px-6'>John Doe</td>
                    <td className='py-4 px-6'>Supervisor</td>
                    <td className='py-4 px-6'>WQ01</td>
                </tr>
                <tr className='bg-white border-b'>
                    <td className='py-4 px-6'>Jane Doe</td>
                    <td className='py-4 px-6'>Worker</td>
                    <td className='py-4 px-6'>WQ01</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
  );
}

