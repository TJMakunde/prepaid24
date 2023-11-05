import Image from "next/image";
import Link from "next/link";
import Logo from "./Prepaid24-logo.png"

export default function Navbar(){

    return (

        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost normal-case text-xl">
                <Image src={Logo} width={120} quality={100} palceholder="blur" />
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                {/*
                <li tabIndex={0}>
                  <details>
                    <summary>Bill Payments</summary>
                    <ul className="p-2">
                        <li>
                            <Link href="/bill-payments/zetdc/pay">ZESA Pre-Paid</Link>
                        </li>
                        <li>
                            <Link href="/bill-payments/dstv/pay">DSTV</Link>
                        </li>
                    </ul>
                  </details>
                </li>
                <li>
                    <Link href="/how-to" className="text-primary text-bold">How To</Link>
                </li>
                <li>
                    <Link href="/support" className="text-primary text-bold">Support</Link>
                </li>*/}
            </ul>
          </div>
        </div>
    )
}
