"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wallet, UserPlus } from "lucide-react";

export default function AuthPage() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Profile created!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9FAFB] p-6">
      {!isWalletConnected ? (
        <div className="text-center">
          <Wallet className="w-12 h-12 text-emerald-600 mb-4" />
          <h1 className="text-3xl font-bold mb-2">Connect Your Wallet</h1>
          <p className="text-gray-600 mb-6">Connect your wallet to start onboarding.</p>
          <Button
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 text-lg font-medium"
            onClick={() => setIsWalletConnected(true)}
          >
            <Wallet className="w-5 h-5 mr-2" />
            Connect Wallet
          </Button>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="text-center mb-6">
            <UserPlus className="w-10 h-10 text-emerald-600 mb-2" />
            <h2 className="text-2xl font-bold">Complete Your Profile</h2>
            <p className="text-gray-600">Fill in your details to finish onboarding.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <label htmlFor="username" className="block font-medium text-gray-700">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />

            <label htmlFor="firstName" className="block font-medium text-gray-700">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />

            <label htmlFor="lastName" className="block font-medium text-gray-700">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />

            <label htmlFor="email" className="block font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />

            <Button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 text-lg font-medium"
            >
              Finish Signup
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}

