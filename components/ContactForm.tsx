"use client";
import emailjs from "emailjs-com";
import { useEffect, useRef, useState } from "react";

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

interface ContactFormProps {
  onClose: () => void;
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [popup, setPopup] = useState({ visible: false, message: "", type: "" });

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !phone || !message) {
      setPopup({ visible: true, message: "Please fill all fields.", type: "error" });
      return;
    }

    const templateParams = { name, email, phone, message };

    emailjs.send(SERVICE_ID!, TEMPLATE_ID!, templateParams, PUBLIC_KEY!).then(
      () => {
        setPopup({ visible: true, message: "Message sent successfully!", type: "success" });
        e.currentTarget.reset();
        setTimeout(() => onClose(), 2000);
      },
      () => {
        setPopup({ visible: true, message: "Failed to send. Try again.", type: "error" });
      }
    );
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {popup.visible && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div
            className={`bg-white p-6 rounded-xl shadow-2xl max-w-sm w-full mx-4 ${
              popup.type === "success" ? "border-l-4 border-green-500" : "border-l-4 border-red-500"
            }`}
          >
            <p className="text-center text-lg text-gray-800">{popup.message}</p>
            <button
              onClick={() => setPopup({ ...popup, visible: false })}
              className="mt-4 w-full py-2 bg-primary text-white rounded-lg hover:opacity-90 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div ref={modalRef} className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-primary">Contact Us</h2>
          <button
            onClick={onClose}
            className="text-primary hover:text-opacity-70 transition text-3xl font-light leading-none cursor-pointer"
          >
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition placeholder:text-gray-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition placeholder:text-gray-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            required
            className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition placeholder:text-gray-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            rows={4}
            className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition resize-none placeholder:text-gray-500"
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-xl hover:opacity-90 transition font-medium shadow-lg cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
