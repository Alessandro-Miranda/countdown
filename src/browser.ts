import { countdown } from './countdown';

declare global {
    interface Window {
        countdown: typeof countdown;
    }
};

(function() {
    window.countdown = countdown;
})();