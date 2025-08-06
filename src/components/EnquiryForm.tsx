import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

export default function EnquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const tempErrors: Errors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    return tempErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      console.log('Form submitted:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-6 bg-white space-y-5 rounded shadow mb-20">
      {[
        { label: 'Name', name: 'name' },
        { label: 'Email', name: 'email' },
        { label: 'Phone (optional)', name: 'phone' },
      ].map(({ label, name }) => (
        <div key={name}>
          <label htmlFor={name} className="block text-cyan-800 font-semibold">{label}</label>
          <input
            name={name}
            value={(formData as any)[name]}
            onChange={handleChange}
            className="w-full border border-cyan-800 p-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-800"
          />
          {(errors as any)[name] && <p className="text-red-600 text-sm">{(errors as any)[name]}</p>}
        </div>
      ))}

      <div>
        <label htmlFor="message" className="block text-cyan-800 font-semibold">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full border border-cyan-800 p-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-800"
        />
        {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
      </div>

      <button type="submit" className="bg-cyan-800 text-white px-4 py-2 rounded hover:bg-cyan-700 transition">
        Send Enquiry
      </button>

      {submitted && (
        <p className="text-green-700 mt-4 text-center font-medium">
          Thanks for reaching out! We'll be in touch soon.
        </p>
      )}
    </form>
  );
}