import { FormDaftar } from "../../components/Forms";

export default function Daftar() {
  return (
    <div className="h-screen w-full max-w-full">
      <div className="container">
        <div className="w-full py-12 px-16 flex justify-center items-center">
          <div className="bg-transparent lg:w-[700px] w-auto px-4 py-2 outline outline-1 outline-offset-2 backdrop-blur-md shadow-xl rounded-lg">
            <div className="w-full flex items-center justify-center px-4">
              <FormDaftar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
