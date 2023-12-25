import { FormSiswa } from "../../components/Forms";
import { DefaultSidebar } from "../../components/Sidebar";

function Forms() {
  return (
    <>
      <DefaultSidebar />
      <section className="content">
        <div className="container">
          <div className="w-full flex flex-wrap">
            <div className="w-full flex justify-center items-center">
              <FormSiswa />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Forms;
