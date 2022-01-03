import Head from 'next/head'

import Footer from "./Footer";
import Header from "./Header";
import Searchbox from "./Searchbox";


function Layout(Props) {

    const {children,title} = Props;

   return (<>
            <Head>
                <title>autoLUP | {title}</title>
                <meta name="description" content="twistyBRAT ];) using NextJS, TailwindCSS" />
                <link rel='icon' href='/fav.ico' />
            </Head>
            <div className=" h-screen">
                    <Header />
                    <Searchbox />
                    <div className="" >

                            {children}
                   
                    </div>
                    <Footer />
            </div>
         </>)
}

export default Layout
