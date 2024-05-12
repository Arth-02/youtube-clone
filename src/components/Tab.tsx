import React from "react";

interface TabProps {
  title: string;
  selected?: boolean;
}

const Tab: React.FC<TabProps> = ({ title , selected }) => {
  return (
    <div className={`text-base font-medium min-w-max h-fit px-2.5 py-1.5 rounded-lg cursor-pointer ${selected ? 'bg-chipselection text-chipselection-foreground' : 'bg-hover text-foreground hover:bg-hoveractive'}`}>
      {title}
    </div>
  );
};

export default Tab;
