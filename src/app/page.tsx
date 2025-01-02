import { FeatureFlexiblePlugins, FeatureHMR, FeatureInstantServerStart, FeatureOptimizedBuild, FeatureRichFeatures, FeatureSection, FeatureSSRSupport, FeatureTypedAPI, HeroSection } from "@/components";


export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection title="Redefining developer experience" type="blue" description="Vite makes web development simple again">
        <FeatureInstantServerStart />
        <FeatureHMR />
        <FeatureRichFeatures />
        <FeatureOptimizedBuild />
      </FeatureSection>
      <FeatureSection title="A shared foundation to build upon" type="pink" className="feature-section--flip">
        <FeatureFlexiblePlugins />
        <FeatureTypedAPI />
        <FeatureSSRSupport />
      </FeatureSection>
    </>
  );
}
