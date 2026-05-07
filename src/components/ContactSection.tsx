// components/ContactSection.tsx
"use client";

import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  MapPin,
  Instagram,
  CheckCircle2,
  AlertCircle,
  Phone,
} from "lucide-react";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) =>
        !val ||
        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(val),
      {
        message: "Please enter a valid phone number",
      },
    ),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, touchedFields },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur", // Real-time validation on blur
  });

  const phoneValue = watch("phone");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.", {
          style: {
            borderRadius: "16px",
            background: "#18181b",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.1)",
          },
        });
        reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.", {
        style: {
          borderRadius: "16px",
          background: "#18181b",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.1)",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="scroll-mt-24">
      <div className="mb-16">
        <h2 className="text-center md:text-left text-3xl md:text-5xl font-bold mb-4">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-center md:text-left text-lg max-w-2xl text-muted-foreground">
          Interested in working together or just want to say hi? My inbox is
          always open.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-8 glass-dark rounded-3xl border border-border space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-4 glass rounded-2xl text-primary group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:afjal742000@gmail.com"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    afjal742000@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-4 glass rounded-2xl text-primary group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+919140764560"
                    className="text-lg font-medium hover:text-primary transition-colors"
                    aria-label="Call +91 9140764560"
                  >
                    +91 9140764560
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-4 glass rounded-2xl text-primary group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-1">
                    Location
                  </p>
                  <p className="text-lg font-medium">Jaipur, India</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-4">
                Social Presence
              </p>
              <div className="flex gap-4">
                {[
                  {
                    icon: <Github className="w-5 h-5" />,
                    href: "https://github.com/md4fjal",
                    label: "GitHub",
                  },
                  {
                    icon: <Linkedin className="w-5 h-5" />,
                    href: "https://www.linkedin.com/in/mohammed-afjal-70698a239",
                    label: "LinkedIn",
                  },
                  {
                    icon: <Instagram className="w-5 h-5" />,
                    href: "https://www.instagram.com/4fjal/",
                    label: "Instagram",
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 glass rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-2 group"
                    aria-label={social.label}
                  >
                    <span className="group-hover:scale-110 transition-transform block">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-8 glass-dark rounded-3xl border border-border space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-muted-foreground ml-1 flex justify-between">
                  Name
                  {touchedFields.name && !errors.name && (
                    <CheckCircle2 className="w-4 h-4 text-green-500 animate-in fade-in zoom-in" />
                  )}
                </label>
                <div className="relative">
                  <input
                    {...register("name")}
                    type="text"
                    className={`w-full px-4 py-4 bg-white/5 border rounded-2xl focus:outline-none transition-all duration-300 ${
                      errors.name
                        ? "border-red-500/50 focus:border-red-500 bg-red-500/5"
                        : touchedFields.name
                          ? "border-green-500/30 focus:border-green-500/50"
                          : "border-border focus:border-primary/50"
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                  )}
                </div>
                {errors.name && (
                  <p className="text-xs font-medium text-red-500 ml-1 animate-in slide-in-from-top-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-muted-foreground ml-1 flex justify-between">
                  Email
                  {touchedFields.email && !errors.email && (
                    <CheckCircle2 className="w-4 h-4 text-green-500 animate-in fade-in zoom-in" />
                  )}
                </label>
                <div className="relative">
                  <input
                    {...register("email")}
                    type="email"
                    className={`w-full px-4 py-4 bg-white/5 border rounded-2xl focus:outline-none transition-all duration-300 ${
                      errors.email
                        ? "border-red-500/50 focus:border-red-500 bg-red-500/5"
                        : touchedFields.email
                          ? "border-green-500/30 focus:border-green-500/50"
                          : "border-border focus:border-primary/50"
                    }`}
                    placeholder="hello@example.com"
                  />
                  {errors.email && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                  )}
                </div>
                {errors.email && (
                  <p className="text-xs font-medium text-red-500 ml-1 animate-in slide-in-from-top-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-muted-foreground ml-1 flex justify-between">
                  <span>
                    Phone{" "}
                    <span className="text-[10px] opacity-50 font-normal">
                      (Optional)
                    </span>
                  </span>
                  {touchedFields.phone && !errors.phone && phoneValue && (
                    <CheckCircle2 className="w-4 h-4 text-green-500 animate-in fade-in zoom-in" />
                  )}
                </label>
                <div className="relative">
                  <input
                    {...register("phone")}
                    type="tel"
                    className={`w-full px-4 py-4 bg-white/5 border rounded-2xl focus:outline-none transition-all duration-300 ${
                      errors.phone
                        ? "border-red-500/50 focus:border-red-500 bg-red-500/5"
                        : touchedFields.phone && phoneValue
                          ? "border-green-500/30 focus:border-green-500/50"
                          : "border-border focus:border-primary/50"
                    }`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                  )}
                </div>
                {errors.phone && (
                  <p className="text-xs font-medium text-red-500 ml-1 animate-in slide-in-from-top-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-muted-foreground ml-1 flex justify-between">
                  Subject
                  {touchedFields.subject && !errors.subject && (
                    <CheckCircle2 className="w-4 h-4 text-green-500 animate-in fade-in zoom-in" />
                  )}
                </label>
                <div className="relative">
                  <input
                    {...register("subject")}
                    type="text"
                    className={`w-full px-4 py-4 bg-white/5 border rounded-2xl focus:outline-none transition-all duration-300 ${
                      errors.subject
                        ? "border-red-500/50 focus:border-red-500 bg-red-500/5"
                        : touchedFields.subject
                          ? "border-green-500/30 focus:border-green-500/50"
                          : "border-border focus:border-primary/50"
                    }`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                  )}
                </div>
                {errors.subject && (
                  <p className="text-xs font-medium text-red-500 ml-1 animate-in slide-in-from-top-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-muted-foreground ml-1 flex justify-between">
                Message
                {touchedFields.message && !errors.message && (
                  <CheckCircle2 className="w-4 h-4 text-green-500 animate-in fade-in zoom-in" />
                )}
              </label>
              <div className="relative">
                <textarea
                  {...register("message")}
                  rows={5}
                  className={`w-full px-4 py-4 bg-white/5 border rounded-2xl focus:outline-none transition-all duration-300 resize-none ${
                    errors.message
                      ? "border-red-500/50 focus:border-red-500 bg-red-500/5"
                      : touchedFields.message
                        ? "border-green-500/30 focus:border-green-500/50"
                        : "border-border focus:border-primary/50"
                  }`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <div className="absolute right-4 top-4 text-red-500">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                )}
              </div>
              {errors.message && (
                <p className="text-xs font-medium text-red-500 ml-1 animate-in slide-in-from-top-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full py-5 bg-primary text-primary-foreground rounded-2xl font-bold overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] disabled:opacity-70"
            >
              <div className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span className="tracking-wide">Send Message</span>
                  </>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
