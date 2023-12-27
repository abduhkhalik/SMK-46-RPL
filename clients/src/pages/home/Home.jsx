import { CarouselTransition } from "../../components/Carousel";
import { ChartKelas, ChartsSiswa } from "../../components/Charts";
import { DefaultSidebar } from "../../components/Sidebar";

function Home() {
  return (
    <>
      <DefaultSidebar />
      <main className="content">
        <div className="container">
          <div className="w-auto">
            <CarouselTransition />
          </div>
          <div className="w-full py-5 flex justify-center items-center">
            <div className="w-full flex gap-5">
              <div className="bg-slate-200 w-full shadow-lg">
                <div className="w-full px-4 py-2">
                  <p className="">Jumlah Siswa Perempuan</p>
                  <p className="w-full text-center">1000</p>
                </div>
              </div>
              <div className="bg-slate-200 w-full shadow-lg">
                <div className="w-full px-4 py-2">
                  <p className="">Jumlah Siswa Laki-Laki</p>
                  <p className="w-full text-center">1000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-center items-center">
            <div className="w-full lg:w-1/2">
              <ChartsSiswa />
            </div>
            <div className="w-full lg:w-1/2">
              <ChartKelas />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
