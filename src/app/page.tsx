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
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition duration-200" onClick={() => router.push('/domains/healthcare')}>
          <CardHeader>
            <CardTitle><Heart className="mr-2 inline-block h-5 w-5" />Healthcare</CardTitle>
            <CardDescription>AI consulting for the healthcare sector</CardDescription>
          </CardHeader>
          <CardContent>
            Optimize patient care and explore advancements in medical treatments.
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition duration-200" onClick={() => router.push('/domains/finance')}>
          <CardHeader>
            <CardTitle><Currency className="mr-2 inline-block h-5 w-5" />Finance</CardTitle>
            <CardDescription>AI consulting for the finance sector</CardDescription>
          </CardHeader>
          <CardContent>
            Make informed investment decisions and navigate complex financial landscapes.
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition duration-200" onClick={() => router.push('/domains/retail')}>
          <CardHeader>
            <CardTitle><ShoppingCart className="mr-2 inline-block h-5 w-5" />Retail</CardTitle>
            <CardDescription>AI consulting for the retail sector</CardDescription>
          </CardHeader>
          <CardContent>
            Enhance customer experience and streamline retail operations.
          </CardContent>
        </Card>
      </div>

      {/* Our Services Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h3 className="font-semibold">Education</h3>
            <p className="text-muted-foreground">
              We provide AI-driven insights into curriculum development, personalized learning, and student performance analysis.
              <br />
              Future implementations include AI-powered grading systems and automated report generation.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Healthcare</h3>
            <p className="text-muted-foreground">
              Our AI solutions assist in diagnostics, treatment planning, and healthcare management to improve patient outcomes.
              <br />
              Future implementations involve predictive analysis for disease outbreaks and AI-assisted robotic surgery.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Finance</h3>
            <p className="text-muted-foreground">
              We offer AI-powered tools for financial forecasting, risk assessment, and investment strategies to optimize financial performance.
              <br />
              Future implementations include AI-driven fraud detection systems and personalized financial advising.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Retail</h3>
            <p className="text-muted-foreground">
              Our AI services help retailers optimize inventory, personalize customer experiences, and improve supply chain efficiency.
              <br />
              Future implementations include AI-powered inventory management and personalized shopping experiences using AR/VR.
            </p>
          </div>
        </div>
      </section>

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
