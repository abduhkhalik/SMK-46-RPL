import { Lists } from "../../components/List";
import { DefaultSidebar } from "../../components/Sidebar";

function Users() {
  return (
    <>
      <DefaultSidebar />
      <section className="content">
        <div className="container">
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-wrap">
              <Lists />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Users;
