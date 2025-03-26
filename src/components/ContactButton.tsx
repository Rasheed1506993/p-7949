
import React, { useState } from "react";
import { Phone, User, Mail, MessageSquare, Check, X } from "lucide-react";

interface ContactButtonProps {
  propertyId: string;
  propertyTitle: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ propertyId, propertyTitle }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
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
      console.log("Form submitted:", { propertyId, propertyTitle, ...formState });
      setFormStatus("success");
      
      // Reset form after success
      setTimeout(() => {
        setFormState({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setIsFormOpen(false);
        setFormStatus("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <div>
      <button
        onClick={() => setIsFormOpen(true)}
        className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center"
      >
        <Phone className="h-5 w-5 ml-2 rtl:mr-2 rtl:ml-0" />
        <span>طلب تواصل مع المالك</span>
      </button>

      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <div 
            className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full relative animate-scale-in overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 left-4 text-gray-500 hover:text-gray-800 transition-colors"
              disabled={formStatus === "submitting"}
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="text-right mb-6">
              <h3 className="text-xl font-bold">طلب معلومات عن العقار</h3>
              <p className="text-gray-600 mt-1 text-sm">{propertyTitle}</p>
            </div>

            {formStatus === "success" ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">تم إرسال طلبك بنجاح</h3>
                <p className="text-gray-600 mt-2">سنتواصل معك في أقرب وقت ممكن</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-right">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    الاسم
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary pr-10 text-right"
                      placeholder="أدخل اسمك الكامل"
                      disabled={formStatus === "submitting"}
                    />
                    <User className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    البريد الإلكتروني
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary pr-10 text-right"
                      placeholder="example@domain.com"
                      disabled={formStatus === "submitting"}
                    />
                    <Mail className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    رقم الهاتف
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary pr-10 text-right"
                      placeholder="05xxxxxxxx"
                      disabled={formStatus === "submitting"}
                    />
                    <Phone className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    الرسالة
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary pr-10 text-right"
                      placeholder="اكتب استفسارك أو رسالتك هنا..."
                      disabled={formStatus === "submitting"}
                    ></textarea>
                    <MessageSquare className="h-5 w-5 text-gray-400 absolute right-3 top-4" />
                  </div>
                </div>

                <button
                  type="submit"
                  className={`w-full py-3 rounded-lg font-medium text-white transition-all ${
                    formStatus === "submitting"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-primary hover:bg-primary/90"
                  }`}
                  disabled={formStatus === "submitting"}
                >
                  {formStatus === "submitting" ? "جارِ الإرسال..." : "إرسال الطلب"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactButton;
