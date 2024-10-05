export type TransactionInfoProp = {
  time: Date;
  address1: string;
  address2: string;
};

const calculateRelativeTime = (date: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const diffInDays = Math.floor(diffInSeconds / 86400);

  if (diffInDays === 0) {
    const diffInHours = Math.floor(diffInSeconds / 3600);

    if (diffInHours === 0) {
      const diffInMinutes = Math.floor(diffInSeconds / 60);

      if (diffInMinutes === 0) {
        return "just now";
      }

      return `${diffInMinutes} minute${diffInMinutes !== 1 ? "s" : ""} ago`;
    }

    return `${diffInHours} hour${diffInHours !== 1 ? "s" : ""} ago`;
  }
  if (diffInDays < 30) {
    return `${diffInDays} day${diffInDays !== 1 ? "s" : ""} ago`;
  }
  const diffInMonths = Math.floor(diffInDays / 30);

  return `${diffInMonths} month${diffInMonths !== 1 ? "s" : ""} ago`;
};

const TransactionInfo = ({ time, address1, address2 }: TransactionInfoProp) => {
  const relativeTime = calculateRelativeTime(time);

  return (
    <div className="w-full flex flex-row justify-between py-2 px-4 items-center space-x-4">
      <div className="text-purple-400 text-sm w-24">{relativeTime}</div>
      <div className="flex items-center space-x-2 flex-1">
        <span className="bg-orange-500 text-black text-xs px-2 py-1 rounded-full">
          Action
        </span>
        <span className="text-gray-400 text-xs">{address1}</span>
      </div>
      <div className="flex items-center space-x-2 flex-1">
        <span className="text-gray-400 text-xs">{address2}</span>
      </div>
    </div>
  );
};

const TransactionComponent = () => {
  const transactions = [
    {
      time: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      address1: "0x322...1234",
      address2: "0x322...1234",
    },
    {
      time: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      address1: "0x322...1234",
      address2: "0x322...1234",
    },
    {
      time: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      address1: "0x322...1234",
      address2: "0x322...1234",
    },
    {
      time: new Date(Date.now() - 12 * 60 * 60 * 1000),
      address1: "0x322...1234",
      address2: "0x322...1234",
    },
    {
      time: new Date(Date.now() - 30 * 60 * 1000),
      address1: "0x322...1234",
      address2: "0x322...1234",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-4">
      {transactions.map((transaction, index) => (
        <TransactionInfo key={index} {...transaction} />
      ))}
    </div>
  );
};

export default TransactionComponent;
