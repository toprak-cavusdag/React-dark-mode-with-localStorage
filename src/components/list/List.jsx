import React from 'react';

const List = () => {
  return (
    <div>
      {' '}
      <ul className='w-48 text-sm font-medium text-gray-900 duration-500 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
        <li className='w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
          Profile
        </li>
        <li className='w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600'>
          Settings
        </li>
        <li className='w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600'>
          Messages
        </li>
        <li className='w-full px-4 py-2 rounded-b-lg'>Download</li>
      </ul>
    </div>
  );
};

export default List;
