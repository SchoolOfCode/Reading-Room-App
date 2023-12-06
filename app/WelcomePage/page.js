// Welcome Page tailored for logged in user

'use client';

import { Link } from '@chakra-ui/next-js';
import { VStack } from '@chakra-ui/react';
import Welcome from './components/Welcome.js';
import Avatar from './components/Avatar.js';
import ReadingNotes from './components/ReadingNotes.js';
import Continue from './components/Continue.js';

export default function WelcomePage() {
  return (
    <>
      <VStack as='main' spacing={12}>
        <Welcome />
        <Avatar />
        <ReadingNotes />
        <Continue />
      </VStack>

      <button>
        <Link className='returnButton' href='/'>
          Return Home
        </Link>
      </button>
    </>
  );
}
