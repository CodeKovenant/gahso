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

export function MloFlowContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormState);
  
  const { submitForm, isSubmitting, errors, clearErrors } = useContactForm({
    source: "mloflow",
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
    <div className="bg-muted rounded-2xl p-6 md:p-8">
      <h3 className="text-xl font-serif font-bold text-foreground mb-6">
        Send us a message
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="mlo-first-name" className="block text-sm font-medium text-foreground mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="mlo-first-name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.first_name ? "border-destructive" : "border-border"
              }`}
              placeholder="Enter your first name"
            />
            {errors.first_name && (
              <p className="text-destructive text-sm mt-1">{errors.first_name}</p>
            )}
          </div>
          <div>
            <label htmlFor="mlo-last-name" className="block text-sm font-medium text-foreground mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="mlo-last-name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.last_name ? "border-destructive" : "border-border"
              }`}
              placeholder="Enter your last name"
            />
            {errors.last_name && (
              <p className="text-destructive text-sm mt-1">{errors.last_name}</p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="mlo-email" className="block text-sm font-medium text-foreground mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="mlo-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.email ? "border-destructive" : "border-border"
            }`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-destructive text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="mlo-service" className="block text-sm font-medium text-foreground mb-2">
            Service Interested In *
          </label>
          <select
            id="mlo-service"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.subject ? "border-destructive" : "border-border"
            }`}
          >
            <option value="">Select a service</option>
            <option value="Catering Services">Catering Services</option>
            <option value="Hire a Chef">Hire a Chef</option>
            <option value="Partnership">Partnership</option>
            <option value="Training Program">Training Program</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
          {errors.subject && (
            <p className="text-destructive text-sm mt-1">{errors.subject}</p>
          )}
        </div>
        <div>
          <label htmlFor="mlo-message" className="block text-sm font-medium text-foreground mb-2">
            Message *
          </label>
          <textarea
            id="mlo-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
              errors.message ? "border-destructive" : "border-border"
            }`}
            placeholder="Tell us about your event or inquiry..."
          />
          {errors.message && (
            <p className="text-destructive text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </div>
  );
}
