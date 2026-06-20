export interface ContactFormBody {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string | null;
  subject: string;
  message: string;
  source?: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(
  data: Record<string, unknown>
): ValidationResult {
  const errors: string[] = [];

  // first_name
  if (
    !data.first_name ||
    typeof data.first_name !== "string" ||
    data.first_name.trim().length === 0
  ) {
    errors.push("First name is required");
  } else if (data.first_name.length > 100) {
    errors.push("First name must be less than 100 characters");
  }

  // last_name
  if (
    !data.last_name ||
    typeof data.last_name !== "string" ||
    data.last_name.trim().length === 0
  ) {
    errors.push("Last name is required");
  } else if (data.last_name.length > 100) {
    errors.push("Last name must be less than 100 characters");
  }

  // email
  if (
    !data.email ||
    typeof data.email !== "string" ||
    data.email.trim().length === 0
  ) {
    errors.push("Email is required");
  } else if (data.email.length > 255) {
    errors.push("Email must be less than 255 characters");
  } else if (!EMAIL_REGEX.test(data.email.trim())) {
    errors.push("Please enter a valid email address");
  }

  // subject
  if (
    !data.subject ||
    typeof data.subject !== "string" ||
    data.subject.trim().length === 0
  ) {
    errors.push("Subject is required");
  } else if (data.subject.length > 200) {
    errors.push("Subject must be less than 200 characters");
  }

  // message
  if (
    !data.message ||
    typeof data.message !== "string" ||
    data.message.trim().length === 0
  ) {
    errors.push("Message is required");
  } else if (data.message.length > 5000) {
    errors.push("Message must be less than 5000 characters");
  }

  // phone (optional)
  if (
    data.phone &&
    typeof data.phone === "string" &&
    data.phone.length > 50
  ) {
    errors.push("Phone must be less than 50 characters");
  }

  // source (optional)
  if (
    data.source &&
    typeof data.source === "string" &&
    data.source.length > 100
  ) {
    errors.push("Source must be less than 100 characters");
  }

  return { valid: errors.length === 0, errors };
}
