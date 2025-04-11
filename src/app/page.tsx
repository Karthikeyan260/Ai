'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {useRouter} from 'next/navigation';
import {School} from 'lucide-react';
import {Heart} from 'lucide-react';
import {Currency} from 'lucide-react';
import {ShoppingCart} from 'lucide-react';

export default function Home() {
  const router = useRouter();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-primary text-center">
        Welcome to DomainSage
      </h1>
      <p className="text-lg mb-8 text-muted-foreground text-center">
        Your AI-powered expert consulting system
      </p>
      <div className="flex justify-center space-x-4 mb-8">
        <Button onClick={() => router.push('/sign-in')}>Sign In</Button>
        <Button variant="secondary" onClick={() => router.push('/sign-up')}>
          Sign Up
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="cursor-pointer" onClick={() => router.push('/domains/education')}>
          <CardHeader>
            <CardTitle><School className="mr-2 inline-block h-5 w-5" />Education</CardTitle>
            <CardDescription>AI consulting for the education sector</CardDescription>
          </CardHeader>
          <CardContent>
            Get advice on teaching, learning, and educational administration.
          </CardContent>
        </Card>

        <Card className="cursor-pointer" onClick={() => router.push('/domains/healthcare')}>
          <CardHeader>
            <CardTitle><Heart className="mr-2 inline-block h-5 w-5" />Healthcare</CardTitle>
            <CardDescription>AI consulting for the healthcare sector</CardDescription>
          </CardHeader>
          <CardContent>
            Get advice on patient care, medical research, and healthcare management.
          </CardContent>
        </Card>

        <Card className="cursor-pointer" onClick={() => router.push('/domains/finance')}>
          <CardHeader>
            <CardTitle><Currency className="mr-2 inline-block h-5 w-5" />Finance</CardTitle>
            <CardDescription>AI consulting for the finance sector</CardDescription>
          </CardHeader>
          <CardContent>
            Get advice on investment, banking, and financial planning.
          </CardContent>
        </Card>

        <Card className="cursor-pointer" onClick={() => router.push('/domains/retail')}>
          <CardHeader>
            <CardTitle><ShoppingCart className="mr-2 inline-block h-5 w-5" />Retail</CardTitle>
            <CardDescription>AI consulting for the retail sector</CardDescription>
          </CardHeader>
          <CardContent>
            Get advice on sales, marketing, and customer service.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

