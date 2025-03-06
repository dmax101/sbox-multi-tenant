import React, { PropsWithChildren } from "react";

const CooperRtpiLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            Relatório Técnico de Produto Isento - RTPI
          </h2>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default CooperRtpiLayout;
