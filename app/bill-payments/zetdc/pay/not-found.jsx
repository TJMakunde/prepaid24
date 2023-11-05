import Link from "next/link"
import Image from 'next/image';
export default function NotFound() {
  return (
      <main className="text-center flex flex-col items-center justify-center h-screen">
        <Image src="/fail.png" width={300} height={300} quality={100} />
        <h2 className="text-5xl text-primary">Houston, we have a problem!</h2>
        <p className="text-3xl text-secondary">We could not find the payment you were looking for.</p>
        <p className="text-3xl text-base">
          <Link href="/">Go back to all payments</Link>.
        </p>
      </main>

  )
}
