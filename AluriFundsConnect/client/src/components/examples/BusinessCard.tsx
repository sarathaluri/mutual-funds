import BusinessCard from "../BusinessCard";

export default function BusinessCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <BusinessCard variant="modern" />
      <BusinessCard variant="classic" />
      <BusinessCard variant="minimal" />
    </div>
  );
}