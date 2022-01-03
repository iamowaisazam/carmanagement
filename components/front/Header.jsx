import Image from "next/image"



function Header() {
   return (
      <header className="">
         <nav className="bg-grey-darkest p-2 mt-0 w-full z-10 pin-t">
            <div className="container mx-auto flex flex-wrap items-center">
               {/* <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                  <a class="text-white no-underline hover:text-white hover:no-underline" href="#">
                     <span class="text-2xl pl-2"><i class="em em-grinning"></i> AutoLUP</span>
                     <Image 
                        src=""
                        
                     />
                  </a>
               </div> */}
               <div className="flex w-full pt-2 content-center justify-between md:w-2/3 md:justify-end">
                  <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                     <li className="mr-3">
                        <a className="inline-block py-2 px-4 text-white no-underline" href="#">Active</a>
                     </li>
                     <li className="mr-3">
                        <a className="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4" href="#">FAQs</a>
                     </li>
                     <li className="mr-3">
                        <a className="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4" href="#">Support</a>
                     </li>
                     <li className="mr-3">
                        <a className="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4" href="#">Terms & Conditions</a>
                     </li>
                  </ul>
               </div>
               
               <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
                  <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                     <li className="mr-3">
                        <a className="inline-block py-2 px-4 text-white no-underline " href="#">My Profile</a>
                     </li>

                  </ul>
               </div>
            </div>
         </nav>
      </header>
   )
}

export default Header
