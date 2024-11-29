import { useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

function HoneyMint() {
  const [mintAmount, setMintAmount] = useState(1);
  const maxMint = 500;
  const currentMinted = 172;
  const price = 500;

  const decrementMint = () => {
    if (mintAmount > 1) {
      setMintAmount((prev) => prev - 1);
    }
  };

  const incrementMint = () => {
    if (mintAmount < maxMint - currentMinted) {
      setMintAmount((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFA8]">
      <Header />

      <main className="flex-grow flex gap-4 py-16 xl:py-10 flex-col items-center justify-center px-4">
        <img src="/HoneyMint.svg" alt="bee" />

        <div className="flex flex-col lg:items-center lg:flex-row gap-8 w-full max-w-5xl">
          {/* Mint Card */}
          <div className="basis-full lg:basis-1/2">
            <div className="bg-[#FFFD02]  flex flex-col gap-4 items-center justify-center p-6 rounded-3xl shadow-lg">
              <h2 className="text-3xl text-black lg:text-4xl xl:text-5xl font-normal mb-4">
                Honey Mint
              </h2>

              <p className="text-xl text-black mb-6">Price: {price} XLD</p>

              <div className="flex w-full items-center gap-4 mb-6">
                <span className="text-lg">Mint</span>
                <div className="flex-1 flex items-center">
                  <button
                    onClick={decrementMint}
                    className="w-10 h-10 flex items-center justify-center rounded-md border-2 border-[#5C3C24] text-[#5C3C24] hover:bg-[#5C3C24] hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>

                  <div className="flex-1 text-center bg-[#5C3C24] text-white py-2 px-4 mx-2 rounded-md">
                    {mintAmount}
                  </div>

                  <button
                    onClick={incrementMint}
                    className="w-10 h-10 flex items-center justify-center rounded-md border-2 border-[#5C3C24] text-[#5C3C24] hover:bg-[#5C3C24] hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mb-4 w-full">
                <p className="text-center mb-2 lg:mb-2.5">
                  Total Minted:{" "}
                  <b>
                    {currentMinted}/{maxMint}
                  </b>
                </p>
                <div className="w-full bg-white rounded-full h-4">
                  <div
                    className="bg-[#5C3C24] border border-white h-4 rounded-full transition-all"
                    style={{ width: `${(currentMinted / maxMint) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Preview Card */}
          <div className="bg-[#FFA42C] basis-full lg:basis-1/2 p-4 rounded-3xl border-8 lg:border-[20px] border-[#5F3804]">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <img
                src="/BeeBig.svg"
                alt="Honey NFT Preview"
                className="w-full max-w-[400px] h-full object-contain"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default HoneyMint;
