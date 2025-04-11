'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {useRouter} from 'next/navigation';
import {LucideIcon, GraduationCap, Heart, IndianRupee, ShoppingBag} from 'lucide-react';

interface Domain {
  name: string;
  description: string;
  icon: LucideIcon;
  route: string;
}

const domains: Domain[] = [
  {
    name: 'Education',
    description: 'Expert guidance in the education sector.',
    icon: GraduationCap,
    route: '/domains/education',
  },
  {
    name: 'Healthcare',
    description: 'Intelligent advice for healthcare professionals.',
    icon: Heart,
    route: '/domains/healthcare',
  },
  {
    name: 'Finance',
    description: 'Financial consulting at your fingertips.',
    icon: IndianRupee,
    route: '/domains/finance',
  },
  {
    name: 'Retail',
    description: 'Strategic insights for the retail industry.',
    icon: ShoppingBag,
    route: '/domains/retail',
  },
];

export default function DomainSelectionPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-background">
      <h1 className="text-4xl font-bold mb-8 text-primary">
        Select a Domain
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {domains.map((domain) => (
          <Card key={domain.name} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <domain.icon className="h-5 w-5 text-secondary" />
                <span>{domain.name}</span>
              </CardTitle>
              <CardDescription>{domain.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => router.push(domain.route)} className="w-full">
                Explore {domain.name}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
