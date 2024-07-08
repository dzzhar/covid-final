import SituationSection from "../components/SituationSection/SituationSection";
import Hero from "../components/Hero/Hero";
import ENDPOINTS from "../utils/constants/endpoints";
import RegionSection from "../components/RegionSection/RegionSection";

function HomePage() {
  return (
    <div>
      <Hero />
      <SituationSection
        url={ENDPOINTS.GLOBAL}
        title="Global Situation"
        caption="Covid Data by Global"
      />
      <RegionSection />
    </div>
  );
}

export default HomePage;
