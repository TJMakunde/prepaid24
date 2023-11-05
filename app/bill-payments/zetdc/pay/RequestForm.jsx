"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Modal from '../../../components/Alert';
import Image from "next/image";
import { API_URL, POMPAY_URL } from '../../../config/config';


export default function Init(){
    const router = useRouter()

    const [activeSlide, setActiveSlide] = useState('slide1');
    const [meter, setMeter] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [amount, setAmount] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [details, setDetails] = useState(null);
    const [selectedCurrency, setSelectedCurrency] = useState('USD');

    const [modalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState('');

    const closeModal = () => {
      setModalOpen(false);
      setModalTitle('');
      setModalContent('');
    };

    const showErrorModal = (title, content) => {
      setModalTitle(title);
      setModalContent(content);
      setModalOpen(true);
    };

    const handleCurrencyChange = (e) => {
      setSelectedCurrency(e.target.value);
    };

    const handleValidate = async(e)=>{
        e.preventDefault();

        setIsLoading(true)

        const res = await fetch(API_URL + 'zba/zetdc/', {
            method: 'POST',
            body: JSON.stringify({
                billerId: "ZETDC",
            	customerAccount: meter
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json()).then((data) => {

            if ( data.success ) {
                setDetails(data);
                setActiveSlide('slide2');
            } else {
                // TODO: alert error
                showErrorModal(`error`, 'The system is not available right now, please try again later.');
            }
            setIsLoading(false);
        }).catch((error) => {
            showErrorModal('warning', 'The system is not available right now, please try again later.');
            setIsLoading(false);
            // Handle errors as needed
        });
    }

    const handleConfirm = async(e)=>{
        e.preventDefault();
        setIsLoading(true)
        setIsLoading(false);
        setActiveSlide('slide3');
    }

    const handlePayment = async(e)=>{
        e.preventDefault();
        showErrorModal('success', 'Just a moment as you are re-directed to the payment gateway.');

        window.location.href = POMPAY_URL+'?q=zetdc&p='+phone+'&e='+email+'&c='+selectedCurrency+'&a='+amount+'&cn='+details.CustomerName+'&ca='+details.CustomerAccount;
    }

    return (

        <div className="carousel w-full">

            <div id="slide1" className={`carousel-item relative w-full ${activeSlide === 'slide1' ? 'block' : 'hidden'}`}>
                <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
                    <ul className="steps max-w-5xl items-center justify-center">
                      <li className="step step-primary"></li>
                      <li className="step"></li>
                      <li className="step"></li>
                      <li className="step"></li>
                    </ul>

                    <div className="card lg:card-side bg-base-100 shadow-xl">
                      <figure>
                      <Image
                        src="/payments.svg" // Replace with the path to your SVG file
                        alt="Your SVG Image"
                        width={600}
                        height={800}
                      />
                      </figure>
                      <div className="card-body">
                          <form onSubmit={handleValidate}>
                              <h2 className="p24-section-heading">Enter Meter Number</h2>
                              <div className="mb-4 flex items-center justify-center">
                                  <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                      <span className="label-text">meter number</span>
                                    </label>
                                    <input
                                      type="text"
                                      className="input input-bordered input-primary input-md w-full max-w-xs"
                                      required
                                      onChange={(e) => setMeter(e.target.value)}
                                      value={meter}
                                    />
                                  </div>
                              </div>

                              <div className="flex items-center justify-center">
                                  <button
                                    type="submit"
                                    className="btn btn-wide btn-primary"
                                    disabled={isLoading}
                                    >
                                    {isLoading && <span>Processing...</span>}
                                    {!isLoading && <span>Top Up Now</span>}
                                  </button>
                              </div>
                          </form>

                      </div>
                    </div>

                </div>
            </div>

            <div id="slide2" className={`carousel-item relative w-full ${activeSlide === 'slide2' ? 'block' : 'hidden'}`}>

                <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
                    <ul className="steps items-center justify-center">
                      <li className="step step-primary"></li>
                      <li className="step step-primary"></li>
                      <li className="step"></li>
                      <li className="step"></li>
                    </ul>

                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <div className="card-body">
                        <form onSubmit={handleConfirm} >
                            <h2 className="p24-section-heading">Confirm Account Details</h2>

                            <div className="p-6 space-y-4">
                                {details && (
                                    <div className="space-y-2">
                                        <div className="flex flex-col">
                                            <label className="text-sm font-semibold text-accent">Name</label>
                                            <span className="text-primary font-semibold">{details.CustomerName}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-sm font-semibold text-accent">account number</label>
                                            <span className="text-primary font-semibold">{details.CustomerAccount}</span>
                                        </div>
                                        <div className="flex flex-col">
                                              <label className="text-sm font-semibold text-accent">Address</label>
                                              {details.Address1 && (
                                                <span className="text-primary font-semibold">{details.Address1}</span>
                                              )}
                                              {details.Address2 && (
                                                <span className="text-primary font-semibold">{details.Address2}</span>
                                              )}
                                              {details.Address3 && (
                                                <span className="text-primary font-semibold">{details.Address3}</span>
                                              )}
                                              {details.Address4 && (
                                                <span className="text-primary font-semibold">{details.Address4}</span>
                                              )}
                                        </div>

                                    </div>
                                )}
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                  type="submit"
                                  className="btn btn-wide btn-primary"
                                  disabled={isLoading}
                                  >
                                  {isLoading && <span>Processing...</span>}
                                  {!isLoading && <span>Pay Now</span>}
                                </button>
                            </div>
                        </form>
                        <div className="flex items-center justify-center">
                          <button
                            onClick={(e) => setActiveSlide('slide1')}
                            className="btn btn-wide btn-outline btn-secondary">
                            Previous
                          </button>
                        </div>
                        </div>
                        <figure>
                            <img src="/checkout.svg" alt="Album"/>
                        </figure>

                    </div>

                </div>

            </div>

            <div id="slide3" className={`carousel-item relative w-full ${activeSlide === 'slide3' ? 'block' : 'hidden'}`}>

                <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
                    <ul className="steps items-center justify-center">
                      <li className="step step-primary"></li>
                      <li className="step step-primary"></li>
                      <li className="step step-primary"></li>
                      <li className="step"></li>
                    </ul>

                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <div className="card-body">
                            <form onSubmit={handlePayment} >
                                <h2 className="p24-section-heading">Select Payment Method</h2>
                                <div className="p-6 space-y-4">
                                  <label className="label cursor-pointer">
                                    <span className="label-text">Mastercard via Pompay Payments</span>
                                    <input type="radio" name="radio-10" className="radio checked:bg-primary-500" defaultChecked />
                                  </label>
                                </div>
                                <div className="mb-6 flex items-center justify-center">
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                          <span className="label-text">mobile number</span>
                                        </label>
                                        <input
                                          type="number"
                                          className="input input-bordered input-base-300 input-md w-full max-w-xs"
                                          required
                                          onChange={(e) => setPhone(e.target.value)}
                                          value={phone}
                                         />
                                    </div>
                                </div>
                                <div className="mb-6 flex items-center justify-center">
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                          <span className="label-text">email address(optional)</span>
                                        </label>
                                        <input
                                          type="text"
                                          className="input input-bordered input-base-300 input-md w-full max-w-xs"

                                          onChange={(e) => setEmail(e.target.value)}
                                          value={email}
                                         />
                                    </div>
                                </div>
                                <div className="mb-6 flex items-center justify-center">
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                          <span className="label-text">payment amount</span>
                                        </label>
                                        <input
                                          type="number"
                                          className="input input-bordered input-base-300 input-md w-full max-w-xs"
                                          required
                                          onChange={(e) => setAmount(e.target.value)}
                                          value={amount}
                                         />
                                    </div>

                                </div>
                                <div>
                                     <div className="flex space-x-4">
                                       <div className="label cursor-pointer">
                                         <span className="label-text">USD</span>
                                         <input
                                           type="radio"
                                           name="currency"
                                           value="USD"
                                           className={`radio ${selectedCurrency === 'USD' ? 'checked:bg-primary-500' : ''}`}
                                           checked={selectedCurrency === 'USD'}
                                           onChange={handleCurrencyChange}
                                         />
                                       </div>
                                       <div className="label cursor-pointer">
                                         <span className="label-text">ZWL</span>
                                         <input
                                           type="radio"
                                           name="currency"
                                           value="ZWL"
                                           className={`radio ${selectedCurrency === 'ZWL' ? 'checked:bg-primary-500' : ''}`}
                                           checked={selectedCurrency === 'ZWL'}
                                           onChange={handleCurrencyChange}
                                         />
                                       </div>
                                     </div>

                                   </div>
                                <div className="flex items-center justify-center mt-10">
                                    <button
                                      type="submit"
                                      className="btn btn-wide btn-primary"
                                      disabled={isLoading}
                                      >
                                      {isLoading && <span>Processing...</span>}
                                      {!isLoading && <span>Pay Now</span>}
                                    </button>
                                </div>
                            </form>

                            <div className="flex items-center justify-center">
                              <button
                                onClick={(e) => setActiveSlide('slide2')}
                                className="btn btn-wide btn-outline btn-secondary">
                                Previous
                              </button>
                            </div>
                        </div>
                        <figure>
                            <img src="/pay.svg" alt="Album"/>
                        </figure>

                    </div>

                </div>

            </div>
            <Modal isOpen={modalOpen} closeModal={closeModal} title={modalTitle} content={modalContent} />
        </div>


    )
}
