import Image from 'next/image';
import MatchIOLogo from '../assets/MatchIOLogo.png';

export function Section() {
    return(
        <section className="bg-gradient-to-r from-white to-soft-blue py-12">
            <div className="container mx-auto flex flex-col md:flex-row justify-between px-4 space-y-8 md:space-y-0 md:space-x-8">          
                <div className="md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
                        Match your favorite foods, drinks, products...
                    </h1>
                    <p className="text-gray-600 text-lg mb-6">
                    The best matching tool in the market, you don&apos;t know what to choose? don&apos;t worry, we got you!!
                    </p>
                    <a href="#" className="btn btn-primary self-start">
                        Get Access Now
                    </a>
                </div>
                <div className="md:w-1/2 flex items-center justify-center">
                    <Image
                            src={MatchIOLogo}
                            alt="MatchIO Logo"
                            width={500}
                            height={500}
                            className="max-w-full h-auto"
                    />
                </div>
            </div>
        </section>
    )
}