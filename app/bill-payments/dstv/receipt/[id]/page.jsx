import { notFound } from 'next/navigation'

async function getReceipt(id) {
  const res = await fetch(`http://localhost/PHPdev/api.pompay/api/v0.0.1/routes/zba/zetdc/validate/`, {
      method: 'POST',
      body: JSON.stringify({
          id: id,
          type: 'DSTV'
      }),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
  })

  const data = await res.json();

  if (!data.success) {
    // Handle failure response here
    return notFound();
  }

  return data;
}

export default async function TicketDetails({ params }) {
  const id = params.id
  const ticket = await getReceipt(params.id)
  /*ticket.data[0].details*/

  return (
      <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-primary">DSTV Subscription</h2>
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
                                          <label className="text-sm font-semibold text-accent">Name</label>
                                          <span className="text-primary font-semibold">John Doe </span>
                                      </div>
                                      <div className="flex flex-col">
                                          <label className="text-sm font-semibold text-accent">account number</label>
                                          <span className="text-primary font-semibold"></span>
                                      </div>
                                      <div className="flex flex-col">
                                          <label className="text-sm font-semibold text-accent">receipt details</label>
                                          <span className="text-primary font-semibold">
                                            {ticket.data[0].details}
                                          </span>
                                      </div>
                                      <div className="flex flex-col">
                                          <label className="text-sm font-semibold text-accent">due date</label>
                                          <span className="text-primary font-semibold"></span>
                                      </div>

                                  </div>
                              )}
                          </div>
                      </div>
                      <figure>
                          <img src="/success.svg" alt="Album"/>
                      </figure>

                  </div>

              </div>
          </div>
      </div>


  )
}
