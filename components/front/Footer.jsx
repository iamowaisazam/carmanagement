function Footer() {
   return (<>
            <footer className="">
                  <nav className="bg-grey-darkest p-2 mt-0 w-full z-10 pin-t border-t-4 border-white ">
                     <div className="container mx-auto flex flex-wrap items-center">
                        <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white">
                           <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
                              <span className="text-md pl-2"><i className="em em-grinning"></i> AutoLUP All Rights Reserved</span>
                           </a>
                        </div>
                        <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                           <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
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
                     </div>
                  </nav>
             </footer>

      <style jsx>{`


      `}</style>
   </>)
}

export default Footer
