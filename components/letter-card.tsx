'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function LetterCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      {!isOpen ? (
        <div className="flex flex-col items-center gap-8">
          <div
            className="w-full max-w-md aspect-square glass-effect rounded-3xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            onClick={() => setIsOpen(true)}
          >
            <div className="space-y-4">
              <div className="text-7xl group-hover:animate-heart-beat">💌</div>
              <h3 className="text-3xl font-playfair font-bold text-primary">
                A Special Letter
              </h3>
              <p className="text-lg text-muted-foreground">
                Click to open
              </p>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground animate-pulse">
            Open the letter to read a special message
          </p>
        </div>
      ) : (
        <div className="space-y-8 animate-fade-in">
          <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl space-y-6">
            <div className="space-y-4 text-lg leading-relaxed text-foreground">
              <p className="font-playfair text-2xl text-primary italic">
                يا حبيبتي Nasnoussi,
              </p>

              <p className="text-base">
                أنتِ سري الأول وآخر أحلامي، والحب الذي جعل حياتي تستحق أن تُعاش.
              </p>
              <p className="text-base italic text-primary/80">
                You are my first secret and the end of my dreams, the love that made my life worth living.
              </p>

              <p>
                منذ لحظة دخولك حياتي، تغيّر كل شيء بالطريقة الأجمل والأكثر سحراً. 
                You are my greatest blessing, my inspiration, and my forever dream.
              </p>

              <p>
                طيبتك، قوتك، وحبك اللا محدود يجعلانك فريدة بحق. في هذا يوم الحب، 
                أعدك بأنني سأظل أثمّنك وأدعمك وأحبك أكثر مع كل يوم يمر.
              </p>

              <p>
                شكراً لك على أن تكوني شريكتي في كل مغامرات الحياة. 
                أتطلع لخلق لحظات جميلة لا تُحصى معك.
              </p>

              <p className="font-playfair text-xl text-primary italic">
                للأبد وفي كل الأحوال،
                <br />
                بكل حبي ❤️
              </p>
            </div>

            <div className="pt-8 border-t border-primary/20">
              <p className="text-center text-sm text-muted-foreground">
                This website is created with love for you
              </p>
            </div>
          </div>

          <Button
            onClick={() => setIsOpen(false)}
            className="w-full py-6 text-lg bg-primary hover:bg-secondary text-white rounded-full transition-all duration-300"
          >
            Close Letter
          </Button>
        </div>
      )}
    </div>
  );
}
