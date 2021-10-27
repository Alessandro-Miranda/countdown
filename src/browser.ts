import { countdown } from './coutdown';

declare global {
    interface Window {
        countdown: any;
    }
};

(function() {
    window.countdown = countdown;
})();