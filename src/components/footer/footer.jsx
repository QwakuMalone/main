export default function Footer() {
    return (
        <div className="h-[40vh] w-full flex flex-col items-center">
            <div className="h-2/5 lg:w-1/2 flex flex-col items-center ">
                <h1 className="text-6xl flex ">Atobra <div className="size-2 rounded-full bg-red-500 mt-12 ml-2"></div> dev</h1>
                <p className="text-lg flex gap-1 items-center mt-1 text-gray-500"><svg className="size-7 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.03783 5.61086C2.01301 5.73673 2 5.86685 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 5.87994 21.9894 5.76236 21.9691 5.64812L21.1037 6.29717L13.2149 12.3298C12.4978 12.8782 11.5022 12.8782 10.7851 12.3298L2.88386 6.28768L2.03783 5.61086Z" fill="#808080" />
                    <path d="M20.6767 4.11739C20.4654 4.04141 20.2375 4 20 4H4C3.77528 4 3.55921 4.03706 3.35758 4.10541L4.11616 4.71227L12 10.7411L19.9 4.69994L20.6767 4.11739Z" fill="#808080" />
                </svg>
                    ofoefrancisteye@gmail.com </p>
            </div>
            <div className="border-t-2 border-gray-400 w-11/12 h-1/4 flex justify-between lg:gap-40 text-gray-500 text-lg">
                <p>@2025 Atobra.dev. All rights reserved. </p>
                <div className="flex gap-10">
                    <p>Term of Services </p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>

            </div>
        </div>
    );
}