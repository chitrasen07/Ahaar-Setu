
import { useState, useEffect, useRef } from 'react';

interface CounterProps {
  targetValue: number;
  suffix: string;
  description: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ targetValue, suffix, description, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const step = Math.max(1, Math.floor(targetValue / 100));
    const startTimestamp = performance.now();

    const updateCounter = (timestamp: number) => {
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const newValue = Math.floor(progress * targetValue);
      
      if (newValue !== start) {
        start = newValue;
        setCount(start);
      }

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(targetValue);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isVisible, targetValue, duration]);

  return (
    <div ref={counterRef} className="text-center p-4 flex flex-col items-center">
      <div className="flex justify-center items-baseline">
        <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-aahaar-green-600 animate-count-up">
          {count.toLocaleString()}
        </span>
        <span className="ml-1 text-xl md:text-2xl font-bold text-aahaar-green-500">{suffix}</span>
      </div>
      <p className="mt-2 text-sm md:text-base text-gray-600">{description}</p>
    </div>
  );
};

const ImpactCounter: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 rounded-xl shadow-inner">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Impact So Far</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Counter targetValue={750} suffix="kg" description="Food Redistributed" />
        <Counter targetValue={1500} suffix="" description="Meals Provided" />
        <Counter targetValue={900} suffix="kg" description="CO2 Emissions Avoided" />
        <Counter targetValue={120} suffix="" description="Active Contributors" />
      </div>
    </div>
  );
};

export default ImpactCounter;
