interface Props {
    status: string;
  }
  
  export default function StatusBadge({ status }: Props) {
    const style = {
      online: "bg-green-100 text-green-700",
      warning: "bg-yellow-100 text-yellow-700",
      offline: "bg-red-100 text-red-700",
    };
  
    const text = {
      online: "Online",
      warning: "Warning",
      offline: "Offline",
    };
  
    return (
      <span
        className={`px-3 py-1 rounded-full text-sm font-medium ${
          style[status as keyof typeof style]
        }`}
      >
        {text[status as keyof typeof text]}
      </span>
    );
  }