import { UserProfile } from '@clerk/nextjs';
import React from 'react';

const page = () => {
  return (
    <div className='p-4 w-full justify-items-center'>
      <UserProfile />
    </div>
  );
}

export default page;
