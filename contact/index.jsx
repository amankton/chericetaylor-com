import React, { useState } from "react";
import { Layout } from "../../components/Layout";
import { Mail, MapPin, Mic, Presentation, Briefcase, Newspaper, MessageCircle, Instagram, Linkedin, Facebook } from "lucide-react";

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'General',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-6 overflow-hidden bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white/60 backdrop-blur-sm mb-8">
            <MessageCircle className="w-4 h-4 text-stone-600" />
            <span className="text-xs font-medium text-stone-600 uppercase tracking-widest">Get in Touch</span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-stone-900 tracking-tight leading-tight mb-6">
            Let's Connect
          </h1>

          <p className="text-lg md:text-xl text-stone-600 font-light max-w-2xl mx-auto leading-relaxed">
            Whether you have a question about the podcast, want to book me for speaking, or just want to say hello, I'd love to hear from you.
          </p>
        </div>
      </header>

      {/* Contact Options Grid */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Podcast Inquiries */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-stone-900 rounded-xl flex items-center justify-center mb-4">
              <Mic className="w-6 h-6 text-stone-50" />
            </div>
            <h3 className="text-lg font-serif text-stone-900 mb-2">Podcast Inquiries</h3>
            <p className="text-stone-600 font-light text-sm mb-4 leading-relaxed">
              Questions about episodes or guest opportunities
            </p>
            <a href="mailto:podcast@chericetaylor.com" className="text-stone-900 font-medium text-sm hover:underline">
              podcast@chericetaylor.com
            </a>
          </div>

          {/* Speaking Engagements */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-stone-900 rounded-xl flex items-center justify-center mb-4">
              <Presentation className="w-6 h-6 text-stone-50" />
            </div>
            <h3 className="text-lg font-serif text-stone-900 mb-2">Speaking Engagements</h3>
            <p className="text-stone-600 font-light text-sm mb-4 leading-relaxed">
              Book Cherice for your event or conference
            </p>
            <a href="mailto:speaking@chericetaylor.com" className="text-stone-900 font-medium text-sm hover:underline">
              speaking@chericetaylor.com
            </a>
          </div>

          {/* Career Advising */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-stone-900 rounded-xl flex items-center justify-center mb-4">
              <Briefcase className="w-6 h-6 text-stone-50" />
            </div>
            <h3 className="text-lg font-serif text-stone-900 mb-2">Career Advising</h3>
            <p className="text-stone-600 font-light text-sm mb-4 leading-relaxed">
              Schedule a career advising session
            </p>
            <a href="mailto:advising@chericetaylor.com" className="text-stone-900 font-medium text-sm hover:underline">
              advising@chericetaylor.com
            </a>
          </div>

          {/* Media & Press */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-stone-900 rounded-xl flex items-center justify-center mb-4">
              <Newspaper className="w-6 h-6 text-stone-50" />
            </div>
            <h3 className="text-lg font-serif text-stone-900 mb-2">Media & Press</h3>
            <p className="text-stone-600 font-light text-sm mb-4 leading-relaxed">
              Press inquiries and media requests
            </p>
            <a href="mailto:press@chericetaylor.com" className="text-stone-900 font-medium text-sm hover:underline">
              press@chericetaylor.com
            </a>
          </div>

          {/* General Inquiries */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-stone-900 rounded-xl flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-stone-50" />
            </div>
            <h3 className="text-lg font-serif text-stone-900 mb-2">General Inquiries</h3>
            <p className="text-stone-600 font-light text-sm mb-4 leading-relaxed">
              All other questions and comments
            </p>
            <a href="mailto:hello@chericetaylor.com" className="text-stone-900 font-medium text-sm hover:underline">
              hello@chericetaylor.com
            </a>
          </div>

          {/* Location */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-stone-900 rounded-xl flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-stone-50" />
            </div>
            <h3 className="text-lg font-serif text-stone-900 mb-2">Location</h3>
            <p className="text-stone-600 font-light text-sm mb-4 leading-relaxed">
              Based in Los Angeles, CA
            </p>
            <p className="text-stone-900 font-medium text-sm">
              Virtual services available nationwide
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-stone-200 shadow-sm">
          <div className="mb-8">
            <h2 className="font-serif text-3xl text-stone-900 mb-2">Send a Message</h2>
            <p className="text-stone-600 font-light">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-300 focus:border-stone-300 transition-all"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-300 focus:border-stone-300 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                  Phone <span className="text-stone-400 text-xs">(optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-300 focus:border-stone-300 transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Inquiry Type */}
              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-stone-700 mb-2">
                  Inquiry Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  required
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-300 focus:border-stone-300 transition-all bg-white"
                >
                  <option value="General">General</option>
                  <option value="Podcast">Podcast</option>
                  <option value="Speaking">Speaking</option>
                  <option value="Career Advising">Career Advising</option>
                  <option value="Media">Media & Press</option>
                </select>
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-300 focus:border-stone-300 transition-all"
                placeholder="What's this about?"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-300 focus:border-stone-300 transition-all resize-none"
                placeholder="Tell me more about what you're looking for..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4">
              <p className="text-sm text-stone-500">
                I typically respond within 24-48 hours.
              </p>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-stone-900 text-stone-50 rounded-xl font-medium hover:bg-stone-800 transition-colors shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Social Media & FAQ */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Social Media */}
          <div>
            <h3 className="font-serif text-2xl text-stone-900 mb-6">Connect on Social Media</h3>
            <p className="text-stone-600 font-light mb-6 leading-relaxed">
              Follow along for daily insights, podcast updates, and behind-the-scenes content.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center hover:bg-stone-800 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-stone-50" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center hover:bg-stone-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-stone-50" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center hover:bg-stone-800 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-stone-50" />
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="font-serif text-2xl text-stone-900 mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-stone-900 mb-1">How do I book Cherice for speaking?</h4>
                <p className="text-stone-600 font-light text-sm leading-relaxed">
                  Email speaking@chericetaylor.com with your event details, date, and audience information.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-stone-900 mb-1">Can I suggest a podcast topic?</h4>
                <p className="text-stone-600 font-light text-sm leading-relaxed">
                  Absolutely! Send your ideas to podcast@chericetaylor.com. I love hearing from listeners.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-stone-900 mb-1">Do you offer one-on-one coaching?</h4>
                <p className="text-stone-600 font-light text-sm leading-relaxed">
                  Yes, I offer career advising sessions. Contact advising@chericetaylor.com to learn more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="bg-stone-900 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-serif text-2xl text-stone-50 mb-4">Office Hours & Availability</h3>
          <p className="text-stone-300 font-light mb-6 leading-relaxed">
            I'm based in Los Angeles, CA (PST/PDT) and typically respond to inquiries within 24-48 hours during business days.
          </p>
          <p className="text-stone-400 text-sm">
            For urgent speaking inquiries, please mention "URGENT" in your subject line.
          </p>
        </div>
      </section>

    </Layout>
  );
}
