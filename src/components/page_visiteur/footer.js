export default function Footer() {
    return (<footer className="relative mt-20 bg-[#fbfbfb] border-t ">
        <div className="px-auto lg:px-[12%] md:px-[5%] shadow-3xl">
            <footer className="rounded-lg flex items-center justify-between  ">
            <div className='div_logo'>
                  <a href='/'>
                      <img src="./images/Bdarija2.png"/>
                  </a>
          </div>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com" className="hover:underline" target="_blank">Flowbite™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
                    <div className="mt-6 lg:mb-0 mb-6 md:mt-0">
                        <button className="bg-white text-green-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                            <i className="fab fa-whatsapp"></i></button><button className="bg-white text-pink-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                            <i className="fab fa-instagram"></i></button><button className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                            <i className="fab fa-facebook-square "></i></button><button className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                            <i className="fab fa-linkedin"></i>
                        </button>
                    </div>
                </ul>
            </footer>


        </div>
    </footer>

    )
}