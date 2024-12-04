import React from 'react';
import { Accountant } from '../../types';
import AccountantCard from '../AccountantCard';

interface AccountantResultsProps {
  accountants: Accountant[];
  query: string;
}

export default function AccountantResults({ accountants, query }: AccountantResultsProps) {
  if (accountants.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">
        Commercialisti ({accountants.length})
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {accountants.map((accountant) => (
          <AccountantCard
            key={accountant.id}
            accountant={accountant}
            onSpecializationClick={() => {}}
          />
        ))}
      </div>
    </div>
  );
}