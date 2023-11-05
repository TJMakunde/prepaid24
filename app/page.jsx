import Image from 'next/image';
import Link from 'next/link';

import Hero from "./components/Hero";

import Zesa from "../public/zesa.webp"
import Dstv from "../public/DSTV.jpg"
import Zol from "../public/Zol.jpg"

export default function Home() {
  return (
    <div>
        <Hero />

         {/* About Us Section, maybe */}

         {/* Products Section */}
         <section className="bg-gray-200 py-16">
           <div className="max-w-5xl mx-auto px-8">
             <h2 className="text-primary text-2xl mb-4 pb-2">Pay Your Bills Here!!</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
               {/* Column 1 */}
               <div className="rounded-lg card bg-base-100 shadow-xl p-6">
                 <figure>
                   <Image src={"/zesa.webp"} width={100} height={100} quality={100}/>
                 </figure>
                 <div className="card-body">
                   <h2 className="card-title text-primary">ZETDC</h2>
                   <p className="text-gray-500 text-semibold">PrePaid Electricity Payments</p>
                   <div className="card-actions justify-end">
                     <Link href="/bill-payments/zetdc/pay" className="btn btn-primary normal-case text-md">
                       Pay Now!
                     </Link>
                   </div>
                 </div>
               </div>

               {/* Column 2 */}
               <div className="rounded-lg card bg-base-100 shadow-xl p-6">
                 <figure>
                   <Image src={Dstv} height={100} quality={100}/>
                 </figure>
                 <div className="card-body">
                   <h2 className="card-title text-primary">DSTV Zimbabwe</h2>
                   <p className="text-gray-500 text-semibold">Pay your satellite TV bills</p>
                   <div className="card-actions justify-end">
                     <Link href="/bill-payments/dstv/pay" className="btn btn-primary normal-case text-md">
                       Pay Now!
                     </Link>
                   </div>
                 </div>
               </div>

               {/* Column 3 */}
               <div className="rounded-lg card bg-base-100 shadow-xl p-6">
                 <figure>
                   <Image src={"/education.png"} width={100} height={100} quality={100}/>
                 </figure>
                 <div className="card-body">
                   <h2 className="card-title text-primary">School Fees</h2>
                   <p className="text-gray-500 text-semibold">Pay school fees, levies, and more</p>
                   <div className="card-actions justify-end">
                     <button className="btn btn-primary btn-disabled">Coming Soon</button>
                   </div>
                 </div>
               </div>

               {/* Column 4 */}
               <div className="rounded-lg card bg-base-100 shadow-xl p-6">
                   <figure>
                   <Image src={"/Zimra.png"} width={150} height={150} quality={100} palceholder="blur" />
                   </figure>
                   <div className="card-body">
                     <h2 className="card-title text-primary">ZIMRA</h2>
                     <p className="text-gray-500 text-semibold">Stay on top of your tax obligations</p>
                     <div className="card-actions justify-end">
                       <button className="btn btn-primary btn-disabled">Coming Soon</button>
                     </div>
                   </div>
               </div>

               {/* Column 5 */}
               <div className="rounded-lg card bg-base-100 shadow-xl p-6">
                   <figure>
                      <Image src={"/nyaradzo-logo.png"} width={100} height={100} quality={100} palceholder="blur" />
                   </figure>
                   <div className="card-body">
                     <h2 className="card-title text-primary">Nyaradzo</h2>
                     <p className="text-gray-500 text-semibold">Ensure your and your loved ones are well taken care of</p>
                     <div className="card-actions justify-end">
                       <button className="btn btn-primary btn-disabled">Coming Soon</button>
                     </div>
                   </div>
               </div>

               {/* Column 6 */}
               <div className="rounded-lg card bg-base-100 shadow-xl p-6">
                   <figure>
                   <Image src={"/fml.png"} width={300} height={300} quality={100} palceholder="blur" />
                   </figure>
                   <div className="card-body">
                     <h2 className="card-title text-primary">First Mutual LIfe</h2>
                     <p className="text-gray-500 text-semibold">Be prepared for life eventualities</p>
                     <div className="card-actions justify-end">
                       <button className="btn btn-primary btn-disabled">Coming Soon</button>
                     </div>
                   </div>
               </div>
             </div>
           </div>
         </section>
    </div>
  )
}
