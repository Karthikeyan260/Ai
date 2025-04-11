'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {useRouter} from 'next/navigation';
import {Section} from 'lucide-react';
import {Heart} from 'lucide-react';
import {Currency} from 'lucide-react';
import {ShoppingCart} from 'lucide-react';
import {useEffect, useState} from 'react';

export default function Home() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="container mx-auto p-4 relative">
      {/* Sign In/Sign Up Buttons in the top right corner */}
      <div className="absolute top-4 right-4 flex space-x-2">
        <Button onClick={() => router.push('/sign-in')}>Sign In</Button>
        <Button variant="secondary" onClick={() => router.push('/sign-up')}>
          Sign Up
        </Button>
      </div>

      {/* Title and Caption */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">
          AI-Driven Consulting
        </h1>
        <p className="text-lg mb-8 text-muted-foreground">
          A Smart Expert System for diverse domains
        </p>
      </div>

      {/* Domain Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="cursor-pointer hover:shadow-md transition duration-200" onClick={() => router.push('/domains/education')}>
          <CardHeader>
            <CardTitle><Section className="mr-2 inline-block h-5 w-5" />Education</CardTitle>
            <CardDescription>AI consulting for the education sector</CardDescription>
          </CardHeader>
          <CardContent>
            Explore innovative teaching methods and effective educational strategies.
            <br />
            <br />
            <b>Our Services:</b> Personalized learning plans, curriculum development, and teacher training programs.
            <br />
            <b>Future Implementations:</b> AI-driven student performance analysis and automated grading systems.
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition duration-200" onClick={() => router.push('/domains/healthcare')}>
          <CardHeader>
            <CardTitle><Heart className="mr-2 inline-block h-5 w-5" />Healthcare</CardTitle>
            <CardDescription>AI consulting for the healthcare sector</CardDescription>
          </CardHeader>
          <CardContent>
            Optimize patient care and explore advancements in medical treatments.
            <br />
            <br />
            <b>Our Services:</b> Diagnostic assistance, treatment recommendations, and healthcare management solutions.
            <br />
            <b>Future Implementations:</b> AI-powered drug discovery and predictive health analytics.
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition duration-200" onClick={() => router.push('/domains/finance')}>
          <CardHeader>
            <CardTitle><Currency className="mr-2 inline-block h-5 w-5" />Finance</CardTitle>
            <CardDescription>AI consulting for the finance sector</CardDescription>
          </CardHeader>
          <CardContent>
            Make informed investment decisions and navigate complex financial landscapes.
            <br />
            <br />
            <b>Our Services:</b> Financial planning, investment strategies, and risk management tools.
            <br />
            <b>Future Implementations:</b> AI-driven fraud detection and automated trading algorithms.
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition duration-200" onClick={() => router.push('/domains/retail')}>
          <CardHeader>
            <CardTitle><ShoppingCart className="mr-2 inline-block h-5 w-5" />Retail</CardTitle>
            <CardDescription>AI consulting for the retail sector</CardDescription>
          </CardHeader>
          <CardContent>
            Enhance customer experience and streamline retail operations.
            <br />
            <br />
            <b>Our Services:</b> Customer behavior analysis, inventory optimization, and personalized marketing strategies.
            <br />
            <b>Future Implementations:</b> AI-powered supply chain management and automated customer service chatbots.
          </CardContent>
        </Card>
      </div>

      {/* Our Services Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Our Services</h2>
        <p className="text-muted-foreground">
          We provide AI-driven expert consulting across diverse domains. Our smart expert system
          helps you make informed decisions, optimize processes, and explore new opportunities
          in Education, Healthcare, Finance, and Retail.
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-12 py-4 text-center text-muted-foreground border-t">
        © {new Date().getFullYear()} DomainSage. All rights reserved.
        <p className="mt-2">
          DomainSage is a cutting-edge platform designed to provide expert consulting services
          powered by artificial intelligence.
        </p>
      </footer>
    </div>
  );
}
