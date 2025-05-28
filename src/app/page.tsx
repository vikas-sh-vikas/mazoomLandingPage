import Customers from "@/components/UI/Customers/customers";
import Feature from "@/components/UI/Feature/feature";
import HomeBanner from "@/components/UI/Home-Banner/home-beanner";
import Invitation from "@/components/UI/Invitation/invitation";
import Pricing from "@/components/UI/Pricing/pricing";
export default function Home() {
  return (
    <div>
      <HomeBanner />
      <Invitation />
      <Feature />
      <Customers />
      <Pricing />
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
