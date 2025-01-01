import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">خطة الأسعار</h2>
        <div className="max-w-md mx-auto">
          <Card className="border-[#ff6b00] shadow-lg">
            <CardHeader>
              <CardTitle className="text-center text-2xl">الباقة الشاملة</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold mb-6 text-[#ff6b00]">1500 ج.م</div>
              <ul className="text-right space-y-4 text-lg">
                <li className="flex items-center gap-2">
                  <span className="text-[#ff6b00]">✓</span>
                  تصميم مخصص واحترافي
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#ff6b00]">✓</span>
                  أمان عالي SSL
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#ff6b00]">✓</span>
                  موقع ثابت يعمل بكفاءة عالية
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#ff6b00]">✓</span>
                  تسليم خلال 72 ساعة فقط
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};