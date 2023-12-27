import { DefaultSidebar } from "../../components/Sidebar";
import { DefaultStepper } from "../../components/SteperFrom";

function Forms() {
  return (
    <>
      <DefaultSidebar />
      <section className="content">
        <div className="container">
          <div className="w-full flex flex-wrap">
            <div className="w-full flex justify-center items-center">
              <DefaultStepper />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Forms;
