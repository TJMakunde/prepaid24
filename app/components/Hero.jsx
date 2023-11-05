import Image from "next/image";
import Link from "next/link";

export default function Navbar(){

    return (
        <div className="hero">
          <div className="flex-1 pt-2 padding-x">
            <h1 className="hero__title">
              Simplify Your Finances, Your All in One Payments Hypermarket!
            </h1>

            <p className="hero__subtitle">
              Streamline your payments experience with our effortless process.
            </p>

          </div>
          <div className="hero__image-container">
              <div className="hero__image">
                <Image src="/success.svg" alt="hero" fill className="object-contain" />
              </div>

            <div className="hero__image-overlay" />
          </div>
        </div>
    )
}
