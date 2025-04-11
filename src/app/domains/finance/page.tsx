'use client';

import Chatbot from '@/components/chatbot';
import FinanceImage from '@/public/finance.png';

const DOMAIN = 'Finance';

export default function FinancePage() {
  return <Chatbot domain={DOMAIN} domainImage={FinanceImage} />;
}
