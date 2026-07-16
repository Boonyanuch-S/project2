import { ReactNode } from "react";

interface Props {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
}: Props) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>

        <h2 className="text-3xl font-bold mt-2">
          {value}
        </h2>

        <p className="text-green-600 text-sm mt-2">
          {subtitle}
        </p>
      </div>

      <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
    {icon}
</div>
      
    </div>
    
  );
}