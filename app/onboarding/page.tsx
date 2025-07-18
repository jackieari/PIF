'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import type React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera, ArrowRight, Check, User, Wallet } from 'lucide-react';

function OnboardingContent() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    avatar: '',
  });
  const [walletAddress, setWalletAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const addr = searchParams.get('address');
    if (addr) setWalletAddress(addr);
    else router.push('/auth');
  }, [searchParams, router]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.firstName.trim()) e.firstName = 'First name is required';
    if (!formData.lastName.trim()) e.lastName = 'Last name is required';

    if (!formData.username.trim()) e.username = 'Username is required';
    else if (formData.username.length < 3) e.username = 'Username must be at least 3 characters';
    else if (!/^[a-zA-Z0-9_]+$/.test(formData.username))
      e.username = 'Username can only contain letters, numbers, and underscores';

    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = 'Please enter a valid email address';

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    setErrors('');
  
    try {
      const walletAddress = searchParams.get('address');
      
      const response = await fetch('/api/create-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          walletAddress,
          username: formData.username,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || 'Failed to create user');
      }
  
      // Success! Redirect to dashboard
      router.push('/dashboard');
    } catch (error) {
      setErrors(errors.message || 'Failed to create account. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFormData((p) => ({ ...p, avatar: url }));
    }
  };
  const initials = (u: string) => u.slice(0, 2).toUpperCase();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50 flex items-center justify-center p-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-100 w-[900px] h-[900px] bg-emerald-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-100 w-[800px] h-[800px] bg-emerald-200/15 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-lg relative z-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="font-bold text-2xl text-gray-900">PIF Token</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Profile</h1>
          <p className="text-gray-600">Tell us a bit about yourself to get started</p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-emerald-600">Wallet Connected</span>
          </div>
          <div className="w-8 h-px bg-gray-300" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-emerald-600">Profile Setup</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="wallet" className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Wallet className="w-4 h-4" /> Wallet Address
              </Label>
              <Input id="wallet" value={walletAddress} readOnly className="bg-gray-50 text-gray-600 cursor-not-allowed" />
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-700 mb-4 block">Profile Picture</Label>
              <div className="flex items-center gap-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src={formData.avatar || '/placeholder.svg'} />
                  <AvatarFallback className="bg-emerald-100 text-emerald-600 text-lg font-semibold">
                    {formData.username ? initials(formData.username) : <User className="w-8 h-8" />}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <input type="file" id="avatar-upload" accept="image/*" onChange={handleAvatarUpload} className="hidden" />
                  <Button type="button" variant="outline" onClick={() => document.getElementById('avatar-upload')?.click()} className="mb-2">
                    <Camera className="w-4 h-4 mr-2" /> Upload Photo
                  </Button>
                  <p className="text-xs text-gray-500">Optional. JPG / PNG up to 5 MB</p>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="username" className="text-sm font-medium text-gray-700 mb-2 block">
                Username <span className="text-red-500">*</span>
              </Label>
              <Input
                id="username"
                value={formData.username}
                onChange={(e) => setFormData((p) => ({ ...p, username: e.target.value }))}
                placeholder="Enter your username"
                className={errors.username ? 'border-red-300 focus:border-red-500' : ''}
              />
              {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
            </div>

            <div>
              <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2 block">
                First Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData((p) => ({ ...p, firstName: e.target.value }))}
                placeholder="Enter your first name"
                className={errors.firstName ? 'border-red-300 focus:border-red-500' : ''}
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>

            <div>
              <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2 block">
                Last Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData((p) => ({ ...p, lastName: e.target.value }))}
                placeholder="Enter your last name"
                className={errors.lastName ? 'border-red-300 focus:border-red-500' : ''}
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                placeholder="Enter your email address"
                className={errors.email ? 'border-red-300 focus:border-red-500' : ''}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              <p className="text-xs text-gray-500 mt-1">We'll use this for important updates and voting notifications</p>
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg font-medium">
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3" /> Creating Profile…
                </>
              ) : (
                <>
                  Complete Setup <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </form>
        </div>

        <div className="text-center mt-6 text-sm text-gray-500">You can update your profile anytime in settings</div>
      </div>
    </div>
  );
}

export default function OnboardingPage() {
  return (
    <Suspense fallback={<div className="p-6 text-center text-gray-500">Loading onboarding...</div>}>
      <OnboardingContent />
    </Suspense>
  );
}
