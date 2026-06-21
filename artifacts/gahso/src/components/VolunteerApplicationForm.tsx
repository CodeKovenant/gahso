import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useContactForm, ContactFormData } from "@/hooks/useContactForm";

const initialFormState: ContactFormData = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export function VolunteerApplicationForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormState);
  
  const { submitForm, isSubmitting, errors, clearErrors } = useContactForm({
    source: "volunteer_application",
    onSuccess: () => setFormData(initialFormState),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      clearErrors();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="card-elevated p-8 space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="vol-first-name" className="block text-sm font-medium text-foreground mb-2">
            First Name *
          </label>
          <input
            type="text"
            id="vol-first-name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
              errors.first_name ? "border-destructive" : "border-input"
            }`}
            placeholder="John"
          />
          {errors.first_name && (
            <p className="text-destructive text-sm mt-1">{errors.first_name}</p>
          )}
        </div>
        <div>
          <label htmlFor="vol-last-name" className="block text-sm font-medium text-foreground mb-2">
            Last Name *
          </label>
          <input
            type="text"
            id="vol-last-name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
              errors.last_name ? "border-destructive" : "border-input"
            }`}
            placeholder="Doe"
          />
          {errors.last_name && (
            <p className="text-destructive text-sm mt-1">{errors.last_name}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="vol-email" className="block text-sm font-medium text-foreground mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="vol-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={`w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
            errors.email ? "border-destructive" : "border-input"
          }`}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="text-destructive text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="vol-phone" className="block text-sm font-medium text-foreground mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="vol-phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
            errors.phone ? "border-destructive" : "border-input"
          }`}
          placeholder="+254 700 000 000"
        />
        {errors.phone && (
          <p className="text-destructive text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      <div>
        <label htmlFor="vol-subject" className="block text-sm font-medium text-foreground mb-2">
          Area of Interest *
        </label>
        <select
          id="vol-subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className={`w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
            errors.subject ? "border-destructive" : "border-input"
          }`}
        >
          <option value="">Select an option</option>
          <option value="Program Facilitator">Program Facilitator</option>
          <option value="Mentorship Coach">Mentorship Coach</option>
          <option value="Community Outreach">Community Outreach</option>
          <option value="Administrative Support">Administrative Support</option>
          <option value="Other">Other</option>
        </select>
        {errors.subject && (
          <p className="text-destructive text-sm mt-1">{errors.subject}</p>
        )}
      </div>

      <div>
        <label htmlFor="vol-message" className="block text-sm font-medium text-foreground mb-2">
          Tell us about yourself *
        </label>
        <textarea
          id="vol-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className={`w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none ${
            errors.message ? "border-destructive" : "border-input"
          }`}
          placeholder="Share your skills, experience, and why you want to volunteer with GAHSO..."
        />
        {errors.message && (
          <p className="text-destructive text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Application"
        )}
      </Button>
    </form>
  );
}
