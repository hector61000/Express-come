import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";
import { useToast } from "./ui/use-toast";

export const ContactForm = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the WhatsApp message
    const message = `مرحباً، أنا ${name}. أريد إنشاء موقع ${type}. رقم هاتفي: ${phone}`;
    const whatsappUrl = `https://wa.me/201030435987?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new window
    window.open(whatsappUrl, "_blank");
    
    // Show success message
    toast({
      title: "تم إرسال طلبك بنجاح",
      description: "سيتم التواصل معك قريباً. شكراً لثقتك بنا",
    });
    
    // Reset form and close dialog
    setName("");
    setPhone("");
    setType("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] text-right">
        <DialogHeader>
          <DialogTitle className="text-2xl">اتصل بنا</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="الاسم"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="text-right"
            />
          </div>
          <div>
            <Input
              placeholder="رقم الهاتف"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="text-right"
            />
          </div>
          <div>
            <Select value={type} onValueChange={setType} required>
              <SelectTrigger className="text-right">
                <SelectValue placeholder="نوع الموقع" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="business">موقع شركة</SelectItem>
                <SelectItem value="ecommerce">متجر إلكتروني</SelectItem>
                <SelectItem value="personal">موقع شخصي</SelectItem>
                <SelectItem value="other">آخر</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">إرسال</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};