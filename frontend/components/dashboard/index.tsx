import DashboardContent from "./DashboardContent";
import NewPost from "./NewPost";

const Dashboard = () => {
  return (
    <div className="mx-auto">
      <div className="my-4">
        <NewPost />
      </div>
      <DashboardContent />
    </div>
  );
};

export default Dashboard;
