'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function PartnerApplyPage() {
  const [form, setForm] = useState({
    orgName: "",
    email: "",
    mission: "",
    proposal: "",
    website: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    const e: any = {};
    if (!form.orgName.trim()) e.orgName = "Organization name is required.";
    if (!form.email.trim()) e.email = "Contact email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email address.";
    if (!form.mission.trim()) e.mission = "Mission statement is required.";
    if (!form.proposal.trim()) e.proposal = "Proposal details are required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto py-24 text-center">
        <h2 className="text-2xl font-bold mb-4 text-emerald-700">Thank you for your proposal!</h2>
        <p className="text-gray-700">Our team will review your submission and contact you soon.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto py-24">
      <h1 className="text-3xl font-bold mb-8 text-emerald-900">Partner Proposal Submission</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow">
        <div>
          <Label htmlFor="orgName">Organization Name</Label>
          <Input id="orgName" name="orgName" value={form.orgName} onChange={handleChange} required />
          {errors.orgName && <p className="text-red-500 text-sm mt-1">{errors.orgName}</p>}
        </div>
        <div>
          <Label htmlFor="email">Contact Email</Label>
          <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <Label htmlFor="website">Website (optional)</Label>
          <Input id="website" name="website" value={form.website} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="mission">Mission Statement</Label>
          <Textarea id="mission" name="mission" value={form.mission} onChange={handleChange} required rows={3} />
          {errors.mission && <p className="text-red-500 text-sm mt-1">{errors.mission}</p>}
        </div>
        <div>
          <Label htmlFor="proposal">Proposal Details</Label>
          <Textarea id="proposal" name="proposal" value={form.proposal} onChange={handleChange} required rows={5} />
          {errors.proposal && <p className="text-red-500 text-sm mt-1">{errors.proposal}</p>}
        </div>
        <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg font-medium">Submit Proposal</Button>
      </form>
    </div>
  );
} 