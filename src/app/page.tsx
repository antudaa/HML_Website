import Image from "next/image";
import BackgroundImage from "@/assets/shaah-shahidh--subrrYxv8A-unsplash.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black   px-10 lg:px-16 xl:px-24 mx-auto h-[80vh] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          className="object-cover object-center w-full h-full"
          src={BackgroundImage}
          alt="Heavy Marine Logistics Background"
          layout="fill"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-6 h-full text-center md:text-left lg:mt-[10vh]">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight uppercase tracking-wide" style={{ wordSpacing: "0.3em" }}>
          HEAVY MARINE LOGISTICS
        </h1>

        <div className="mt-[19.5vh] xl:mt-[13.5vh] w-1/3">
          <p className="text-base md:text-md text-gray-300 mx-auto w-full md:max-w-xl lg:max-w-lg xl:max-w-md text-justify mb-4">
            Megaline, headquartered in Seoul, South Korea, is one of the leading service providers of heavy marine transportation. We own and operate four heavy transport vessels, comprising three world-class self-propelled deck carriers and one semi-submersible.
          </p>

          <div className="flex justify-center lg:justify-end">
            <Link href="#" className="bg-[#094d82] text-white py-1 px-6 text-base transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              More Info
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
