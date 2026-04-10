"use client";

import { useState, useCallback, ChangeEvent } from "react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  return { formData, handleChange };
}
