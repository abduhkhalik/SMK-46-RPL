import { FormLogin } from "../../components/Forms";

export default function Login() {
  return (
    <div className="h-screen w-full max-w-full">
      <div className="container">
        <div className="w-full py-16 flex justify-center items-center">
          <div className="bg-transparent w-[500px] px-4 py-2 outline outline-1 outline-offset-2 backdrop-blur-md shadow-xl rounded-lg">
            <div className="flex items-center justify-center">
              <FormLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
