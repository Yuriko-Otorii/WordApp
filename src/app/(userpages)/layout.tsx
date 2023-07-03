import BottomNavigation from "../components/Navigations/BottomNavigation";
import SideNavigation from "../components/Navigations/SideNavigation";

function UserPagelayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      {children}
      <div className="md:hidden">
        <BottomNavigation />
      </div>
      <div className="sm:hidden md:block">
        <SideNavigation />
      </div>
    </main>
  );
};

export default UserPagelayout;
