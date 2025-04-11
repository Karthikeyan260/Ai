'use client';

import Chatbot from '@/components/chatbot';
import RetailImage from '@/public/retail.png';

const DOMAIN = 'Retail';

export default function RetailPage() {
  return <Chatbot domain={DOMAIN} domainImage={RetailImage} />;
}
