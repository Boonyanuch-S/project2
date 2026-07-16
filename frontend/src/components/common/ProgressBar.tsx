interface Props {
    value: number;
  }
  
  export default function ProgressBar({ value }: Props) {
    let color = "bg-green-500";
  
    if (value < 50) color = "bg-yellow-500";
    if (value < 20) color = "bg-red-500";
  
    return (
      <div className="w-full">
        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div
            className={`${color} h-2 rounded-full transition-all`}
            style={{ width: `${value}%` }}
          />
        </div>
  
        <div className="text-xs mt-1 text-gray-500">
          {value}%
        </div>
      </div>
    );
  }