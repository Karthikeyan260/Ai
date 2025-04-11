'use client';

import Chatbot from '@/components/chatbot';
import HealthcareImage from '@/public/healthcare.png';

const DOMAIN = 'Healthcare';

export default function HealthcarePage() {
  return <Chatbot domain={DOMAIN} domainImage={HealthcareImage} />;
}
