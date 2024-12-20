import HomeLogo from "./home-logo";
import NavLinks from "./nav-links";

export const SideNavComponent = () => {
  return (
    <div className="bg-black/50 h-screen">
      <div className="flex items-center justify-center mt-8">
        <HomeLogo />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <NavLinks />
      </div>
    </div>
  );
};
