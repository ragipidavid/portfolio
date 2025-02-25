import Image from "next/image";

export default function ProfileImage() {
    return (
        <>
            {/* Desktop Image */}
            <div className="hidden md:block absolute left-8 md:left-16 top-20 md:top-30">
                <Image
                    src="/IMG_3561.jpeg"
                    alt="David Ragipi"
                    width={300}
                    height={300}
                    className="object-cover rounded-md max-w-[150px] md:max-w-[300px]"
                />
            </div>

            {/* Mobile Image */}
            <div className="md:hidden flex justify-center mb-8 mt-12">
                <Image
                    src="/IMG_3561.jpeg"
                    alt="David Ragipi"
                    width={150}
                    height={150}
                    className="object-cover rounded-md"
                />
            </div>
        </>
    );
} 