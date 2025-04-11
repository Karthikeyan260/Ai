'use client';

import {adaptResponseToNeed} from '@/ai/flows/adapt-response-to-need';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Textarea} from '@/components/ui/textarea';
import {useState} from 'react';
import {useToast} from '@/hooks/use-toast';
import {Label} from "@/components/ui/label";

interface ChatbotProps {
  domain: string;
}

async function getResponse(domain: string, query: string) {
  const response = await adaptResponseToNeed({
    domain: domain,
    query: query,
    userNeed: 'General Consulting', // Default user need
  });
  return response.adaptedResponse;
}

export default function Chatbot({domain}: ChatbotProps) {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {toast} = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const botResponse = await getResponse(domain, query);
      setResponse(botResponse);
      toast({
        title: 'Response Generated',
        description: 'The chatbot has generated a response.',
      });
    } catch (error: any) {
      console.error('Error generating response:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message || 'Failed to generate response.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4 text-primary text-center">
          {domain} Domain
        </h1>
        <Card className="w-full max-w-3xl mx-auto shadow-md">
          <CardHeader>
            <CardTitle>{domain} Chatbot</CardTitle>
            <CardDescription>
              Get expert guidance in the {domain} domain.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              {response && (
                <div>
                  <p className="font-medium">You: {query}</p>
                  <p className="text-sm text-muted-foreground">
                    DomainSage: {response}
                  </p>
                </div>
              )}
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="query">Your Query</Label>
                <Textarea
                  id="query"
                  placeholder="Enter your query here"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
              </div>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Generate Response' : 'Generate Response'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

