export default function refObserver(ref: any, action: any) {
    const ioConfiguration = {
        rootMargin: '-30% 0% -30% 0%',
        threshold: 0
    };

    const observer: any = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            action();
        }

    }, ioConfiguration);

    observer.observe(ref?.current);
}
