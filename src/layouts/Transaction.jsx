import React from 'react';

import ChevronLeft from '@mui/icons-material/ChevronLeft';
import Router from 'next/router';
import Div100vh from 'react-div-100vh';

import TransactionStatus from '@/components/pages/Transaction/Status/TransactionStatus';

const TransactionLayout = props => {
  const { children } = props;
  return (
    <Div100vh className="flex relative flex-col">
      {/* title section */}
      <div className="w-full shadow-md">
        <div className="flex relative justify-center items-center py-4 mx-6 bg-white">
          {/* back button */}
          <button className="absolute left-0 outline-none" onClick={() => Router.back()}>
            <ChevronLeft className="text-info-2" fontSize="large" />
          </button>
          <p className="text-lg font-semibold text-center text-info-1">Rincian Telekonsultasi</p>
        </div>
      </div>
      {/* transaction progress status */}
      <TransactionStatus />
      {/* content section */}
      <div className="overflow-auto flex-1 bg-white hide-scrollbar">{children}</div>
    </Div100vh>
  );
};

export default TransactionLayout;