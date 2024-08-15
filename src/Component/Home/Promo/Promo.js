import { Link } from "react-router-dom";
export default function Promo() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Home styles are finally here
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new summer collection will shelter you from the
              harsh elements of a world that doesn't care if you live or die.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-48 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://tse2.mm.bing.net/th?id=OIP.BD796UYvjIZQ55TirCVesgAAAA&pid=Api&P=0&h=180"
                          alt=""
                          className="h-full w-full object-fit object-center"
                        />
                      </div>
                      <div className="h-64 w-48 overflow-hidden rounded-lg">
                        <img
                          src="https://tse1.mm.bing.net/th?id=OIP.y2Lb8nV_7izuQUl0l919uQHaHa&pid=Api&P=0&h=180"
                          alt=""
                          className="h-full w-full object-fit object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-59 w-48 overflow-hidden rounded-lg">
                        <img
                          src="https://tse1.mm.bing.net/th?id=OIP.HhK0vVX50OCotO8EAx1hpgHaHa&pid=Api&P=0&h=180"
                          alt=""
                          className="h-full w-full object-fit object-center"
                        />
                      </div>
                      <div className="h-64 w-48 overflow-hidden rounded-lg">
                        <img
                          src="https://tse3.mm.bing.net/th?id=OIP.cx3J_JuolqBz27BBuSv1gAHaHa&pid=Api&P=0&h=180"
                          alt=""
                          className="h-full w-full object-fit object-center"
                        />
                      </div>
                      <div className="h-59 w-48 overflow-hidden rounded-lg">
                        <img
                          src="https://tse3.mm.bing.net/th?id=OIP.VDH_38amyHRsqyo6KnUvTAHaE6&pid=Api&P=0&h=180"
                          alt=""
                          className="h-full w-full object-fit object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tse3.mm.bing.net/th?id=OIP.NaQEIY50v78ZrpphJJzaowHaKr&pid=Api&P=0&h=180"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-48 overflow-hidden rounded-lg">
                        <img
                          src="https://tse4.mm.bing.net/th?id=OIP.CXy04WLK2Nj-ApcIzfE77QHaHB&pid=Api&P=0&h=180"
                          alt=""
                          className="h-full w-full object-fit object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link to={`/product`}
                className="inline-block rounded-md border border-transparent bg-brown-600 px-8 py-3 text-center font-medium text-black hover:bg-orange-400 hover:text-white"
              >
                Shop Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
