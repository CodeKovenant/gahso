import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// Validation schema
const contactFormSchema = z.object({
  first_name: z.string().trim().min(1, "First name is required").max(100, "First name must be less than 100 characters"),
  last_name: z.string().trim().min(1, "Last name is required").max(100, "Last name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(50, "Phone must be less than 50 characters").optional().or(z.literal("")),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(1, "Message is required").max(5000, "Message must be less than 5000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

interface UseContactFormOptions {
  source?: string;
  onSuccess?: () => void;
}

export function useContactForm(options: UseContactFormOptions = {}) {
  const { source = "contact_page", onSuccess } = options;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const { toast } = useToast();

  const validateForm = (data: ContactFormData): boolean => {
    const result = contactFormSchema.safeParse(data);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      return false;
    }
    
    setErrors({});
    return true;
  };

  const submitForm = async (data: ContactFormData): Promise<boolean> => {
    if (!validateForm(data)) {
      toast({
        title: "Validation Error",
        description: "Please check the form for errors and try again.",
        variant: "destructive",
      });
      return false;
    }

    setIsSubmitting(true);

    const apiUrl = import.meta.env.VITE_API_URL ?? "";

    try {
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: data.first_name.trim(),
          last_name: data.last_name.trim(),
          email: data.email.trim(),
          phone: data.phone?.trim() || null,
          subject: data.subject.trim(),
          message: data.message.trim(),
          source,
        }),
      });

      const response = await res.json().catch(() => ({}));

      if (!res.ok) {
        console.error("Contact form submission error:", response);

        // Handle rate limiting (429)
        if (res.status === 429 && response?.retryAfter) {
          const minutes = Math.ceil(response.retryAfter / 60);
          toast({
            title: "Too Many Submissions",
            description: `Please wait ${minutes} minute${minutes > 1 ? "s" : ""} before submitting again.`,
            variant: "destructive",
          });
          return false;
        }

        toast({
          title: "Submission Failed",
          description: response?.error ?? "There was an error sending your message. Please try again.",
          variant: "destructive",
        });
        return false;
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });

      onSuccess?.();
      return true;
    } catch (err) {
      console.error("Contact form error:", err);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearErrors = () => setErrors({});

  return {
    submitForm,
    isSubmitting,
    errors,
    clearErrors,
  };
}
