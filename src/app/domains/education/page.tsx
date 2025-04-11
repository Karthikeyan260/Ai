'use client';

import Chatbot from '@/components/chatbot';
import EducationImage from '@/public/education.png';

const DOMAIN = 'Education';

export default function EducationPage() {
  return <Chatbot domain={DOMAIN} domainImage={EducationImage} />;
}
