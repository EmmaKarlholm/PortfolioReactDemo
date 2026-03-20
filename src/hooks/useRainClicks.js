import { useState } from "react";

export default function useRainClicks(triggerTheRain) {
    const [followClicks, setFollowClicks] = useState(0);

    const clickedFollow = () => {
        setFollowClicks(prev => {
            const current = prev + 1;
            if (current >= 10) {
                triggerTheRain();
                return 0;
            }

            return current;
        });
    };
    
    return {followClicks, clickedFollow}
}