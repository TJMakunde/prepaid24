
import { notFound } from 'next/navigation';
import { API_URL } from '../../../../config/config';

async function getReceipt(id) {
    try {

        const res = await fetch(API_URL + 'zba/zetdc/validate/', {
            method: 'POST',
            body: JSON.stringify({
                id: id,
                type: 'ZETDC'
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        const data = await res.json();


        if ( !data.success ) {
        // Handle failure response here
            return notFound();
        }

        const dataArray = data.data[0].details.split('|');

        return {
          date: dataArray[0],
          time: dataArray[1],
          receiptNumber: dataArray[2],
          meterNumber: dataArray[3],
          customerName: dataArray[4],
          addressLine1: dataArray[5],
          addressLine2: dataArray[6],
          city: dataArray[7],
          province: dataArray[8],
          token: dataArray[9],
          tarriff: dataArray[10],
          energyBought: dataArray[11],
          tenderAmount: dataArray[12],
          energyCharge: dataArray[13],
          debtCollected: dataArray[14],
          RELevyPercentage: dataArray[15],
          RELevyAmount: dataArray[16],
          VATPercentage: dataArray[17],
          VATAmount: dataArray[18],
          totalPaid: dataArray[19],
          debtBalanceBF: dataArray[20],
          debtBalanceAfterDeduction: dataArray[21],
          tarriffIndex: dataArray[22],
          supplyGroupCode: dataArray[23],
          keyRevNumber: dataArray[24],
        };
    } catch (e) {
        return e;
    }



}
export default async function TicketDetails({ params }) {
  const id = params.id;
  // production
  let ticket;

  try {
     ticket = await getReceipt(id);
   } catch (error) {
     console.error("Error:", error); // Log the error to the console
     return (
       <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
         <h2 className="text-2xl font-bold mb-6 text-center text-primary">ZETDC Payment</h2>
         <p>An error occurred while fetching the receipt details. Please try again later.</p>
       </div>
     );
   }
  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-primary">ZETDC Payment</h2>
      <div className="carousel-item relative w-full">
        <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
          <ul className="steps items-center justify-center">
            <li className="step step-primary"></li>
            <li className="step step-primary"></li>
            <li className="step step-primary"></li>
            <li className="step step-primary"></li>
          </ul>

          <div className="card lg:card-side bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="p24-section-heading">Receipt Details</h2>

              <div className="p-6 space-y-4">
                {ticket && (
                  <div className="space-y-2">
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold text-accent">name</label>
                      <span className="text-primary font-semibold">{ticket.customerName}</span>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold text-accent">meter number</label>
                      <span className="text-primary font-semibold">{ticket.meterNumber}</span>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold text-accent">token</label>
                      <span className="text-primary font-semibold">{ticket.token}</span>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold text-accent">energy bought</label>
                      <span className="text-primary font-semibold">{ticket.energyBought}</span>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold text-accent">tarriff</label>
                      <span className="text-primary font-semibold">{ticket.tarriff}</span>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold text-accent">debt balance</label>
                      <span className="text-primary font-semibold">{ticket.debtBalanceAfterDeduction}</span>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold text-accent">vat amount</label>
                      <span className="text-primary font-semibold">{ticket.VATAmount}</span>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold text-accent">total paid</label>
                      <span className="text-primary font-semibold">{ticket.totalPaid}</span>
                    </div>


                  </div>
                )}
              </div>
            </div>
            <figure>
              <img src="/success.svg" alt="Album" width="400" height="600" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
