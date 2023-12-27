import { DataUsers } from "../../components/Forms";
import { DefaultSidebar } from "../../components/Sidebar";
import { Users } from "../../users";

function UsersId() {
  return (
    <>
      <DefaultSidebar />
      <section className="content">
        <div className="container">
          <div className="w-full flex flex-wrap">
            <div className="w-full flex justify-center items-center">
              <DataUsers data={Users} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UsersId;
