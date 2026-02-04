import { StatCard } from "./StatsCard";

export function Stats() {
  return (
    <div className="col-span-12 md:col-span-7 row-span-3 grid grid-cols-3 gap-4">
      <StatCard value="40+" label="Hours Saved Through Automation" />
      <StatCard value="5M+" label="Rows Processed Across Analytics Projects" />
      <StatCard value="6+" label="Academic, Personal, and Professional Projects" /> 
      <StatCard value="10+" label="Reports Given To Client" /> 
      <StatCard value="5+" label="Tools Used" /> 
      <StatCard value="100+" label="Datasets Analyzed" /> 
      
    </div>
  );
}
