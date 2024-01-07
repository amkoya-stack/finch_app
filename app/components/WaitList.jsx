'use client';
import { useState } from 'react';
import { useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const WaitList = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [email, setEmail] = useState('');
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [password, setPassword] = useState('');
  // const [pendingVerification, setPendingVerification] = useState(false);
  // const [code, setCode] = useState('');
  const router = useRouter();

  // Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        email_address: email,
      });

      // send the email.
      // await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      // // change the UI to our pending section.
      // setPendingVerification(true);
    } catch (err) {
      console.error(err);
    }
  };

  // Verify User Email Code
  // const onPressVerify = async (e) => {
  //   e.preventDefault();
  //   if (!isLoaded) {
  //     return;
  //   }

  //   try {
  //     const completeSignUp = await signUp.attemptEmailAddressVerification({
  //       code,
  //     });
  //     if (completeSignUp.status !== 'complete') {
  //       /*  investigate the response, to see if there was an error
  //        or if the user needs to complete more steps.*/
  //       console.log(JSON.stringify(completeSignUp, null, 2));
  //     }
  //     if (completeSignUp.status === 'complete') {
  //       await setActive({ session: completeSignUp.createdSessionId });
  //       router.push('/');
  //     }
  //   } catch (err) {
  //     console.error(JSON.stringify(err, null, 2));
  //   }
  // };

  return (
    <div>
        <form onSubmit={handleSubmit}>
         <div className='btn'>
            <input
                type='email'
                name='email'
                id='email'
                onChange={(e) => setEmail(e.target.value)}
                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-blue-600 focus:border-blue-600 w-auto p-2.5'
                placeholder='name@company.com'
                required={true}
              />
            <button
              type='submit'
              onClick={handleSubmit}
              className='btn-2 w-30 m-auto items-center text-white bg-blue-600 hover:bg-blue-700 font-medium text-sm px-5 py-2.5 text-center'
              >
              STEP INSIDE
              </button>
        </div>
        </form>
    </div>
  );
};

export default WaitList;