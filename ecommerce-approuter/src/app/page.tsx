import Image from "next/image";
import CarouselBanner from "./components/CarouselBanner/CarouselBanner";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <CarouselBanner />
      <div className="p-5">
        <h3>Great Deals - 499 only!!</h3>
        <div className="container">
          <div className="row text-center">
            <div className="col-6 col-md-3 fs-6">
              <Link href="">
                <Image className="m-3" src="/images/image1.jpg" alt="image" height={200} width={180} />
              </Link>
              <p>Women's Heels, Flats...</p>
            </div>
            <div className="col-6 col-md-3 fs-6">
              <Link href="">
                <Image className="m-3" src="/images/image2.jpg" alt="image" height={200} width={180} />
              </Link>
              <p>Men's Sports Shoes...</p>
            </div>
            <div className="col-6 col-md-3 fs-6">
              <Link href="">
                <Image className="m-3" src="/images/image4.jpg" alt="image" height={200} width={180} />
              </Link>
              <p>USPA, Levi's, Peter Engl...</p>
            </div>
            <div className="col-6 col-md-3 fs-6">
              <Link href="">
                <Image className="m-3" src="/images/image5.jpg" alt="image" height={200} width={180} />
              </Link>
              <p>Kids Casual Shoes...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
