import { countdown } from './countdown';

declare global {
    interface Window {
        countdown: any;
    }
};

(function() {
    window.countdown = countdown;
})();