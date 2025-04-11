'use client';

import {adaptResponseToNeed} from '@/ai/flows/adapt-response-to-need';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold text-primary text-center mb-4">{domain} Consulting</h1>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Ask me anything about {domain}!</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="prompt">Your Question</Label>
              <Textarea
                id="prompt"
                placeholder={`Enter your question about ${domain} here...`}
                value={query}
                onChange={e => setQuery(e.target.value)}
                rows={3}
                className="w-full rounded-md border shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? 'Generating Response...' : 'Get Advice'}
            </Button>
          </form>
          {response && (
            <div className="mt-4">
              <p className="text-sm text-gray-500">
                {response}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

