import Header from "@/components/Stake/Header";
import StakingTabsContainer from "@/components/Stake/TabsContainer";

export default function StakePage() {
  return (
    <div className="w-full mx-auto flex flex-col gap-8">
      <Header />
      <StakingTabsContainer />
    </div>
  );
}
