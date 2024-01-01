// import Link from 'next/link';
// import React from 'react'
// import { auth, UserButton } from '@clerk/nextjs';

// const Header = () => {
//   const { userId } = auth();


//   return (
//     <>
//       <nav className="nav py-4 px-6 flex items-center justify-between mt-2">
//         <div className="flex items-center nav-menu">
//             <Link href="/">
//                 <div className="text lg uppercase font-bold text-white nav-menu mr-4">
//                     Finch
//                 </div>
//             </Link>
//             <div className="text lg font-bold text-white nav-menu mr-4">
//                     About us
//                 </div>
//         </div>
//         <div className="text-white flex items-center">
//           {!userId && (
//             <>
//               <Link href='sign-in' className='text-white hover:text-white hover:text-gradient mr-4 nav-menu font-bold'>Sign in</Link>
//               <Link href='sign-up' className='text-white hover:text-white hover:text-gray mr-4 nav-menu font-bold'>Sign up</Link>
//             </>
//           )}
//           { userId && (
//             <Link href="profile" className='text-white mr-4'>Profile</Link>
//           ) }
//           <div className="ml-auto">
//             <UserButton afterSignOutUrl='/' />
//           </div>
//         </div>
//       </nav>
//       <div className="nav-line w-screen">
//         <hr width="100%" className="un-line"/>
//       </div>
//     </>
//   )
// }

// export default Header;