import React, { useEffect, useState } from 'react';
import { Cookie, Utensils, Smile, ChefHat, Coffee } from 'lucide-react';

const icons = [Cookie, Utensils, Smile, ChefHat, Coffee];

export const BackgroundAnimation: React.FC = () => {
    const [items, setItems] = useState<any[]>([]);

    useEffect(() => {
        // Generate random items on client side only to avoid hydration mismatch if SSR (though this is SPA)
        // and to keep it dynamic.
        const newItems = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            Icon: icons[Math.floor(Math.random() * icons.length)],
            left: `${Math.random() * 100}%`,
            animationDuration: `${15 + Math.random() * 20}s`, // Slow fall: 15-35s
            animationDelay: `${Math.random() * 20}s`, // Random start
            size: 24 + Math.random() * 24, // Random size
            opacity: 0.05 + Math.random() * 0.1 // Subtle opacity
        }));
        setItems(newItems);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 print:hidden">
            {/* Global Keyframes style */}
            <style>{`
                @keyframes fall {
                    0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
                    10% { opacity: var(--target-opacity); }
                    90% { opacity: var(--target-opacity); }
                    100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
                }
            `}</style>

            {items.map((item) => (
                <div
                    key={item.id}
                    className="absolute top-0 text-amber-200"
                    style={{
                        left: item.left,
                        animation: `fall ${item.animationDuration} linear infinite`,
                        animationDelay: `-${item.animationDelay}`, // Negative delay to start immediately scattered
                        fontSize: item.size,
                        '--target-opacity': item.opacity,
                        opacity: 0, // Start hidden, animation takes over
                    } as any}
                >
                    <item.Icon size={item.size} />
                </div>
            ))}
        </div>
    );
};
