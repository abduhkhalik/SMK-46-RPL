import { Lists } from "../../components/List";
import { DefaultSidebar } from "../../components/Sidebar";
import { Users } from "../../users";

function UsersList() {
  return (
    <>
      <DefaultSidebar />
      <section className="content">
        <div className="container">
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-wrap">
              <Lists data={Users} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UsersList;
