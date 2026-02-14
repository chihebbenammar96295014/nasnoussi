'use client';

export default function WelcomeSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div
        data-parallax="0.5"
        className="absolute inset-0 opacity-10 pointer-events-none"
      >
        <div className="absolute top-10 left-10 text-9xl">❤️</div>
        <div className="absolute bottom-20 right-10 text-8xl">✨</div>
      </div>

      <div className="max-w-3xl text-center space-y-8 relative z-10">
        <h1 className="text-6xl md:text-8xl font-playfair font-bold text-primary animate-fade-in">
          Pour toi, Nasnoussi ❤️
        </h1>

        <div className="space-y-6 text-lg md:text-xl text-foreground leading-relaxed">
          <p>
            أنتِ نور عيني وجمال الحياة، الدفء الذي يملأ كل لحظة، 
            والسبب وراء ابتسامة قلبي كل يوم.
          </p>
          <p className="text-base md:text-lg italic">
            (You are the light of my eyes and the beauty of life, the warmth that fills every moment, 
            and the reason my heart smiles every day.)
          </p>
          <p>
            حبك وقوتك وطيبتك تلهمني أن أكون أفضل، أن أحلم أكبر، وأن أحب أعمق.
          </p>
          <p className="text-base md:text-lg italic">
            (Your love, your strength, and your kindness inspire me to be better, 
            to dream bigger, and to love deeper.)
          </p>
        </div>

        <div className="flex justify-center gap-4 pt-8">
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="text-3xl animate-float"
                style={{
                  animationDelay: `${i * 0.15}s`,
                }}
              >
                ✨
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
