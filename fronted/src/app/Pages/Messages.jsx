import React from 'react'

function Messages() {
  return (
    <div>
        <button
          type='button'
          className='bg-blue-500 text-white py-2 px-4 rounded flex items-center'
          onClick={() => document.getElementById('addClientModal').classList.add('block')}
        >
          <FaUser className='mr-2' />
          <span>Add Client</span>
        </button>

        <div
          className='hidden fixed inset-0 z-50 overflow-y-auto flex justify-center items-center bg-black bg-opacity-50'
          id='addClientModal'
        >
          <div className='bg-white rounded shadow-lg p-6 w-1/3'>
            <div className='flex justify-between items-center'>
              <h5 className='text-xl'>Add Client</h5>
              <button
                type='button'
                className='text-gray-500'
                onClick={() => document.getElementById('addClientModal').classList.add('hidden')}
              >
                ×
              </button>
            </div>

            <form onSubmit={onSubmit} className='mt-4'>
              <div className='mb-3'>
                <label className='block text-gray-700'>Name</label>
                <input
                  type='text'
                  className='border border-gray-300 p-2 rounded w-full'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              
              <div className='mb-3'>
                <label className='block text-gray-700'>Email</label>
                <input
                  type='email'
                  className='border border-gray-300 p-2 rounded w-full'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className='mb-3'>
                <label className='block text-gray-700'>Phone</label>
                <input
                  type='text'
                  className='border border-gray-300 p-2 rounded w-full'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <button
                type='submit'
                className='bg-blue-500 text-white py-2 px-4 rounded'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Messages
