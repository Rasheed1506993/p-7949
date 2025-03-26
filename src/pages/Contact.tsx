
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulate API call
    setTimeout(() => {
      console.log("Contact form submitted:", formState);
      setFormStatus("success");
      
      // Reset form after success
      setTimeout(() => {
        setFormState({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setFormStatus("idle");
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-28 pb-20 px-4">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">تواصل معنا</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              نحن هنا للإجابة على جميع استفساراتك. يمكنك التواصل معنا مباشرة أو ملء النموذج أدناه وسنرد عليك في أقرب وقت ممكن.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-xl shadow-sm p-8 text-right">
                <h2 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h2>
                
                {formStatus === "success" ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6">
                      <Check className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">تم إرسال رسالتك بنجاح</h3>
                    <p className="text-gray-600">
                      شكرًا لتواصلك معنا! سنقوم بالرد عليك في أقرب وقت ممكن.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          الاسم الكامل
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary text-right"
                          placeholder="أدخل اسمك الكامل"
                          disabled={formStatus === "submitting"}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          البريد الإلكتروني
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary text-right"
                          placeholder="example@domain.com"
                          disabled={formStatus === "submitting"}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary text-right"
                        placeholder="05xxxxxxxx"
                        disabled={formStatus === "submitting"}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        الرسالة
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary text-right"
                        placeholder="اكتب رسالتك هنا..."
                        disabled={formStatus === "submitting"}
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className={`w-full py-3 rounded-lg font-medium text-white transition-all flex items-center justify-center ${
                        formStatus === "submitting"
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-primary hover:bg-primary/90"
                      }`}
                      disabled={formStatus === "submitting"}
                    >
                      {formStatus === "submitting" ? (
                        "جارِ الإرسال..."
                      ) : (
                        <>
                          <Send className="h-5 w-5 ml-2 rtl:mr-2 rtl:ml-0" />
                          <span>إرسال الرسالة</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6 flex rtl items-center">
                  <div className="bg-primary/10 p-4 rounded-lg ml-5 rtl:ml-5 rtl:mr-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-lg font-semibold mb-1">اتصل بنا</h3>
                    <p className="text-gray-600">+966 12 345 6789</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6 flex rtl items-center">
                  <div className="bg-primary/10 p-4 rounded-lg ml-5 rtl:ml-5 rtl:mr-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-lg font-semibold mb-1">البريد الإلكتروني</h3>
                    <p className="text-gray-600">info@realestate-example.com</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6 flex rtl items-center">
                  <div className="bg-primary/10 p-4 rounded-lg ml-5 rtl:ml-5 rtl:mr-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-lg font-semibold mb-1">العنوان</h3>
                    <p className="text-gray-600">شارع الملك فهد، الرياض، المملكة العربية السعودية</p>
                  </div>
                </div>
                
                {/* Google Map Placeholder */}
                <div className="bg-gray-200 rounded-xl h-80 overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.7326833578713!2d46.6752235!3d24.7135517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sKing%20Fahd%20Rd%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1625761238538!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Our Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
