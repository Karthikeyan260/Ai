'use client';

import {adaptResponseToNeed} from '@/ai/flows/adapt-response-to-need';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Textarea} from '@/components/ui/textarea';
import {useEffect, useState} from 'react';
import {useToast} from '@/hooks/use-toast';
import {ScrollArea} from '@/components/ui/scroll-area';

const DOMAIN = 'Finance';

async function getResponse(query: string, userNeed: string) {
  const response = await adaptResponseToNeed({
    domain: DOMAIN,
    query: query,
    userNeed: userNeed,
  });
  return response.adaptedResponse;
}

export default function FinancePage() {
  const [query, setQuery] = useState('');
  const [userNeed, setUserNeed] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {toast} = useToast();
  const [chatHistory, setChatHistory] = useState<
    {query: string; response: string}[]
  >([]);

  useEffect(() => {
    if (response) {
      setChatHistory(prev => [...prev, {query, response}]);
      setQuery('');
      setUserNeed('');
    }
  }, [response, query, userNeed]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const botResponse = await getResponse(query, userNeed);
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
      <h1 className="text-4xl font-bold mb-4 text-primary text-center">
        Finance Domain
      </h1>
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Finance Chatbot</CardTitle>
          <CardDescription>
            Get expert guidance in the Finance domain.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] mb-4">
            <div className="flex flex-col space-y-2">
              {chatHistory.map((item, index) => (
                <div key={index} className="space-y-1">
                  <p className="font-medium">
                    You: {item.query} (Need: {userNeed})
                  </p>
                  <p className="text-sm text-muted-foreground">
                    DomainSage: {item.response}
                  </p>
                </div>
              ))}
            </div>
          </ScrollArea>
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
            <div className="grid gap-2">
              <Label htmlFor="userNeed">What do you need from the bot?</Label>
              <Input
                type="text"
                id="userNeed"
                placeholder="Describe what you need"
                value={userNeed}
                onChange={e => setUserNeed(e.target.value)}
              />
            </div>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Generating...' : 'Generate Response'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
