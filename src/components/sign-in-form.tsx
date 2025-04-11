'use client';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';

export function SignInForm() {
  return (
    <div className="w-full max-w-md">
      <div className="grid gap-2">
        <div className="grid gap-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="example@example.com" type="email" />
        </div>
        <div className="grid gap-1">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <Button>Sign In</Button>
      </div>
    </div>
  );
}
